# `aws_sagemaker_endpoint`

Refer to the Terraform Registory for docs: [`aws_sagemaker_endpoint`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint).

# `sagemakerEndpoint` Submodule <a name="`sagemakerEndpoint` Submodule" id="@cdktf/aws-cdk.sagemakerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerEndpoint <a name="SagemakerEndpoint" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint aws_sagemaker_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

new sagemakerEndpoint.SagemakerEndpoint(scope: Construct, id: string, config: SagemakerEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig">SagemakerEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig">SagemakerEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.putDeploymentConfig">putDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetDeploymentConfig">resetDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDeploymentConfig` <a name="putDeploymentConfig" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.putDeploymentConfig"></a>

```typescript
public putDeploymentConfig(value: SagemakerEndpointDeploymentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.putDeploymentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a>

---

##### `resetDeploymentConfig` <a name="resetDeploymentConfig" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetDeploymentConfig"></a>

```typescript
public resetDeploymentConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.isConstruct"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

sagemakerEndpoint.SagemakerEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.isTerraformElement"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

sagemakerEndpoint.SagemakerEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.isTerraformResource"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

sagemakerEndpoint.SagemakerEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.deploymentConfig">deploymentConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference">SagemakerEndpointDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.deploymentConfigInput">deploymentConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.endpointConfigNameInput">endpointConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.endpointConfigName">endpointConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deploymentConfig`<sup>Required</sup> <a name="deploymentConfig" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.deploymentConfig"></a>

```typescript
public readonly deploymentConfig: SagemakerEndpointDeploymentConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference">SagemakerEndpointDeploymentConfigOutputReference</a>

---

##### `deploymentConfigInput`<sup>Optional</sup> <a name="deploymentConfigInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.deploymentConfigInput"></a>

```typescript
public readonly deploymentConfigInput: SagemakerEndpointDeploymentConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a>

---

##### `endpointConfigNameInput`<sup>Optional</sup> <a name="endpointConfigNameInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.endpointConfigNameInput"></a>

```typescript
public readonly endpointConfigNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `endpointConfigName`<sup>Required</sup> <a name="endpointConfigName" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.endpointConfigName"></a>

```typescript
public readonly endpointConfigName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerEndpointConfig <a name="SagemakerEndpointConfig" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

const sagemakerEndpointConfig: sagemakerEndpoint.SagemakerEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.endpointConfigName">endpointConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#endpoint_config_name SagemakerEndpoint#endpoint_config_name}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.deploymentConfig">deploymentConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a></code> | deployment_config block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#id SagemakerEndpoint#id}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#name SagemakerEndpoint#name}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#tags SagemakerEndpoint#tags}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#tags_all SagemakerEndpoint#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointConfigName`<sup>Required</sup> <a name="endpointConfigName" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.endpointConfigName"></a>

```typescript
public readonly endpointConfigName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#endpoint_config_name SagemakerEndpoint#endpoint_config_name}.

---

##### `deploymentConfig`<sup>Optional</sup> <a name="deploymentConfig" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.deploymentConfig"></a>

```typescript
public readonly deploymentConfig: SagemakerEndpointDeploymentConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a>

deployment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#deployment_config SagemakerEndpoint#deployment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#id SagemakerEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#name SagemakerEndpoint#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#tags SagemakerEndpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#tags_all SagemakerEndpoint#tags_all}.

---

### SagemakerEndpointDeploymentConfig <a name="SagemakerEndpointDeploymentConfig" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

const sagemakerEndpointDeploymentConfig: sagemakerEndpoint.SagemakerEndpointDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.property.blueGreenUpdatePolicy">blueGreenUpdatePolicy</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a></code> | blue_green_update_policy block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a></code> | auto_rollback_configuration block. |

---

##### `blueGreenUpdatePolicy`<sup>Required</sup> <a name="blueGreenUpdatePolicy" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.property.blueGreenUpdatePolicy"></a>

```typescript
public readonly blueGreenUpdatePolicy: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a>

blue_green_update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#blue_green_update_policy SagemakerEndpoint#blue_green_update_policy}

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="autoRollbackConfiguration" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.property.autoRollbackConfiguration"></a>

```typescript
public readonly autoRollbackConfiguration: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a>

auto_rollback_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#auto_rollback_configuration SagemakerEndpoint#auto_rollback_configuration}

---

### SagemakerEndpointDeploymentConfigAutoRollbackConfiguration <a name="SagemakerEndpointDeploymentConfigAutoRollbackConfiguration" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

const sagemakerEndpointDeploymentConfigAutoRollbackConfiguration: sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration.property.alarms">alarms</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>[]</code> | alarms block. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration.property.alarms"></a>

```typescript
public readonly alarms: IResolvable | SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

alarms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#alarms SagemakerEndpoint#alarms}

---

### SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms <a name="SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

const sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms: sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName">alarmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#alarm_name SagemakerEndpoint#alarm_name}. |

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#alarm_name SagemakerEndpoint#alarm_name}.

---

### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

const sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy: sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.trafficRoutingConfiguration">trafficRoutingConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a></code> | traffic_routing_configuration block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.maximumExecutionTimeoutInSeconds">maximumExecutionTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#maximum_execution_timeout_in_seconds SagemakerEndpoint#maximum_execution_timeout_in_seconds}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.terminationWaitInSeconds">terminationWaitInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#termination_wait_in_seconds SagemakerEndpoint#termination_wait_in_seconds}. |

---

##### `trafficRoutingConfiguration`<sup>Required</sup> <a name="trafficRoutingConfiguration" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.trafficRoutingConfiguration"></a>

```typescript
public readonly trafficRoutingConfiguration: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a>

traffic_routing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#traffic_routing_configuration SagemakerEndpoint#traffic_routing_configuration}

---

##### `maximumExecutionTimeoutInSeconds`<sup>Optional</sup> <a name="maximumExecutionTimeoutInSeconds" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.maximumExecutionTimeoutInSeconds"></a>

```typescript
public readonly maximumExecutionTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#maximum_execution_timeout_in_seconds SagemakerEndpoint#maximum_execution_timeout_in_seconds}.

---

##### `terminationWaitInSeconds`<sup>Optional</sup> <a name="terminationWaitInSeconds" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.terminationWaitInSeconds"></a>

```typescript
public readonly terminationWaitInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#termination_wait_in_seconds SagemakerEndpoint#termination_wait_in_seconds}.

---

### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

const sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration: sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#wait_interval_in_seconds SagemakerEndpoint#wait_interval_in_seconds}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.canarySize">canarySize</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a></code> | canary_size block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.linearStepSize">linearStepSize</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a></code> | linear_step_size block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}.

---

##### `waitIntervalInSeconds`<sup>Required</sup> <a name="waitIntervalInSeconds" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.waitIntervalInSeconds"></a>

```typescript
public readonly waitIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#wait_interval_in_seconds SagemakerEndpoint#wait_interval_in_seconds}.

---

##### `canarySize`<sup>Optional</sup> <a name="canarySize" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.canarySize"></a>

```typescript
public readonly canarySize: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a>

canary_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#canary_size SagemakerEndpoint#canary_size}

---

##### `linearStepSize`<sup>Optional</sup> <a name="linearStepSize" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.linearStepSize"></a>

```typescript
public readonly linearStepSize: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a>

linear_step_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#linear_step_size SagemakerEndpoint#linear_step_size}

---

### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

const sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize: sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}.

---

### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

const sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize: sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList <a name="SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

new sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get"></a>

```typescript
public get(index: number): SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

---


### SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference <a name="SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

new sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput">alarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName">alarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput"></a>

```typescript
public readonly alarmNameInput: string;
```

- *Type:* string

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>

---


### SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference <a name="SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

new sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms">putAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlarms` <a name="putAlarms" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms"></a>

```typescript
public putAlarms(value: IResolvable | SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

---

##### `resetAlarms` <a name="resetAlarms" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms"></a>

```typescript
public readonly alarms: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList</a>

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: IResolvable | SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a>

---


### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

new sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.putTrafficRoutingConfiguration">putTrafficRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds">resetMaximumExecutionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resetTerminationWaitInSeconds">resetTerminationWaitInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrafficRoutingConfiguration` <a name="putTrafficRoutingConfiguration" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.putTrafficRoutingConfiguration"></a>

```typescript
public putTrafficRoutingConfiguration(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.putTrafficRoutingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a>

---

##### `resetMaximumExecutionTimeoutInSeconds` <a name="resetMaximumExecutionTimeoutInSeconds" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds"></a>

```typescript
public resetMaximumExecutionTimeoutInSeconds(): void
```

##### `resetTerminationWaitInSeconds` <a name="resetTerminationWaitInSeconds" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resetTerminationWaitInSeconds"></a>

```typescript
public resetTerminationWaitInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfiguration">trafficRoutingConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput">maximumExecutionTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSecondsInput">terminationWaitInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfigurationInput">trafficRoutingConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">maximumExecutionTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSeconds">terminationWaitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trafficRoutingConfiguration`<sup>Required</sup> <a name="trafficRoutingConfiguration" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfiguration"></a>

```typescript
public readonly trafficRoutingConfiguration: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference</a>

---

##### `maximumExecutionTimeoutInSecondsInput`<sup>Optional</sup> <a name="maximumExecutionTimeoutInSecondsInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput"></a>

```typescript
public readonly maximumExecutionTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `terminationWaitInSecondsInput`<sup>Optional</sup> <a name="terminationWaitInSecondsInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSecondsInput"></a>

```typescript
public readonly terminationWaitInSecondsInput: number;
```

- *Type:* number

---

##### `trafficRoutingConfigurationInput`<sup>Optional</sup> <a name="trafficRoutingConfigurationInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfigurationInput"></a>

```typescript
public readonly trafficRoutingConfigurationInput: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a>

---

##### `maximumExecutionTimeoutInSeconds`<sup>Required</sup> <a name="maximumExecutionTimeoutInSeconds" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```typescript
public readonly maximumExecutionTimeoutInSeconds: number;
```

- *Type:* number

---

##### `terminationWaitInSeconds`<sup>Required</sup> <a name="terminationWaitInSeconds" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSeconds"></a>

```typescript
public readonly terminationWaitInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a>

---


### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

new sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a>

---


### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

new sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a>

---


### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

new sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putCanarySize">putCanarySize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putLinearStepSize">putLinearStepSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetCanarySize">resetCanarySize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetLinearStepSize">resetLinearStepSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCanarySize` <a name="putCanarySize" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putCanarySize"></a>

```typescript
public putCanarySize(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putCanarySize.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a>

---

##### `putLinearStepSize` <a name="putLinearStepSize" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putLinearStepSize"></a>

```typescript
public putLinearStepSize(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putLinearStepSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a>

---

##### `resetCanarySize` <a name="resetCanarySize" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetCanarySize"></a>

```typescript
public resetCanarySize(): void
```

##### `resetLinearStepSize` <a name="resetLinearStepSize" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetLinearStepSize"></a>

```typescript
public resetLinearStepSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySize">canarySize</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSize">linearStepSize</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySizeInput">canarySizeInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSizeInput">linearStepSizeInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSecondsInput">waitIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canarySize`<sup>Required</sup> <a name="canarySize" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySize"></a>

```typescript
public readonly canarySize: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference</a>

---

##### `linearStepSize`<sup>Required</sup> <a name="linearStepSize" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSize"></a>

```typescript
public readonly linearStepSize: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference</a>

---

##### `canarySizeInput`<sup>Optional</sup> <a name="canarySizeInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySizeInput"></a>

```typescript
public readonly canarySizeInput: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a>

---

##### `linearStepSizeInput`<sup>Optional</sup> <a name="linearStepSizeInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSizeInput"></a>

```typescript
public readonly linearStepSizeInput: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `waitIntervalInSecondsInput`<sup>Optional</sup> <a name="waitIntervalInSecondsInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSecondsInput"></a>

```typescript
public readonly waitIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `waitIntervalInSeconds`<sup>Required</sup> <a name="waitIntervalInSeconds" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSeconds"></a>

```typescript
public readonly waitIntervalInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a>

---


### SagemakerEndpointDeploymentConfigOutputReference <a name="SagemakerEndpointDeploymentConfigOutputReference" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerEndpoint } from '@cdktf/aws-cdk'

new sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putAutoRollbackConfiguration">putAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putBlueGreenUpdatePolicy">putBlueGreenUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resetAutoRollbackConfiguration">resetAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoRollbackConfiguration` <a name="putAutoRollbackConfiguration" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putAutoRollbackConfiguration"></a>

```typescript
public putAutoRollbackConfiguration(value: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a>

---

##### `putBlueGreenUpdatePolicy` <a name="putBlueGreenUpdatePolicy" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putBlueGreenUpdatePolicy"></a>

```typescript
public putBlueGreenUpdatePolicy(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putBlueGreenUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a>

---

##### `resetAutoRollbackConfiguration` <a name="resetAutoRollbackConfiguration" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resetAutoRollbackConfiguration"></a>

```typescript
public resetAutoRollbackConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicy">blueGreenUpdatePolicy</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfigurationInput">autoRollbackConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicyInput">blueGreenUpdatePolicyInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRollbackConfiguration`<sup>Required</sup> <a name="autoRollbackConfiguration" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```typescript
public readonly autoRollbackConfiguration: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference</a>

---

##### `blueGreenUpdatePolicy`<sup>Required</sup> <a name="blueGreenUpdatePolicy" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicy"></a>

```typescript
public readonly blueGreenUpdatePolicy: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference</a>

---

##### `autoRollbackConfigurationInput`<sup>Optional</sup> <a name="autoRollbackConfigurationInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfigurationInput"></a>

```typescript
public readonly autoRollbackConfigurationInput: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a>

---

##### `blueGreenUpdatePolicyInput`<sup>Optional</sup> <a name="blueGreenUpdatePolicyInput" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicyInput"></a>

```typescript
public readonly blueGreenUpdatePolicyInput: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerEndpointDeploymentConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a>

---



