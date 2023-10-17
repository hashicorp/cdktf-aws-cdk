# `aws_api_gateway_rest_api`

Refer to the Terraform Registory for docs: [`aws_api_gateway_rest_api`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api).

# `apiGatewayRestApi` Submodule <a name="`apiGatewayRestApi` Submodule" id="@cdktf/aws-cdk.apiGatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayRestApi <a name="ApiGatewayRestApi" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api aws_api_gateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.Initializer"></a>

```typescript
import { apiGatewayRestApi } from '@cdktf/aws-cdk'

new apiGatewayRestApi.ApiGatewayRestApi(scope: Construct, id: string, config: ApiGatewayRestApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig">ApiGatewayRestApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig">ApiGatewayRestApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetApiKeySource">resetApiKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetBinaryMediaTypes">resetBinaryMediaTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetDisableExecuteApiEndpoint">resetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointConfiguration">resetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetMinimumCompressionSize">resetMinimumCompressionSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration"></a>

```typescript
public putEndpointConfiguration(value: ApiGatewayRestApiEndpointConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---

##### `resetApiKeySource` <a name="resetApiKeySource" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetApiKeySource"></a>

```typescript
public resetApiKeySource(): void
```

##### `resetBinaryMediaTypes` <a name="resetBinaryMediaTypes" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetBinaryMediaTypes"></a>

```typescript
public resetBinaryMediaTypes(): void
```

##### `resetBody` <a name="resetBody" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableExecuteApiEndpoint` <a name="resetDisableExecuteApiEndpoint" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetDisableExecuteApiEndpoint"></a>

```typescript
public resetDisableExecuteApiEndpoint(): void
```

##### `resetEndpointConfiguration` <a name="resetEndpointConfiguration" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointConfiguration"></a>

```typescript
public resetEndpointConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMinimumCompressionSize` <a name="resetMinimumCompressionSize" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetMinimumCompressionSize"></a>

```typescript
public resetMinimumCompressionSize(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayRestApi resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.isConstruct"></a>

```typescript
import { apiGatewayRestApi } from '@cdktf/aws-cdk'

apiGatewayRestApi.ApiGatewayRestApi.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement"></a>

```typescript
import { apiGatewayRestApi } from '@cdktf/aws-cdk'

apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource"></a>

```typescript
import { apiGatewayRestApi } from '@cdktf/aws-cdk'

apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport"></a>

```typescript
import { apiGatewayRestApi } from '@cdktf/aws-cdk'

apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiGatewayRestApi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiGatewayRestApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiGatewayRestApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayRestApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference">ApiGatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.executionArn">executionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.rootResourceId">rootResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySourceInput">apiKeySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypesInput">binaryMediaTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpointInput">disableExecuteApiEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSizeInput">minimumCompressionSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySource">apiKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypes">binaryMediaTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSize">minimumCompressionSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: ApiGatewayRestApiEndpointConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference">ApiGatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `executionArn`<sup>Required</sup> <a name="executionArn" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.executionArn"></a>

```typescript
public readonly executionArn: string;
```

- *Type:* string

---

##### `rootResourceId`<sup>Required</sup> <a name="rootResourceId" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.rootResourceId"></a>

```typescript
public readonly rootResourceId: string;
```

- *Type:* string

---

##### `apiKeySourceInput`<sup>Optional</sup> <a name="apiKeySourceInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySourceInput"></a>

```typescript
public readonly apiKeySourceInput: string;
```

- *Type:* string

---

##### `binaryMediaTypesInput`<sup>Optional</sup> <a name="binaryMediaTypesInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypesInput"></a>

```typescript
public readonly binaryMediaTypesInput: string[];
```

- *Type:* string[]

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableExecuteApiEndpointInput`<sup>Optional</sup> <a name="disableExecuteApiEndpointInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpointInput"></a>

```typescript
public readonly disableExecuteApiEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfigurationInput"></a>

```typescript
public readonly endpointConfigurationInput: ApiGatewayRestApiEndpointConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `minimumCompressionSizeInput`<sup>Optional</sup> <a name="minimumCompressionSizeInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSizeInput"></a>

```typescript
public readonly minimumCompressionSizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `apiKeySource`<sup>Required</sup> <a name="apiKeySource" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySource"></a>

```typescript
public readonly apiKeySource: string;
```

- *Type:* string

---

##### `binaryMediaTypes`<sup>Required</sup> <a name="binaryMediaTypes" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypes"></a>

```typescript
public readonly binaryMediaTypes: string[];
```

- *Type:* string[]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="disableExecuteApiEndpoint" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpoint"></a>

```typescript
public readonly disableExecuteApiEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `minimumCompressionSize`<sup>Required</sup> <a name="minimumCompressionSize" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSize"></a>

```typescript
public readonly minimumCompressionSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayRestApiConfig <a name="ApiGatewayRestApiConfig" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.Initializer"></a>

```typescript
import { apiGatewayRestApi } from '@cdktf/aws-cdk'

const apiGatewayRestApiConfig: apiGatewayRestApi.ApiGatewayRestApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#name ApiGatewayRestApi#name}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.apiKeySource">apiKeySource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.binaryMediaTypes">binaryMediaTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.body">body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#body ApiGatewayRestApi#body}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#description ApiGatewayRestApi#description}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#id ApiGatewayRestApi#id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.minimumCompressionSize">minimumCompressionSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#policy ApiGatewayRestApi#policy}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#tags ApiGatewayRestApi#tags}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#name ApiGatewayRestApi#name}.

---

##### `apiKeySource`<sup>Optional</sup> <a name="apiKeySource" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.apiKeySource"></a>

```typescript
public readonly apiKeySource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}.

---

##### `binaryMediaTypes`<sup>Optional</sup> <a name="binaryMediaTypes" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.binaryMediaTypes"></a>

```typescript
public readonly binaryMediaTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#body ApiGatewayRestApi#body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#description ApiGatewayRestApi#description}.

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="disableExecuteApiEndpoint" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.disableExecuteApiEndpoint"></a>

```typescript
public readonly disableExecuteApiEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: ApiGatewayRestApiEndpointConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#id ApiGatewayRestApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumCompressionSize`<sup>Optional</sup> <a name="minimumCompressionSize" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.minimumCompressionSize"></a>

```typescript
public readonly minimumCompressionSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#policy ApiGatewayRestApi#policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#tags ApiGatewayRestApi#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}.

---

### ApiGatewayRestApiEndpointConfiguration <a name="ApiGatewayRestApiEndpointConfiguration" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.Initializer"></a>

```typescript
import { apiGatewayRestApi } from '@cdktf/aws-cdk'

const apiGatewayRestApiEndpointConfiguration: apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.types">types</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#types ApiGatewayRestApi#types}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.vpcEndpointIds">vpcEndpointIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}. |

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#types ApiGatewayRestApi#types}.

---

##### `vpcEndpointIds`<sup>Optional</sup> <a name="vpcEndpointIds" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

```typescript
public readonly vpcEndpointIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayRestApiEndpointConfigurationOutputReference <a name="ApiGatewayRestApiEndpointConfigurationOutputReference" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```typescript
import { apiGatewayRestApi } from '@cdktf/aws-cdk'

new apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds">resetVpcEndpointIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcEndpointIds` <a name="resetVpcEndpointIds" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds"></a>

```typescript
public resetVpcEndpointIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput">vpcEndpointIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">vpcEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `vpcEndpointIdsInput`<sup>Optional</sup> <a name="vpcEndpointIdsInput" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput"></a>

```typescript
public readonly vpcEndpointIdsInput: string[];
```

- *Type:* string[]

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="vpcEndpointIds" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```typescript
public readonly vpcEndpointIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayRestApiEndpointConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---



