# `apiGatewayMethod` Submodule <a name="`apiGatewayMethod` Submodule" id="@cdktf/aws-cdk.apiGatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayMethod <a name="ApiGatewayMethod" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method aws_api_gateway_method}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.Initializer"></a>

```typescript
import { apiGatewayMethod } from '@cdktf/aws-cdk'

new apiGatewayMethod.ApiGatewayMethod(scope: Construct, id: string, config: ApiGatewayMethodConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig">ApiGatewayMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig">ApiGatewayMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetApiKeyRequired">resetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetAuthorizationScopes">resetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetOperationName">resetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetRequestModels">resetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetRequestValidatorId">resetRequestValidatorId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApiKeyRequired` <a name="resetApiKeyRequired" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetApiKeyRequired"></a>

```typescript
public resetApiKeyRequired(): void
```

##### `resetAuthorizationScopes` <a name="resetAuthorizationScopes" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetAuthorizationScopes"></a>

```typescript
public resetAuthorizationScopes(): void
```

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetAuthorizerId"></a>

```typescript
public resetAuthorizerId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOperationName` <a name="resetOperationName" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetOperationName"></a>

```typescript
public resetOperationName(): void
```

##### `resetRequestModels` <a name="resetRequestModels" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetRequestModels"></a>

```typescript
public resetRequestModels(): void
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetRequestParameters"></a>

```typescript
public resetRequestParameters(): void
```

##### `resetRequestValidatorId` <a name="resetRequestValidatorId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.resetRequestValidatorId"></a>

```typescript
public resetRequestValidatorId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayMethod resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.isConstruct"></a>

```typescript
import { apiGatewayMethod } from '@cdktf/aws-cdk'

apiGatewayMethod.ApiGatewayMethod.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.isTerraformElement"></a>

```typescript
import { apiGatewayMethod } from '@cdktf/aws-cdk'

apiGatewayMethod.ApiGatewayMethod.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.isTerraformResource"></a>

```typescript
import { apiGatewayMethod } from '@cdktf/aws-cdk'

apiGatewayMethod.ApiGatewayMethod.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.generateConfigForImport"></a>

```typescript
import { apiGatewayMethod } from '@cdktf/aws-cdk'

apiGatewayMethod.ApiGatewayMethod.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiGatewayMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiGatewayMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiGatewayMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequiredInput">apiKeyRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopesInput">authorizationScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorizerIdInput">authorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.operationNameInput">operationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestModelsInput">requestModelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestParametersInput">requestParametersInput</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorIdInput">requestValidatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequired">apiKeyRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopes">authorizationScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.operationName">operationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestModels">requestModels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorId">requestValidatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiKeyRequiredInput`<sup>Optional</sup> <a name="apiKeyRequiredInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequiredInput"></a>

```typescript
public readonly apiKeyRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `authorizationScopesInput`<sup>Optional</sup> <a name="authorizationScopesInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopesInput"></a>

```typescript
public readonly authorizationScopesInput: string[];
```

- *Type:* string[]

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorizerIdInput"></a>

```typescript
public readonly authorizerIdInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `operationNameInput`<sup>Optional</sup> <a name="operationNameInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.operationNameInput"></a>

```typescript
public readonly operationNameInput: string;
```

- *Type:* string

---

##### `requestModelsInput`<sup>Optional</sup> <a name="requestModelsInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestModelsInput"></a>

```typescript
public readonly requestModelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestParametersInput"></a>

```typescript
public readonly requestParametersInput: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `requestValidatorIdInput`<sup>Optional</sup> <a name="requestValidatorIdInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorIdInput"></a>

```typescript
public readonly requestValidatorIdInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `apiKeyRequired`<sup>Required</sup> <a name="apiKeyRequired" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequired"></a>

```typescript
public readonly apiKeyRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `authorizationScopes`<sup>Required</sup> <a name="authorizationScopes" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopes"></a>

```typescript
public readonly authorizationScopes: string[];
```

- *Type:* string[]

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

---

##### `requestModels`<sup>Required</sup> <a name="requestModels" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestModels"></a>

```typescript
public readonly requestModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `requestValidatorId`<sup>Required</sup> <a name="requestValidatorId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorId"></a>

```typescript
public readonly requestValidatorId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethod.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayMethodConfig <a name="ApiGatewayMethodConfig" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.Initializer"></a>

```typescript
import { apiGatewayMethod } from '@cdktf/aws-cdk'

const apiGatewayMethodConfig: apiGatewayMethod.ApiGatewayMethodConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#authorization ApiGatewayMethod#authorization}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#http_method ApiGatewayMethod#http_method}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#resource_id ApiGatewayMethod#resource_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.apiKeyRequired">apiKeyRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizationScopes">authorizationScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizerId">authorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#id ApiGatewayMethod#id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.operationName">operationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#operation_name ApiGatewayMethod#operation_name}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.requestModels">requestModels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#request_models ApiGatewayMethod#request_models}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.requestValidatorId">requestValidatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#authorization ApiGatewayMethod#authorization}.

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#http_method ApiGatewayMethod#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#resource_id ApiGatewayMethod#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}.

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.apiKeyRequired"></a>

```typescript
public readonly apiKeyRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}.

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizationScopes"></a>

```typescript
public readonly authorizationScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#id ApiGatewayMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#operation_name ApiGatewayMethod#operation_name}.

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.requestModels"></a>

```typescript
public readonly requestModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#request_models ApiGatewayMethod#request_models}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}.

---

##### `requestValidatorId`<sup>Optional</sup> <a name="requestValidatorId" id="@cdktf/aws-cdk.apiGatewayMethod.ApiGatewayMethodConfig.property.requestValidatorId"></a>

```typescript
public readonly requestValidatorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}.

---



