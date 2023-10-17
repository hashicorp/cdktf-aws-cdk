# `aws_api_gateway_integration_response`

Refer to the Terraform Registory for docs: [`aws_api_gateway_integration_response`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response).

# `apiGatewayIntegrationResponse` Submodule <a name="`apiGatewayIntegrationResponse` Submodule" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayIntegrationResponse <a name="ApiGatewayIntegrationResponse" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response aws_api_gateway_integration_response}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer"></a>

```typescript
import { apiGatewayIntegrationResponse } from '@cdktf/aws-cdk'

new apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse(scope: Construct, id: string, config: ApiGatewayIntegrationResponseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig">ApiGatewayIntegrationResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig">ApiGatewayIntegrationResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetContentHandling">resetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseTemplates">resetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetSelectionPattern">resetSelectionPattern</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetContentHandling` <a name="resetContentHandling" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetContentHandling"></a>

```typescript
public resetContentHandling(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseParameters"></a>

```typescript
public resetResponseParameters(): void
```

##### `resetResponseTemplates` <a name="resetResponseTemplates" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseTemplates"></a>

```typescript
public resetResponseTemplates(): void
```

##### `resetSelectionPattern` <a name="resetSelectionPattern" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetSelectionPattern"></a>

```typescript
public resetSelectionPattern(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayIntegrationResponse resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct"></a>

```typescript
import { apiGatewayIntegrationResponse } from '@cdktf/aws-cdk'

apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement"></a>

```typescript
import { apiGatewayIntegrationResponse } from '@cdktf/aws-cdk'

apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource"></a>

```typescript
import { apiGatewayIntegrationResponse } from '@cdktf/aws-cdk'

apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.generateConfigForImport"></a>

```typescript
import { apiGatewayIntegrationResponse } from '@cdktf/aws-cdk'

apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiGatewayIntegrationResponse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiGatewayIntegrationResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiGatewayIntegrationResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayIntegrationResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandlingInput">contentHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParametersInput">responseParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplatesInput">responseTemplatesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPatternInput">selectionPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandling">contentHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParameters">responseParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplates">responseTemplates</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPattern">selectionPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentHandlingInput`<sup>Optional</sup> <a name="contentHandlingInput" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandlingInput"></a>

```typescript
public readonly contentHandlingInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParametersInput"></a>

```typescript
public readonly responseParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseTemplatesInput`<sup>Optional</sup> <a name="responseTemplatesInput" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplatesInput"></a>

```typescript
public readonly responseTemplatesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `selectionPatternInput`<sup>Optional</sup> <a name="selectionPatternInput" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPatternInput"></a>

```typescript
public readonly selectionPatternInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `contentHandling`<sup>Required</sup> <a name="contentHandling" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseTemplates`<sup>Required</sup> <a name="responseTemplates" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `selectionPattern`<sup>Required</sup> <a name="selectionPattern" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPattern"></a>

```typescript
public readonly selectionPattern: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayIntegrationResponseConfig <a name="ApiGatewayIntegrationResponseConfig" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.Initializer"></a>

```typescript
import { apiGatewayIntegrationResponse } from '@cdktf/aws-cdk'

const apiGatewayIntegrationResponseConfig: apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.contentHandling">contentHandling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseParameters">responseParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseTemplates">responseTemplates</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.selectionPattern">selectionPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}.

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}.

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseParameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}.

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}.

---

##### `selectionPattern`<sup>Optional</sup> <a name="selectionPattern" id="@cdktf/aws-cdk.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.selectionPattern"></a>

```typescript
public readonly selectionPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}.

---



