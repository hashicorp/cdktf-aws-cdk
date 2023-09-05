# `data_aws_api_gateway_rest_api`

Refer to the Terraform Registory for docs: [`data_aws_api_gateway_rest_api`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/api_gateway_rest_api).

# `dataAwsApiGatewayRestApi` Submodule <a name="`dataAwsApiGatewayRestApi` Submodule" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApiGatewayRestApi <a name="DataAwsApiGatewayRestApi" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/api_gateway_rest_api aws_api_gateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer"></a>

```typescript
import { dataAwsApiGatewayRestApi } from '@cdktf/aws-cdk'

new dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi(scope: Construct, id: string, config: DataAwsApiGatewayRestApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig">DataAwsApiGatewayRestApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig">DataAwsApiGatewayRestApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isConstruct"></a>

```typescript
import { dataAwsApiGatewayRestApi } from '@cdktf/aws-cdk'

dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformElement"></a>

```typescript
import { dataAwsApiGatewayRestApi } from '@cdktf/aws-cdk'

dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformDataSource"></a>

```typescript
import { dataAwsApiGatewayRestApi } from '@cdktf/aws-cdk'

dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.apiKeySource">apiKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.binaryMediaTypes">binaryMediaTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList">DataAwsApiGatewayRestApiEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.executionArn">executionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.minimumCompressionSize">minimumCompressionSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.rootResourceId">rootResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `apiKeySource`<sup>Required</sup> <a name="apiKeySource" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.apiKeySource"></a>

```typescript
public readonly apiKeySource: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `binaryMediaTypes`<sup>Required</sup> <a name="binaryMediaTypes" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.binaryMediaTypes"></a>

```typescript
public readonly binaryMediaTypes: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: DataAwsApiGatewayRestApiEndpointConfigurationList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList">DataAwsApiGatewayRestApiEndpointConfigurationList</a>

---

##### `executionArn`<sup>Required</sup> <a name="executionArn" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.executionArn"></a>

```typescript
public readonly executionArn: string;
```

- *Type:* string

---

##### `minimumCompressionSize`<sup>Required</sup> <a name="minimumCompressionSize" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.minimumCompressionSize"></a>

```typescript
public readonly minimumCompressionSize: number;
```

- *Type:* number

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `rootResourceId`<sup>Required</sup> <a name="rootResourceId" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.rootResourceId"></a>

```typescript
public readonly rootResourceId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApiGatewayRestApiConfig <a name="DataAwsApiGatewayRestApiConfig" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.Initializer"></a>

```typescript
import { dataAwsApiGatewayRestApi } from '@cdktf/aws-cdk'

const dataAwsApiGatewayRestApiConfig: dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/api_gateway_rest_api#name DataAwsApiGatewayRestApi#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/api_gateway_rest_api#id DataAwsApiGatewayRestApi#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/api_gateway_rest_api#tags DataAwsApiGatewayRestApi#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/api_gateway_rest_api#name DataAwsApiGatewayRestApi#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/api_gateway_rest_api#id DataAwsApiGatewayRestApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/api_gateway_rest_api#tags DataAwsApiGatewayRestApi#tags}.

---

### DataAwsApiGatewayRestApiEndpointConfiguration <a name="DataAwsApiGatewayRestApiEndpointConfiguration" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration.Initializer"></a>

```typescript
import { dataAwsApiGatewayRestApi } from '@cdktf/aws-cdk'

const dataAwsApiGatewayRestApiEndpointConfiguration: dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsApiGatewayRestApiEndpointConfigurationList <a name="DataAwsApiGatewayRestApiEndpointConfigurationList" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer"></a>

```typescript
import { dataAwsApiGatewayRestApi } from '@cdktf/aws-cdk'

new dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsApiGatewayRestApiEndpointConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsApiGatewayRestApiEndpointConfigurationOutputReference <a name="DataAwsApiGatewayRestApiEndpointConfigurationOutputReference" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsApiGatewayRestApi } from '@cdktf/aws-cdk'

new dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">vpcEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration">DataAwsApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="vpcEndpointIds" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```typescript
public readonly vpcEndpointIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsApiGatewayRestApiEndpointConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration">DataAwsApiGatewayRestApiEndpointConfiguration</a>

---



