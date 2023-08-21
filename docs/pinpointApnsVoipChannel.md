# `aws_pinpoint_apns_voip_channel`

Refer to the Terraform Registory for docs: [`aws_pinpoint_apns_voip_channel`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel).

# `pinpointApnsVoipChannel` Submodule <a name="`pinpointApnsVoipChannel` Submodule" id="@cdktf/aws-cdk.pinpointApnsVoipChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsVoipChannel <a name="PinpointApnsVoipChannel" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel aws_pinpoint_apns_voip_channel}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer"></a>

```typescript
import { pinpointApnsVoipChannel } from '@cdktf/aws-cdk'

new pinpointApnsVoipChannel.PinpointApnsVoipChannel(scope: Construct, id: string, config: PinpointApnsVoipChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig">PinpointApnsVoipChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig">PinpointApnsVoipChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetBundleId">resetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetDefaultAuthenticationMethod">resetDefaultAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKey">resetTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKeyId">resetTokenKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBundleId` <a name="resetBundleId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetBundleId"></a>

```typescript
public resetBundleId(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetDefaultAuthenticationMethod` <a name="resetDefaultAuthenticationMethod" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetDefaultAuthenticationMethod"></a>

```typescript
public resetDefaultAuthenticationMethod(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTeamId"></a>

```typescript
public resetTeamId(): void
```

##### `resetTokenKey` <a name="resetTokenKey" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKey"></a>

```typescript
public resetTokenKey(): void
```

##### `resetTokenKeyId` <a name="resetTokenKeyId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKeyId"></a>

```typescript
public resetTokenKeyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct"></a>

```typescript
import { pinpointApnsVoipChannel } from '@cdktf/aws-cdk'

pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement"></a>

```typescript
import { pinpointApnsVoipChannel } from '@cdktf/aws-cdk'

pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource"></a>

```typescript
import { pinpointApnsVoipChannel } from '@cdktf/aws-cdk'

pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleIdInput">bundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethodInput">defaultAuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyIdInput">tokenKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyInput">tokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKey">tokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyId">tokenKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleIdInput"></a>

```typescript
public readonly bundleIdInput: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `defaultAuthenticationMethodInput`<sup>Optional</sup> <a name="defaultAuthenticationMethodInput" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethodInput"></a>

```typescript
public readonly defaultAuthenticationMethodInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `tokenKeyIdInput`<sup>Optional</sup> <a name="tokenKeyIdInput" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyIdInput"></a>

```typescript
public readonly tokenKeyIdInput: string;
```

- *Type:* string

---

##### `tokenKeyInput`<sup>Optional</sup> <a name="tokenKeyInput" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyInput"></a>

```typescript
public readonly tokenKeyInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `defaultAuthenticationMethod`<sup>Required</sup> <a name="defaultAuthenticationMethod" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethod"></a>

```typescript
public readonly defaultAuthenticationMethod: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `tokenKey`<sup>Required</sup> <a name="tokenKey" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKey"></a>

```typescript
public readonly tokenKey: string;
```

- *Type:* string

---

##### `tokenKeyId`<sup>Required</sup> <a name="tokenKeyId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyId"></a>

```typescript
public readonly tokenKeyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsVoipChannelConfig <a name="PinpointApnsVoipChannelConfig" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.Initializer"></a>

```typescript
import { pinpointApnsVoipChannel } from '@cdktf/aws-cdk'

const pinpointApnsVoipChannelConfig: pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#application_id PinpointApnsVoipChannel#application_id}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.bundleId">bundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#bundle_id PinpointApnsVoipChannel#bundle_id}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#certificate PinpointApnsVoipChannel#certificate}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#enabled PinpointApnsVoipChannel#enabled}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#id PinpointApnsVoipChannel#id}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#private_key PinpointApnsVoipChannel#private_key}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#team_id PinpointApnsVoipChannel#team_id}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKey">tokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#token_key PinpointApnsVoipChannel#token_key}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKeyId">tokenKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#token_key_id PinpointApnsVoipChannel#token_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#application_id PinpointApnsVoipChannel#application_id}.

---

##### `bundleId`<sup>Optional</sup> <a name="bundleId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#bundle_id PinpointApnsVoipChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#certificate PinpointApnsVoipChannel#certificate}.

---

##### `defaultAuthenticationMethod`<sup>Optional</sup> <a name="defaultAuthenticationMethod" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.defaultAuthenticationMethod"></a>

```typescript
public readonly defaultAuthenticationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#enabled PinpointApnsVoipChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#id PinpointApnsVoipChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#private_key PinpointApnsVoipChannel#private_key}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#team_id PinpointApnsVoipChannel#team_id}.

---

##### `tokenKey`<sup>Optional</sup> <a name="tokenKey" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKey"></a>

```typescript
public readonly tokenKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#token_key PinpointApnsVoipChannel#token_key}.

---

##### `tokenKeyId`<sup>Optional</sup> <a name="tokenKeyId" id="@cdktf/aws-cdk.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKeyId"></a>

```typescript
public readonly tokenKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_apns_voip_channel#token_key_id PinpointApnsVoipChannel#token_key_id}.

---



