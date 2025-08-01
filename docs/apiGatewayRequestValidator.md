# `apiGatewayRequestValidator` Submodule <a name="`apiGatewayRequestValidator` Submodule" id="@cdktf/aws-cdk.apiGatewayRequestValidator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayRequestValidator <a name="ApiGatewayRequestValidator" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator aws_api_gateway_request_validator}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer"></a>

```typescript
import { apiGatewayRequestValidator } from '@cdktf/aws-cdk'

new apiGatewayRequestValidator.ApiGatewayRequestValidator(scope: Construct, id: string, config: ApiGatewayRequestValidatorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig">ApiGatewayRequestValidatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig">ApiGatewayRequestValidatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetValidateRequestBody">resetValidateRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetValidateRequestParameters">resetValidateRequestParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetValidateRequestBody` <a name="resetValidateRequestBody" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetValidateRequestBody"></a>

```typescript
public resetValidateRequestBody(): void
```

##### `resetValidateRequestParameters` <a name="resetValidateRequestParameters" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetValidateRequestParameters"></a>

```typescript
public resetValidateRequestParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayRequestValidator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.isConstruct"></a>

```typescript
import { apiGatewayRequestValidator } from '@cdktf/aws-cdk'

apiGatewayRequestValidator.ApiGatewayRequestValidator.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformElement"></a>

```typescript
import { apiGatewayRequestValidator } from '@cdktf/aws-cdk'

apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformResource"></a>

```typescript
import { apiGatewayRequestValidator } from '@cdktf/aws-cdk'

apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.generateConfigForImport"></a>

```typescript
import { apiGatewayRequestValidator } from '@cdktf/aws-cdk'

apiGatewayRequestValidator.ApiGatewayRequestValidator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiGatewayRequestValidator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiGatewayRequestValidator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiGatewayRequestValidator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayRequestValidator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestBodyInput">validateRequestBodyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestParametersInput">validateRequestParametersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestBody">validateRequestBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestParameters">validateRequestParameters</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `validateRequestBodyInput`<sup>Optional</sup> <a name="validateRequestBodyInput" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestBodyInput"></a>

```typescript
public readonly validateRequestBodyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validateRequestParametersInput`<sup>Optional</sup> <a name="validateRequestParametersInput" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestParametersInput"></a>

```typescript
public readonly validateRequestParametersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `validateRequestBody`<sup>Required</sup> <a name="validateRequestBody" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestBody"></a>

```typescript
public readonly validateRequestBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validateRequestParameters`<sup>Required</sup> <a name="validateRequestParameters" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestParameters"></a>

```typescript
public readonly validateRequestParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayRequestValidatorConfig <a name="ApiGatewayRequestValidatorConfig" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.Initializer"></a>

```typescript
import { apiGatewayRequestValidator } from '@cdktf/aws-cdk'

const apiGatewayRequestValidatorConfig: apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator#name ApiGatewayRequestValidator#name}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator#rest_api_id ApiGatewayRequestValidator#rest_api_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator#id ApiGatewayRequestValidator#id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.validateRequestBody">validateRequestBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator#validate_request_body ApiGatewayRequestValidator#validate_request_body}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.validateRequestParameters">validateRequestParameters</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator#name ApiGatewayRequestValidator#name}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator#rest_api_id ApiGatewayRequestValidator#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator#id ApiGatewayRequestValidator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `validateRequestBody`<sup>Optional</sup> <a name="validateRequestBody" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.validateRequestBody"></a>

```typescript
public readonly validateRequestBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator#validate_request_body ApiGatewayRequestValidator#validate_request_body}.

---

##### `validateRequestParameters`<sup>Optional</sup> <a name="validateRequestParameters" id="@cdktf/aws-cdk.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.validateRequestParameters"></a>

```typescript
public readonly validateRequestParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_request_validator#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}.

---



