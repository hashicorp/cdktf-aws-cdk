# `aws_detective_member`

Refer to the Terraform Registory for docs: [`aws_detective_member`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member).

# `detectiveMember` Submodule <a name="`detectiveMember` Submodule" id="@cdktf/aws-cdk.detectiveMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DetectiveMember <a name="DetectiveMember" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member aws_detective_member}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.Initializer"></a>

```typescript
import { detectiveMember } from '@cdktf/aws-cdk'

new detectiveMember.DetectiveMember(scope: Construct, id: string, config: DetectiveMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig">DetectiveMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig">DetectiveMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.resetDisableEmailNotification">resetDisableEmailNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDisableEmailNotification` <a name="resetDisableEmailNotification" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.resetDisableEmailNotification"></a>

```typescript
public resetDisableEmailNotification(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.resetMessage"></a>

```typescript
public resetMessage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.isConstruct"></a>

```typescript
import { detectiveMember } from '@cdktf/aws-cdk'

detectiveMember.DetectiveMember.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.isTerraformElement"></a>

```typescript
import { detectiveMember } from '@cdktf/aws-cdk'

detectiveMember.DetectiveMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.isTerraformResource"></a>

```typescript
import { detectiveMember } from '@cdktf/aws-cdk'

detectiveMember.DetectiveMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.administratorId">administratorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.disabledReason">disabledReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.invitedTime">invitedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.updatedTime">updatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.volumeUsageInBytes">volumeUsageInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.disableEmailNotificationInput">disableEmailNotificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.graphArnInput">graphArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.disableEmailNotification">disableEmailNotification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.graphArn">graphArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.message">message</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `administratorId`<sup>Required</sup> <a name="administratorId" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.administratorId"></a>

```typescript
public readonly administratorId: string;
```

- *Type:* string

---

##### `disabledReason`<sup>Required</sup> <a name="disabledReason" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.disabledReason"></a>

```typescript
public readonly disabledReason: string;
```

- *Type:* string

---

##### `invitedTime`<sup>Required</sup> <a name="invitedTime" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.invitedTime"></a>

```typescript
public readonly invitedTime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedTime`<sup>Required</sup> <a name="updatedTime" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.updatedTime"></a>

```typescript
public readonly updatedTime: string;
```

- *Type:* string

---

##### `volumeUsageInBytes`<sup>Required</sup> <a name="volumeUsageInBytes" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.volumeUsageInBytes"></a>

```typescript
public readonly volumeUsageInBytes: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `disableEmailNotificationInput`<sup>Optional</sup> <a name="disableEmailNotificationInput" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.disableEmailNotificationInput"></a>

```typescript
public readonly disableEmailNotificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `graphArnInput`<sup>Optional</sup> <a name="graphArnInput" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.graphArnInput"></a>

```typescript
public readonly graphArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `disableEmailNotification`<sup>Required</sup> <a name="disableEmailNotification" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.disableEmailNotification"></a>

```typescript
public readonly disableEmailNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `graphArn`<sup>Required</sup> <a name="graphArn" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.graphArn"></a>

```typescript
public readonly graphArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.detectiveMember.DetectiveMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DetectiveMemberConfig <a name="DetectiveMemberConfig" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.Initializer"></a>

```typescript
import { detectiveMember } from '@cdktf/aws-cdk'

const detectiveMemberConfig: detectiveMember.DetectiveMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#account_id DetectiveMember#account_id}. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#email_address DetectiveMember#email_address}. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.graphArn">graphArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#graph_arn DetectiveMember#graph_arn}. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.disableEmailNotification">disableEmailNotification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#disable_email_notification DetectiveMember#disable_email_notification}. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#id DetectiveMember#id}. |
| <code><a href="#@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#message DetectiveMember#message}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#account_id DetectiveMember#account_id}.

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#email_address DetectiveMember#email_address}.

---

##### `graphArn`<sup>Required</sup> <a name="graphArn" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.graphArn"></a>

```typescript
public readonly graphArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#graph_arn DetectiveMember#graph_arn}.

---

##### `disableEmailNotification`<sup>Optional</sup> <a name="disableEmailNotification" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.disableEmailNotification"></a>

```typescript
public readonly disableEmailNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#disable_email_notification DetectiveMember#disable_email_notification}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#id DetectiveMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/aws-cdk.detectiveMember.DetectiveMemberConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/detective_member#message DetectiveMember#message}.

---



