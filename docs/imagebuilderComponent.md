# `aws_imagebuilder_component`

Refer to the Terraform Registory for docs: [`aws_imagebuilder_component`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component).

# `imagebuilderComponent` Submodule <a name="`imagebuilderComponent` Submodule" id="@cdktf/aws-cdk.imagebuilderComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderComponent <a name="ImagebuilderComponent" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component aws_imagebuilder_component}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.Initializer"></a>

```typescript
import { imagebuilderComponent } from '@cdktf/aws-cdk'

new imagebuilderComponent.ImagebuilderComponent(scope: Construct, id: string, config: ImagebuilderComponentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig">ImagebuilderComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig">ImagebuilderComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription">resetChangeDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions">resetSupportedOsVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetUri">resetUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetChangeDescription` <a name="resetChangeDescription" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription"></a>

```typescript
public resetChangeDescription(): void
```

##### `resetData` <a name="resetData" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetData"></a>

```typescript
public resetData(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSupportedOsVersions` <a name="resetSupportedOsVersions" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions"></a>

```typescript
public resetSupportedOsVersions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.resetUri"></a>

```typescript
public resetUri(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.isConstruct"></a>

```typescript
import { imagebuilderComponent } from '@cdktf/aws-cdk'

imagebuilderComponent.ImagebuilderComponent.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.isTerraformElement"></a>

```typescript
import { imagebuilderComponent } from '@cdktf/aws-cdk'

imagebuilderComponent.ImagebuilderComponent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.isTerraformResource"></a>

```typescript
import { imagebuilderComponent } from '@cdktf/aws-cdk'

imagebuilderComponent.ImagebuilderComponent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.dateCreated">dateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput">changeDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput">supportedOsVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.changeDescription">changeDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions">supportedOsVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dateCreated`<sup>Required</sup> <a name="dateCreated" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.dateCreated"></a>

```typescript
public readonly dateCreated: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `changeDescriptionInput`<sup>Optional</sup> <a name="changeDescriptionInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput"></a>

```typescript
public readonly changeDescriptionInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `supportedOsVersionsInput`<sup>Optional</sup> <a name="supportedOsVersionsInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput"></a>

```typescript
public readonly supportedOsVersionsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `changeDescription`<sup>Required</sup> <a name="changeDescription" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.changeDescription"></a>

```typescript
public readonly changeDescription: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `supportedOsVersions`<sup>Required</sup> <a name="supportedOsVersions" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions"></a>

```typescript
public readonly supportedOsVersions: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderComponentConfig <a name="ImagebuilderComponentConfig" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.Initializer"></a>

```typescript
import { imagebuilderComponent } from '@cdktf/aws-cdk'

const imagebuilderComponentConfig: imagebuilderComponent.ImagebuilderComponentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#name ImagebuilderComponent#name}. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#platform ImagebuilderComponent#platform}. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#version ImagebuilderComponent#version}. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription">changeDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#change_description ImagebuilderComponent#change_description}. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#data ImagebuilderComponent#data}. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#description ImagebuilderComponent#description}. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#id ImagebuilderComponent#id}. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions">supportedOsVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#tags ImagebuilderComponent#tags}. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#tags_all ImagebuilderComponent#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#uri ImagebuilderComponent#uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#name ImagebuilderComponent#name}.

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#platform ImagebuilderComponent#platform}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#version ImagebuilderComponent#version}.

---

##### `changeDescription`<sup>Optional</sup> <a name="changeDescription" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription"></a>

```typescript
public readonly changeDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#change_description ImagebuilderComponent#change_description}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#data ImagebuilderComponent#data}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#description ImagebuilderComponent#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#id ImagebuilderComponent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}.

---

##### `supportedOsVersions`<sup>Optional</sup> <a name="supportedOsVersions" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions"></a>

```typescript
public readonly supportedOsVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#tags ImagebuilderComponent#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#tags_all ImagebuilderComponent#tags_all}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/aws-cdk.imagebuilderComponent.ImagebuilderComponentConfig.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/imagebuilder_component#uri ImagebuilderComponent#uri}.

---



