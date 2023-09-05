# `aws_cloudfront_public_key`

Refer to the Terraform Registory for docs: [`aws_cloudfront_public_key`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key).

# `cloudfrontPublicKey` Submodule <a name="`cloudfrontPublicKey` Submodule" id="@cdktf/aws-cdk.cloudfrontPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontPublicKey <a name="CloudfrontPublicKey" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key aws_cloudfront_public_key}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.Initializer"></a>

```typescript
import { cloudfrontPublicKey } from '@cdktf/aws-cdk'

new cloudfrontPublicKey.CloudfrontPublicKey(scope: Construct, id: string, config: CloudfrontPublicKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig">CloudfrontPublicKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig">CloudfrontPublicKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetComment` <a name="resetComment" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.isConstruct"></a>

```typescript
import { cloudfrontPublicKey } from '@cdktf/aws-cdk'

cloudfrontPublicKey.CloudfrontPublicKey.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.isTerraformElement"></a>

```typescript
import { cloudfrontPublicKey } from '@cdktf/aws-cdk'

cloudfrontPublicKey.CloudfrontPublicKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.isTerraformResource"></a>

```typescript
import { cloudfrontPublicKey } from '@cdktf/aws-cdk'

cloudfrontPublicKey.CloudfrontPublicKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.callerReference">callerReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.encodedKeyInput">encodedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.encodedKey">encodedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `callerReference`<sup>Required</sup> <a name="callerReference" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.callerReference"></a>

```typescript
public readonly callerReference: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `encodedKeyInput`<sup>Optional</sup> <a name="encodedKeyInput" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.encodedKeyInput"></a>

```typescript
public readonly encodedKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `encodedKey`<sup>Required</sup> <a name="encodedKey" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.encodedKey"></a>

```typescript
public readonly encodedKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontPublicKeyConfig <a name="CloudfrontPublicKeyConfig" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.Initializer"></a>

```typescript
import { cloudfrontPublicKey } from '@cdktf/aws-cdk'

const cloudfrontPublicKeyConfig: cloudfrontPublicKey.CloudfrontPublicKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.encodedKey">encodedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key#encoded_key CloudfrontPublicKey#encoded_key}. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key#comment CloudfrontPublicKey#comment}. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key#id CloudfrontPublicKey#id}. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key#name CloudfrontPublicKey#name}. |
| <code><a href="#@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key#name_prefix CloudfrontPublicKey#name_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encodedKey`<sup>Required</sup> <a name="encodedKey" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.encodedKey"></a>

```typescript
public readonly encodedKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key#encoded_key CloudfrontPublicKey#encoded_key}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key#comment CloudfrontPublicKey#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key#id CloudfrontPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key#name CloudfrontPublicKey#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.cloudfrontPublicKey.CloudfrontPublicKeyConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudfront_public_key#name_prefix CloudfrontPublicKey#name_prefix}.

---



