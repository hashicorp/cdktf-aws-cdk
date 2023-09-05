# `aws_lightsail_static_ip_attachment`

Refer to the Terraform Registory for docs: [`aws_lightsail_static_ip_attachment`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lightsail_static_ip_attachment).

# `lightsailStaticIpAttachment` Submodule <a name="`lightsailStaticIpAttachment` Submodule" id="@cdktf/aws-cdk.lightsailStaticIpAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailStaticIpAttachment <a name="LightsailStaticIpAttachment" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lightsail_static_ip_attachment aws_lightsail_static_ip_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.Initializer"></a>

```typescript
import { lightsailStaticIpAttachment } from '@cdktf/aws-cdk'

new lightsailStaticIpAttachment.LightsailStaticIpAttachment(scope: Construct, id: string, config: LightsailStaticIpAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig">LightsailStaticIpAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig">LightsailStaticIpAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.isConstruct"></a>

```typescript
import { lightsailStaticIpAttachment } from '@cdktf/aws-cdk'

lightsailStaticIpAttachment.LightsailStaticIpAttachment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.isTerraformElement"></a>

```typescript
import { lightsailStaticIpAttachment } from '@cdktf/aws-cdk'

lightsailStaticIpAttachment.LightsailStaticIpAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.isTerraformResource"></a>

```typescript
import { lightsailStaticIpAttachment } from '@cdktf/aws-cdk'

lightsailStaticIpAttachment.LightsailStaticIpAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.staticIpNameInput">staticIpNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.staticIpName">staticIpName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `staticIpNameInput`<sup>Optional</sup> <a name="staticIpNameInput" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.staticIpNameInput"></a>

```typescript
public readonly staticIpNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `staticIpName`<sup>Required</sup> <a name="staticIpName" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.staticIpName"></a>

```typescript
public readonly staticIpName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailStaticIpAttachmentConfig <a name="LightsailStaticIpAttachmentConfig" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.Initializer"></a>

```typescript
import { lightsailStaticIpAttachment } from '@cdktf/aws-cdk'

const lightsailStaticIpAttachmentConfig: lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.instanceName">instanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lightsail_static_ip_attachment#instance_name LightsailStaticIpAttachment#instance_name}. |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.staticIpName">staticIpName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lightsail_static_ip_attachment#static_ip_name LightsailStaticIpAttachment#static_ip_name}. |
| <code><a href="#@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lightsail_static_ip_attachment#id LightsailStaticIpAttachment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lightsail_static_ip_attachment#instance_name LightsailStaticIpAttachment#instance_name}.

---

##### `staticIpName`<sup>Required</sup> <a name="staticIpName" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.staticIpName"></a>

```typescript
public readonly staticIpName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lightsail_static_ip_attachment#static_ip_name LightsailStaticIpAttachment#static_ip_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.lightsailStaticIpAttachment.LightsailStaticIpAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lightsail_static_ip_attachment#id LightsailStaticIpAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



