# `aws_ecr_repository`

Refer to the Terraform Registory for docs: [`aws_ecr_repository`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository).

# `ecrRepository` Submodule <a name="`ecrRepository` Submodule" id="@cdktf/aws-cdk.ecrRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRepository <a name="EcrRepository" id="@cdktf/aws-cdk.ecrRepository.EcrRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository aws_ecr_repository}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.Initializer"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

new ecrRepository.EcrRepository(scope: Construct, id: string, config: EcrRepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig">EcrRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig">EcrRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.putImageScanningConfiguration">putImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.resetImageScanningConfiguration">resetImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.resetImageTagMutability">resetImageTagMutability</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: IResolvable | EcrRepositoryEncryptionConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.putEncryptionConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>[]

---

##### `putImageScanningConfiguration` <a name="putImageScanningConfiguration" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.putImageScanningConfiguration"></a>

```typescript
public putImageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.putImageScanningConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.putTimeouts"></a>

```typescript
public putTimeouts(value: EcrRepositoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeouts">EcrRepositoryTimeouts</a>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageScanningConfiguration` <a name="resetImageScanningConfiguration" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.resetImageScanningConfiguration"></a>

```typescript
public resetImageScanningConfiguration(): void
```

##### `resetImageTagMutability` <a name="resetImageTagMutability" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.resetImageTagMutability"></a>

```typescript
public resetImageTagMutability(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.isConstruct"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

ecrRepository.EcrRepository.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.isTerraformElement"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

ecrRepository.EcrRepository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.isTerraformResource"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

ecrRepository.EcrRepository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList">EcrRepositoryEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.imageScanningConfiguration">imageScanningConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference">EcrRepositoryImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference">EcrRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.imageScanningConfigurationInput">imageScanningConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.imageTagMutabilityInput">imageTagMutabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeouts">EcrRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.imageTagMutability">imageTagMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: EcrRepositoryEncryptionConfigurationList;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList">EcrRepositoryEncryptionConfigurationList</a>

---

##### `imageScanningConfiguration`<sup>Required</sup> <a name="imageScanningConfiguration" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.imageScanningConfiguration"></a>

```typescript
public readonly imageScanningConfiguration: EcrRepositoryImageScanningConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference">EcrRepositoryImageScanningConfigurationOutputReference</a>

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.timeouts"></a>

```typescript
public readonly timeouts: EcrRepositoryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference">EcrRepositoryTimeoutsOutputReference</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | EcrRepositoryEncryptionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageScanningConfigurationInput`<sup>Optional</sup> <a name="imageScanningConfigurationInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.imageScanningConfigurationInput"></a>

```typescript
public readonly imageScanningConfigurationInput: EcrRepositoryImageScanningConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a>

---

##### `imageTagMutabilityInput`<sup>Optional</sup> <a name="imageTagMutabilityInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.imageTagMutabilityInput"></a>

```typescript
public readonly imageTagMutabilityInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EcrRepositoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeouts">EcrRepositoryTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageTagMutability`<sup>Required</sup> <a name="imageTagMutability" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.imageTagMutability"></a>

```typescript
public readonly imageTagMutability: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.ecrRepository.EcrRepository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRepositoryConfig <a name="EcrRepositoryConfig" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.Initializer"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

const ecrRepositoryConfig: ecrRepository.EcrRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#name EcrRepository#name}. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>[]</code> | encryption_configuration block. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#id EcrRepository#id}. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.imageScanningConfiguration">imageScanningConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a></code> | image_scanning_configuration block. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.imageTagMutability">imageTagMutability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#image_tag_mutability EcrRepository#image_tag_mutability}. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#tags EcrRepository#tags}. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#tags_all EcrRepository#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeouts">EcrRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#name EcrRepository#name}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: IResolvable | EcrRepositoryEncryptionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>[]

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#encryption_configuration EcrRepository#encryption_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#id EcrRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageScanningConfiguration`<sup>Optional</sup> <a name="imageScanningConfiguration" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.imageScanningConfiguration"></a>

```typescript
public readonly imageScanningConfiguration: EcrRepositoryImageScanningConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a>

image_scanning_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#image_scanning_configuration EcrRepository#image_scanning_configuration}

---

##### `imageTagMutability`<sup>Optional</sup> <a name="imageTagMutability" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.imageTagMutability"></a>

```typescript
public readonly imageTagMutability: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#image_tag_mutability EcrRepository#image_tag_mutability}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#tags EcrRepository#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#tags_all EcrRepository#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EcrRepositoryTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeouts">EcrRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#timeouts EcrRepository#timeouts}

---

### EcrRepositoryEncryptionConfiguration <a name="EcrRepositoryEncryptionConfiguration" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration.Initializer"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

const ecrRepositoryEncryptionConfiguration: ecrRepository.EcrRepositoryEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration.property.encryptionType">encryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#encryption_type EcrRepository#encryption_type}. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#kms_key EcrRepository#kms_key}. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#encryption_type EcrRepository#encryption_type}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#kms_key EcrRepository#kms_key}.

---

### EcrRepositoryImageScanningConfiguration <a name="EcrRepositoryImageScanningConfiguration" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfiguration.Initializer"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

const ecrRepositoryImageScanningConfiguration: ecrRepository.EcrRepositoryImageScanningConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfiguration.property.scanOnPush">scanOnPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#scan_on_push EcrRepository#scan_on_push}. |

---

##### `scanOnPush`<sup>Required</sup> <a name="scanOnPush" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfiguration.property.scanOnPush"></a>

```typescript
public readonly scanOnPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#scan_on_push EcrRepository#scan_on_push}.

---

### EcrRepositoryTimeouts <a name="EcrRepositoryTimeouts" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeouts.Initializer"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

const ecrRepositoryTimeouts: ecrRepository.EcrRepositoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#delete EcrRepository#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_repository#delete EcrRepository#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRepositoryEncryptionConfigurationList <a name="EcrRepositoryEncryptionConfigurationList" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.Initializer"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

new ecrRepository.EcrRepositoryEncryptionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.get"></a>

```typescript
public get(index: number): EcrRepositoryEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRepositoryEncryptionConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>[]

---


### EcrRepositoryEncryptionConfigurationOutputReference <a name="EcrRepositoryEncryptionConfigurationOutputReference" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

new ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRepositoryEncryptionConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>

---


### EcrRepositoryImageScanningConfigurationOutputReference <a name="EcrRepositoryImageScanningConfigurationOutputReference" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

new ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPushInput">scanOnPushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPush">scanOnPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scanOnPushInput`<sup>Optional</sup> <a name="scanOnPushInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPushInput"></a>

```typescript
public readonly scanOnPushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanOnPush`<sup>Required</sup> <a name="scanOnPush" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPush"></a>

```typescript
public readonly scanOnPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcrRepositoryImageScanningConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a>

---


### EcrRepositoryTimeoutsOutputReference <a name="EcrRepositoryTimeoutsOutputReference" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { ecrRepository } from '@cdktf/aws-cdk'

new ecrRepository.EcrRepositoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeouts">EcrRepositoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRepositoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrRepository.EcrRepositoryTimeouts">EcrRepositoryTimeouts</a>

---



