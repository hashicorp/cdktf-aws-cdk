# `aws_codestarconnections_connection`

Refer to the Terraform Registory for docs: [`aws_codestarconnections_connection`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection).

# `codestarconnectionsConnection` Submodule <a name="`codestarconnectionsConnection` Submodule" id="@cdktf/aws-cdk.codestarconnectionsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsConnection <a name="CodestarconnectionsConnection" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection aws_codestarconnections_connection}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer"></a>

```typescript
import { codestarconnectionsConnection } from '@cdktf/aws-cdk'

new codestarconnectionsConnection.CodestarconnectionsConnection(scope: Construct, id: string, config: CodestarconnectionsConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig">CodestarconnectionsConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig">CodestarconnectionsConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetHostArn">resetHostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetProviderType">resetProviderType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetHostArn` <a name="resetHostArn" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetHostArn"></a>

```typescript
public resetHostArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProviderType` <a name="resetProviderType" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetProviderType"></a>

```typescript
public resetProviderType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.isConstruct"></a>

```typescript
import { codestarconnectionsConnection } from '@cdktf/aws-cdk'

codestarconnectionsConnection.CodestarconnectionsConnection.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformElement"></a>

```typescript
import { codestarconnectionsConnection } from '@cdktf/aws-cdk'

codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformResource"></a>

```typescript
import { codestarconnectionsConnection } from '@cdktf/aws-cdk'

codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.connectionStatus">connectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.hostArnInput">hostArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.providerTypeInput">providerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.hostArn">hostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `connectionStatus`<sup>Required</sup> <a name="connectionStatus" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.connectionStatus"></a>

```typescript
public readonly connectionStatus: string;
```

- *Type:* string

---

##### `hostArnInput`<sup>Optional</sup> <a name="hostArnInput" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.hostArnInput"></a>

```typescript
public readonly hostArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerTypeInput`<sup>Optional</sup> <a name="providerTypeInput" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.providerTypeInput"></a>

```typescript
public readonly providerTypeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostArn`<sup>Required</sup> <a name="hostArn" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.hostArn"></a>

```typescript
public readonly hostArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsConnectionConfig <a name="CodestarconnectionsConnectionConfig" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.Initializer"></a>

```typescript
import { codestarconnectionsConnection } from '@cdktf/aws-cdk'

const codestarconnectionsConnectionConfig: codestarconnectionsConnection.CodestarconnectionsConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#name CodestarconnectionsConnection#name}. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.hostArn">hostArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#host_arn CodestarconnectionsConnection#host_arn}. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#id CodestarconnectionsConnection#id}. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.providerType">providerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#provider_type CodestarconnectionsConnection#provider_type}. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#tags CodestarconnectionsConnection#tags}. |
| <code><a href="#@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#tags_all CodestarconnectionsConnection#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#name CodestarconnectionsConnection#name}.

---

##### `hostArn`<sup>Optional</sup> <a name="hostArn" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.hostArn"></a>

```typescript
public readonly hostArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#host_arn CodestarconnectionsConnection#host_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#id CodestarconnectionsConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerType`<sup>Optional</sup> <a name="providerType" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#provider_type CodestarconnectionsConnection#provider_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#tags CodestarconnectionsConnection#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codestarconnections_connection#tags_all CodestarconnectionsConnection#tags_all}.

---



