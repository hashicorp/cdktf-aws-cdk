# `aws_api_gateway_documentation_version`

Refer to the Terraform Registory for docs: [`aws_api_gateway_documentation_version`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_version).

# `apiGatewayDocumentationVersion` Submodule <a name="`apiGatewayDocumentationVersion` Submodule" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDocumentationVersion <a name="ApiGatewayDocumentationVersion" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_version aws_api_gateway_documentation_version}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.Initializer"></a>

```typescript
import { apiGatewayDocumentationVersion } from '@cdktf/aws-cdk'

new apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion(scope: Construct, id: string, config: ApiGatewayDocumentationVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig">ApiGatewayDocumentationVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig">ApiGatewayDocumentationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isConstruct"></a>

```typescript
import { apiGatewayDocumentationVersion } from '@cdktf/aws-cdk'

apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isTerraformElement"></a>

```typescript
import { apiGatewayDocumentationVersion } from '@cdktf/aws-cdk'

apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isTerraformResource"></a>

```typescript
import { apiGatewayDocumentationVersion } from '@cdktf/aws-cdk'

apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDocumentationVersionConfig <a name="ApiGatewayDocumentationVersionConfig" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.Initializer"></a>

```typescript
import { apiGatewayDocumentationVersion } from '@cdktf/aws-cdk'

const apiGatewayDocumentationVersionConfig: apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_version#rest_api_id ApiGatewayDocumentationVersion#rest_api_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_version#version ApiGatewayDocumentationVersion#version}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_version#description ApiGatewayDocumentationVersion#description}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_version#id ApiGatewayDocumentationVersion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_version#rest_api_id ApiGatewayDocumentationVersion#rest_api_id}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_version#version ApiGatewayDocumentationVersion#version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_version#description ApiGatewayDocumentationVersion#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayDocumentationVersion.ApiGatewayDocumentationVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_documentation_version#id ApiGatewayDocumentationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



