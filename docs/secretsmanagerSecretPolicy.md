# `aws_secretsmanager_secret_policy`

Refer to the Terraform Registory for docs: [`aws_secretsmanager_secret_policy`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/secretsmanager_secret_policy).

# `secretsmanagerSecretPolicy` Submodule <a name="`secretsmanagerSecretPolicy` Submodule" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecretPolicy <a name="SecretsmanagerSecretPolicy" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/secretsmanager_secret_policy aws_secretsmanager_secret_policy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.Initializer"></a>

```typescript
import { secretsmanagerSecretPolicy } from '@cdktf/aws-cdk'

new secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy(scope: Construct, id: string, config: SecretsmanagerSecretPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig">SecretsmanagerSecretPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig">SecretsmanagerSecretPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.resetBlockPublicPolicy">resetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBlockPublicPolicy` <a name="resetBlockPublicPolicy" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.resetBlockPublicPolicy"></a>

```typescript
public resetBlockPublicPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isConstruct"></a>

```typescript
import { secretsmanagerSecretPolicy } from '@cdktf/aws-cdk'

secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isTerraformElement"></a>

```typescript
import { secretsmanagerSecretPolicy } from '@cdktf/aws-cdk'

secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isTerraformResource"></a>

```typescript
import { secretsmanagerSecretPolicy } from '@cdktf/aws-cdk'

secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.blockPublicPolicyInput">blockPublicPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blockPublicPolicyInput`<sup>Optional</sup> <a name="blockPublicPolicyInput" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.blockPublicPolicyInput"></a>

```typescript
public readonly blockPublicPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="blockPublicPolicy" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.blockPublicPolicy"></a>

```typescript
public readonly blockPublicPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretPolicyConfig <a name="SecretsmanagerSecretPolicyConfig" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.Initializer"></a>

```typescript
import { secretsmanagerSecretPolicy } from '@cdktf/aws-cdk'

const secretsmanagerSecretPolicyConfig: secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/secretsmanager_secret_policy#policy SecretsmanagerSecretPolicy#policy}. |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/secretsmanager_secret_policy#secret_arn SecretsmanagerSecretPolicy#secret_arn}. |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/secretsmanager_secret_policy#block_public_policy SecretsmanagerSecretPolicy#block_public_policy}. |
| <code><a href="#@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/secretsmanager_secret_policy#id SecretsmanagerSecretPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/secretsmanager_secret_policy#policy SecretsmanagerSecretPolicy#policy}.

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/secretsmanager_secret_policy#secret_arn SecretsmanagerSecretPolicy#secret_arn}.

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="blockPublicPolicy" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.blockPublicPolicy"></a>

```typescript
public readonly blockPublicPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/secretsmanager_secret_policy#block_public_policy SecretsmanagerSecretPolicy#block_public_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.secretsmanagerSecretPolicy.SecretsmanagerSecretPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/secretsmanager_secret_policy#id SecretsmanagerSecretPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



