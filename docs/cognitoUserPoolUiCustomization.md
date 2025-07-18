# `cognitoUserPoolUiCustomization` Submodule <a name="`cognitoUserPoolUiCustomization` Submodule" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolUiCustomization <a name="CognitoUserPoolUiCustomization" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization aws_cognito_user_pool_ui_customization}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer"></a>

```typescript
import { cognitoUserPoolUiCustomization } from '@cdktf/aws-cdk'

new cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization(scope: Construct, id: string, config: CognitoUserPoolUiCustomizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig">CognitoUserPoolUiCustomizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig">CognitoUserPoolUiCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetCss">resetCss</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetImageFile">resetImageFile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClientId` <a name="resetClientId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetCss` <a name="resetCss" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetCss"></a>

```typescript
public resetCss(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageFile` <a name="resetImageFile" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.resetImageFile"></a>

```typescript
public resetImageFile(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoUserPoolUiCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct"></a>

```typescript
import { cognitoUserPoolUiCustomization } from '@cdktf/aws-cdk'

cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement"></a>

```typescript
import { cognitoUserPoolUiCustomization } from '@cdktf/aws-cdk'

cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource"></a>

```typescript
import { cognitoUserPoolUiCustomization } from '@cdktf/aws-cdk'

cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.generateConfigForImport"></a>

```typescript
import { cognitoUserPoolUiCustomization } from '@cdktf/aws-cdk'

cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CognitoUserPoolUiCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolUiCustomization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolUiCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolUiCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssVersion">cssVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssInput">cssInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFileInput">imageFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.css">css</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFile">imageFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `cssVersion`<sup>Required</sup> <a name="cssVersion" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssVersion"></a>

```typescript
public readonly cssVersion: string;
```

- *Type:* string

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `cssInput`<sup>Optional</sup> <a name="cssInput" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.cssInput"></a>

```typescript
public readonly cssInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageFileInput`<sup>Optional</sup> <a name="imageFileInput" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFileInput"></a>

```typescript
public readonly imageFileInput: string;
```

- *Type:* string

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.css"></a>

```typescript
public readonly css: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageFile`<sup>Required</sup> <a name="imageFile" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.imageFile"></a>

```typescript
public readonly imageFile: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolUiCustomizationConfig <a name="CognitoUserPoolUiCustomizationConfig" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.Initializer"></a>

```typescript
import { cognitoUserPoolUiCustomization } from '@cdktf/aws-cdk'

const cognitoUserPoolUiCustomizationConfig: cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.css">css</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.imageFile">imageFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}.

---

##### `css`<sup>Optional</sup> <a name="css" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.css"></a>

```typescript
public readonly css: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageFile`<sup>Optional</sup> <a name="imageFile" id="@cdktf/aws-cdk.cognitoUserPoolUiCustomization.CognitoUserPoolUiCustomizationConfig.property.imageFile"></a>

```typescript
public readonly imageFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}.

---



