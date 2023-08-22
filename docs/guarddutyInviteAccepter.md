# `aws_guardduty_invite_accepter`

Refer to the Terraform Registory for docs: [`aws_guardduty_invite_accepter`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_invite_accepter).

# `guarddutyInviteAccepter` Submodule <a name="`guarddutyInviteAccepter` Submodule" id="@cdktf/aws-cdk.guarddutyInviteAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyInviteAccepter <a name="GuarddutyInviteAccepter" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_invite_accepter aws_guardduty_invite_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.Initializer"></a>

```typescript
import { guarddutyInviteAccepter } from '@cdktf/aws-cdk'

new guarddutyInviteAccepter.GuarddutyInviteAccepter(scope: Construct, id: string, config: GuarddutyInviteAccepterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig">GuarddutyInviteAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig">GuarddutyInviteAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.putTimeouts"></a>

```typescript
public putTimeouts(value: GuarddutyInviteAccepterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts">GuarddutyInviteAccepterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.isConstruct"></a>

```typescript
import { guarddutyInviteAccepter } from '@cdktf/aws-cdk'

guarddutyInviteAccepter.GuarddutyInviteAccepter.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.isTerraformElement"></a>

```typescript
import { guarddutyInviteAccepter } from '@cdktf/aws-cdk'

guarddutyInviteAccepter.GuarddutyInviteAccepter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.isTerraformResource"></a>

```typescript
import { guarddutyInviteAccepter } from '@cdktf/aws-cdk'

guarddutyInviteAccepter.GuarddutyInviteAccepter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference">GuarddutyInviteAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.detectorIdInput">detectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.masterAccountIdInput">masterAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts">GuarddutyInviteAccepterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.masterAccountId">masterAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.timeouts"></a>

```typescript
public readonly timeouts: GuarddutyInviteAccepterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference">GuarddutyInviteAccepterTimeoutsOutputReference</a>

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.detectorIdInput"></a>

```typescript
public readonly detectorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `masterAccountIdInput`<sup>Optional</sup> <a name="masterAccountIdInput" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.masterAccountIdInput"></a>

```typescript
public readonly masterAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GuarddutyInviteAccepterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts">GuarddutyInviteAccepterTimeouts</a>

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `masterAccountId`<sup>Required</sup> <a name="masterAccountId" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.masterAccountId"></a>

```typescript
public readonly masterAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyInviteAccepterConfig <a name="GuarddutyInviteAccepterConfig" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.Initializer"></a>

```typescript
import { guarddutyInviteAccepter } from '@cdktf/aws-cdk'

const guarddutyInviteAccepterConfig: guarddutyInviteAccepter.GuarddutyInviteAccepterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.detectorId">detectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_invite_accepter#detector_id GuarddutyInviteAccepter#detector_id}. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.masterAccountId">masterAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_invite_accepter#master_account_id GuarddutyInviteAccepter#master_account_id}. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_invite_accepter#id GuarddutyInviteAccepter#id}. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts">GuarddutyInviteAccepterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_invite_accepter#detector_id GuarddutyInviteAccepter#detector_id}.

---

##### `masterAccountId`<sup>Required</sup> <a name="masterAccountId" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.masterAccountId"></a>

```typescript
public readonly masterAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_invite_accepter#master_account_id GuarddutyInviteAccepter#master_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_invite_accepter#id GuarddutyInviteAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GuarddutyInviteAccepterTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts">GuarddutyInviteAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_invite_accepter#timeouts GuarddutyInviteAccepter#timeouts}

---

### GuarddutyInviteAccepterTimeouts <a name="GuarddutyInviteAccepterTimeouts" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts.Initializer"></a>

```typescript
import { guarddutyInviteAccepter } from '@cdktf/aws-cdk'

const guarddutyInviteAccepterTimeouts: guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_invite_accepter#create GuarddutyInviteAccepter#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_invite_accepter#create GuarddutyInviteAccepter#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyInviteAccepterTimeoutsOutputReference <a name="GuarddutyInviteAccepterTimeoutsOutputReference" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.Initializer"></a>

```typescript
import { guarddutyInviteAccepter } from '@cdktf/aws-cdk'

new guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts">GuarddutyInviteAccepterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyInviteAccepterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.guarddutyInviteAccepter.GuarddutyInviteAccepterTimeouts">GuarddutyInviteAccepterTimeouts</a>

---



