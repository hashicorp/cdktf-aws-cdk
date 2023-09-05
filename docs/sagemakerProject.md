# `aws_sagemaker_project`

Refer to the Terraform Registory for docs: [`aws_sagemaker_project`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project).

# `sagemakerProject` Submodule <a name="`sagemakerProject` Submodule" id="@cdktf/aws-cdk.sagemakerProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerProject <a name="SagemakerProject" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project aws_sagemaker_project}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.Initializer"></a>

```typescript
import { sagemakerProject } from '@cdktf/aws-cdk'

new sagemakerProject.SagemakerProject(scope: Construct, id: string, config: SagemakerProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig">SagemakerProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig">SagemakerProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails">putServiceCatalogProvisioningDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.resetProjectDescription">resetProjectDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putServiceCatalogProvisioningDetails` <a name="putServiceCatalogProvisioningDetails" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails"></a>

```typescript
public putServiceCatalogProvisioningDetails(value: SagemakerProjectServiceCatalogProvisioningDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.putServiceCatalogProvisioningDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectDescription` <a name="resetProjectDescription" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.resetProjectDescription"></a>

```typescript
public resetProjectDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.isConstruct"></a>

```typescript
import { sagemakerProject } from '@cdktf/aws-cdk'

sagemakerProject.SagemakerProject.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.isTerraformElement"></a>

```typescript
import { sagemakerProject } from '@cdktf/aws-cdk'

sagemakerProject.SagemakerProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.isTerraformResource"></a>

```typescript
import { sagemakerProject } from '@cdktf/aws-cdk'

sagemakerProject.SagemakerProject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetails">serviceCatalogProvisioningDetails</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference">SagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.projectDescriptionInput">projectDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.projectNameInput">projectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetailsInput">serviceCatalogProvisioningDetailsInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.projectDescription">projectDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `serviceCatalogProvisioningDetails`<sup>Required</sup> <a name="serviceCatalogProvisioningDetails" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetails"></a>

```typescript
public readonly serviceCatalogProvisioningDetails: SagemakerProjectServiceCatalogProvisioningDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference">SagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectDescriptionInput`<sup>Optional</sup> <a name="projectDescriptionInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.projectDescriptionInput"></a>

```typescript
public readonly projectDescriptionInput: string;
```

- *Type:* string

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.projectNameInput"></a>

```typescript
public readonly projectNameInput: string;
```

- *Type:* string

---

##### `serviceCatalogProvisioningDetailsInput`<sup>Optional</sup> <a name="serviceCatalogProvisioningDetailsInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.serviceCatalogProvisioningDetailsInput"></a>

```typescript
public readonly serviceCatalogProvisioningDetailsInput: SagemakerProjectServiceCatalogProvisioningDetails;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectDescription`<sup>Required</sup> <a name="projectDescription" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.projectDescription"></a>

```typescript
public readonly projectDescription: string;
```

- *Type:* string

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerProjectConfig <a name="SagemakerProjectConfig" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.Initializer"></a>

```typescript
import { sagemakerProject } from '@cdktf/aws-cdk'

const sagemakerProjectConfig: sagemakerProject.SagemakerProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.projectName">projectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#project_name SagemakerProject#project_name}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisioningDetails">serviceCatalogProvisioningDetails</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | service_catalog_provisioning_details block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#id SagemakerProject#id}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.projectDescription">projectDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#project_description SagemakerProject#project_description}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#tags SagemakerProject#tags}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#tags_all SagemakerProject#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#project_name SagemakerProject#project_name}.

---

##### `serviceCatalogProvisioningDetails`<sup>Required</sup> <a name="serviceCatalogProvisioningDetails" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.serviceCatalogProvisioningDetails"></a>

```typescript
public readonly serviceCatalogProvisioningDetails: SagemakerProjectServiceCatalogProvisioningDetails;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

service_catalog_provisioning_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#id SagemakerProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectDescription`<sup>Optional</sup> <a name="projectDescription" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.projectDescription"></a>

```typescript
public readonly projectDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#project_description SagemakerProject#project_description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#tags SagemakerProject#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#tags_all SagemakerProject#tags_all}.

---

### SagemakerProjectServiceCatalogProvisioningDetails <a name="SagemakerProjectServiceCatalogProvisioningDetails" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.Initializer"></a>

```typescript
import { sagemakerProject } from '@cdktf/aws-cdk'

const sagemakerProjectServiceCatalogProvisioningDetails: sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#product_id SagemakerProject#product_id}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.pathId">pathId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#path_id SagemakerProject#path_id}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningArtifactId">provisioningArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningParameter">provisioningParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>[]</code> | provisioning_parameter block. |

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#product_id SagemakerProject#product_id}.

---

##### `pathId`<sup>Optional</sup> <a name="pathId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.pathId"></a>

```typescript
public readonly pathId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#path_id SagemakerProject#path_id}.

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="provisioningArtifactId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningArtifactId"></a>

```typescript
public readonly provisioningArtifactId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}.

---

##### `provisioningParameter`<sup>Optional</sup> <a name="provisioningParameter" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails.property.provisioningParameter"></a>

```typescript
public readonly provisioningParameter: IResolvable | SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>[]

provisioning_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#provisioning_parameter SagemakerProject#provisioning_parameter}

---

### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter.Initializer"></a>

```typescript
import { sagemakerProject } from '@cdktf/aws-cdk'

const sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter: sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#key SagemakerProject#key}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#value SagemakerProject#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#key SagemakerProject#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_project#value SagemakerProject#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerProjectServiceCatalogProvisioningDetailsOutputReference <a name="SagemakerProjectServiceCatalogProvisioningDetailsOutputReference" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer"></a>

```typescript
import { sagemakerProject } from '@cdktf/aws-cdk'

new sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameter">putProvisioningParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetPathId">resetPathId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningArtifactId">resetProvisioningArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningParameter">resetProvisioningParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProvisioningParameter` <a name="putProvisioningParameter" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameter"></a>

```typescript
public putProvisioningParameter(value: IResolvable | SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.putProvisioningParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>[]

---

##### `resetPathId` <a name="resetPathId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetPathId"></a>

```typescript
public resetPathId(): void
```

##### `resetProvisioningArtifactId` <a name="resetProvisioningArtifactId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningArtifactId"></a>

```typescript
public resetProvisioningArtifactId(): void
```

##### `resetProvisioningParameter` <a name="resetProvisioningParameter" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resetProvisioningParameter"></a>

```typescript
public resetProvisioningParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameter">provisioningParameter</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathIdInput">pathIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactIdInput">provisioningArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameterInput">provisioningParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId">pathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId">provisioningArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provisioningParameter`<sup>Required</sup> <a name="provisioningParameter" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameter"></a>

```typescript
public readonly provisioningParameter: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList</a>

---

##### `pathIdInput`<sup>Optional</sup> <a name="pathIdInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathIdInput"></a>

```typescript
public readonly pathIdInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `provisioningArtifactIdInput`<sup>Optional</sup> <a name="provisioningArtifactIdInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactIdInput"></a>

```typescript
public readonly provisioningArtifactIdInput: string;
```

- *Type:* string

---

##### `provisioningParameterInput`<sup>Optional</sup> <a name="provisioningParameterInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameterInput"></a>

```typescript
public readonly provisioningParameterInput: IResolvable | SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>[]

---

##### `pathId`<sup>Required</sup> <a name="pathId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId"></a>

```typescript
public readonly pathId: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="provisioningArtifactId" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId"></a>

```typescript
public readonly provisioningArtifactId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerProjectServiceCatalogProvisioningDetails;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetails">SagemakerProjectServiceCatalogProvisioningDetails</a>

---


### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer"></a>

```typescript
import { sagemakerProject } from '@cdktf/aws-cdk'

new sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.get"></a>

```typescript
public get(index: number): SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>[]

---


### SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference <a name="SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer"></a>

```typescript
import { sagemakerProject } from '@cdktf/aws-cdk'

new sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerProject.SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter">SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter</a>

---



