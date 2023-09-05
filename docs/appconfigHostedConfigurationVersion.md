# `aws_appconfig_hosted_configuration_version`

Refer to the Terraform Registory for docs: [`aws_appconfig_hosted_configuration_version`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version).

# `appconfigHostedConfigurationVersion` Submodule <a name="`appconfigHostedConfigurationVersion` Submodule" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigHostedConfigurationVersion <a name="AppconfigHostedConfigurationVersion" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version aws_appconfig_hosted_configuration_version}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer"></a>

```typescript
import { appconfigHostedConfigurationVersion } from '@cdktf/aws-cdk'

new appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion(scope: Construct, id: string, config: AppconfigHostedConfigurationVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig">AppconfigHostedConfigurationVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig">AppconfigHostedConfigurationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct"></a>

```typescript
import { appconfigHostedConfigurationVersion } from '@cdktf/aws-cdk'

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement"></a>

```typescript
import { appconfigHostedConfigurationVersion } from '@cdktf/aws-cdk'

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource"></a>

```typescript
import { appconfigHostedConfigurationVersion } from '@cdktf/aws-cdk'

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionNumber">versionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileIdInput">configurationProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionNumber"></a>

```typescript
public readonly versionNumber: number;
```

- *Type:* number

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `configurationProfileIdInput`<sup>Optional</sup> <a name="configurationProfileIdInput" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileIdInput"></a>

```typescript
public readonly configurationProfileIdInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigHostedConfigurationVersionConfig <a name="AppconfigHostedConfigurationVersionConfig" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.Initializer"></a>

```typescript
import { appconfigHostedConfigurationVersion } from '@cdktf/aws-cdk'

const appconfigHostedConfigurationVersionConfig: appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#application_id AppconfigHostedConfigurationVersion#application_id}. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#content AppconfigHostedConfigurationVersion#content}. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#content_type AppconfigHostedConfigurationVersion#content_type}. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#description AppconfigHostedConfigurationVersion#description}. |
| <code><a href="#@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#id AppconfigHostedConfigurationVersion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#application_id AppconfigHostedConfigurationVersion#application_id}.

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}.

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#content AppconfigHostedConfigurationVersion#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#content_type AppconfigHostedConfigurationVersion#content_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#description AppconfigHostedConfigurationVersion#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_hosted_configuration_version#id AppconfigHostedConfigurationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



