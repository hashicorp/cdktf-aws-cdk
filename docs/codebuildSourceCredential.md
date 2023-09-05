# `aws_codebuild_source_credential`

Refer to the Terraform Registory for docs: [`aws_codebuild_source_credential`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential).

# `codebuildSourceCredential` Submodule <a name="`codebuildSourceCredential` Submodule" id="@cdktf/aws-cdk.codebuildSourceCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildSourceCredential <a name="CodebuildSourceCredential" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential aws_codebuild_source_credential}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.Initializer"></a>

```typescript
import { codebuildSourceCredential } from '@cdktf/aws-cdk'

new codebuildSourceCredential.CodebuildSourceCredential(scope: Construct, id: string, config: CodebuildSourceCredentialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig">CodebuildSourceCredentialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig">CodebuildSourceCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.resetId"></a>

```typescript
public resetId(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.resetUserName"></a>

```typescript
public resetUserName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.isConstruct"></a>

```typescript
import { codebuildSourceCredential } from '@cdktf/aws-cdk'

codebuildSourceCredential.CodebuildSourceCredential.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.isTerraformElement"></a>

```typescript
import { codebuildSourceCredential } from '@cdktf/aws-cdk'

codebuildSourceCredential.CodebuildSourceCredential.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.isTerraformResource"></a>

```typescript
import { codebuildSourceCredential } from '@cdktf/aws-cdk'

codebuildSourceCredential.CodebuildSourceCredential.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.serverTypeInput">serverTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.serverType">serverType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serverTypeInput`<sup>Optional</sup> <a name="serverTypeInput" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.serverTypeInput"></a>

```typescript
public readonly serverTypeInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.serverType"></a>

```typescript
public readonly serverType: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredential.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildSourceCredentialConfig <a name="CodebuildSourceCredentialConfig" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.Initializer"></a>

```typescript
import { codebuildSourceCredential } from '@cdktf/aws-cdk'

const codebuildSourceCredentialConfig: codebuildSourceCredential.CodebuildSourceCredentialConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential#auth_type CodebuildSourceCredential#auth_type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.serverType">serverType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential#server_type CodebuildSourceCredential#server_type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential#token CodebuildSourceCredential#token}. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential#id CodebuildSourceCredential#id}. |
| <code><a href="#@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential#user_name CodebuildSourceCredential#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential#auth_type CodebuildSourceCredential#auth_type}.

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.serverType"></a>

```typescript
public readonly serverType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential#server_type CodebuildSourceCredential#server_type}.

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential#token CodebuildSourceCredential#token}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential#id CodebuildSourceCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/aws-cdk.codebuildSourceCredential.CodebuildSourceCredentialConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_source_credential#user_name CodebuildSourceCredential#user_name}.

---



