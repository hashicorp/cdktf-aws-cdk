# `aws_devicefarm_upload`

Refer to the Terraform Registory for docs: [`aws_devicefarm_upload`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload).

# `devicefarmUpload` Submodule <a name="`devicefarmUpload` Submodule" id="@cdktf/aws-cdk.devicefarmUpload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmUpload <a name="DevicefarmUpload" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload aws_devicefarm_upload}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.Initializer"></a>

```typescript
import { devicefarmUpload } from '@cdktf/aws-cdk'

new devicefarmUpload.DevicefarmUpload(scope: Construct, id: string, config: DevicefarmUploadConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig">DevicefarmUploadConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig">DevicefarmUploadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetContentType` <a name="resetContentType" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.isConstruct"></a>

```typescript
import { devicefarmUpload } from '@cdktf/aws-cdk'

devicefarmUpload.DevicefarmUpload.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.isTerraformElement"></a>

```typescript
import { devicefarmUpload } from '@cdktf/aws-cdk'

devicefarmUpload.DevicefarmUpload.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.isTerraformResource"></a>

```typescript
import { devicefarmUpload } from '@cdktf/aws-cdk'

devicefarmUpload.DevicefarmUpload.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.projectArnInput">projectArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.projectArn">projectArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectArnInput`<sup>Optional</sup> <a name="projectArnInput" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.projectArnInput"></a>

```typescript
public readonly projectArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.projectArn"></a>

```typescript
public readonly projectArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUpload.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmUploadConfig <a name="DevicefarmUploadConfig" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.Initializer"></a>

```typescript
import { devicefarmUpload } from '@cdktf/aws-cdk'

const devicefarmUploadConfig: devicefarmUpload.DevicefarmUploadConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload#name DevicefarmUpload#name}. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.projectArn">projectArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload#project_arn DevicefarmUpload#project_arn}. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload#type DevicefarmUpload#type}. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload#content_type DevicefarmUpload#content_type}. |
| <code><a href="#@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload#id DevicefarmUpload#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload#name DevicefarmUpload#name}.

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.projectArn"></a>

```typescript
public readonly projectArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload#project_arn DevicefarmUpload#project_arn}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload#type DevicefarmUpload#type}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload#content_type DevicefarmUpload#content_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.devicefarmUpload.DevicefarmUploadConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/devicefarm_upload#id DevicefarmUpload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



