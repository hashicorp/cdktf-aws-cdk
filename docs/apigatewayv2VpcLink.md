# `apigatewayv2VpcLink` Submodule <a name="`apigatewayv2VpcLink` Submodule" id="@cdktf/aws-cdk.apigatewayv2VpcLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2VpcLink <a name="Apigatewayv2VpcLink" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link aws_apigatewayv2_vpc_link}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.Initializer"></a>

```typescript
import { apigatewayv2VpcLink } from '@cdktf/aws-cdk'

new apigatewayv2VpcLink.Apigatewayv2VpcLink(scope: Construct, id: string, config: Apigatewayv2VpcLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig">Apigatewayv2VpcLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig">Apigatewayv2VpcLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Apigatewayv2VpcLink resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.isConstruct"></a>

```typescript
import { apigatewayv2VpcLink } from '@cdktf/aws-cdk'

apigatewayv2VpcLink.Apigatewayv2VpcLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.isTerraformElement"></a>

```typescript
import { apigatewayv2VpcLink } from '@cdktf/aws-cdk'

apigatewayv2VpcLink.Apigatewayv2VpcLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.isTerraformResource"></a>

```typescript
import { apigatewayv2VpcLink } from '@cdktf/aws-cdk'

apigatewayv2VpcLink.Apigatewayv2VpcLink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.generateConfigForImport"></a>

```typescript
import { apigatewayv2VpcLink } from '@cdktf/aws-cdk'

apigatewayv2VpcLink.Apigatewayv2VpcLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Apigatewayv2VpcLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2VpcLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2VpcLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Apigatewayv2VpcLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2VpcLinkConfig <a name="Apigatewayv2VpcLinkConfig" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.Initializer"></a>

```typescript
import { apigatewayv2VpcLink } from '@cdktf/aws-cdk'

const apigatewayv2VpcLinkConfig: apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#name Apigatewayv2VpcLink#name}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#security_group_ids Apigatewayv2VpcLink#security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#subnet_ids Apigatewayv2VpcLink#subnet_ids}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#id Apigatewayv2VpcLink#id}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#tags Apigatewayv2VpcLink#tags}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#tags_all Apigatewayv2VpcLink#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#name Apigatewayv2VpcLink#name}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#security_group_ids Apigatewayv2VpcLink#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#subnet_ids Apigatewayv2VpcLink#subnet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#id Apigatewayv2VpcLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#tags Apigatewayv2VpcLink#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.apigatewayv2VpcLink.Apigatewayv2VpcLinkConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_vpc_link#tags_all Apigatewayv2VpcLink#tags_all}.

---



