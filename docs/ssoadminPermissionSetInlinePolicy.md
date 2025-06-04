# `ssoadminPermissionSetInlinePolicy` Submodule <a name="`ssoadminPermissionSetInlinePolicy` Submodule" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminPermissionSetInlinePolicy <a name="SsoadminPermissionSetInlinePolicy" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssoadmin_permission_set_inline_policy aws_ssoadmin_permission_set_inline_policy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer"></a>

```typescript
import { ssoadminPermissionSetInlinePolicy } from '@cdktf/aws-cdk'

new ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy(scope: Construct, id: string, config: SsoadminPermissionSetInlinePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig">SsoadminPermissionSetInlinePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig">SsoadminPermissionSetInlinePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsoadminPermissionSetInlinePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct"></a>

```typescript
import { ssoadminPermissionSetInlinePolicy } from '@cdktf/aws-cdk'

ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement"></a>

```typescript
import { ssoadminPermissionSetInlinePolicy } from '@cdktf/aws-cdk'

ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource"></a>

```typescript
import { ssoadminPermissionSetInlinePolicy } from '@cdktf/aws-cdk'

ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport"></a>

```typescript
import { ssoadminPermissionSetInlinePolicy } from '@cdktf/aws-cdk'

ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SsoadminPermissionSetInlinePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoadminPermissionSetInlinePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoadminPermissionSetInlinePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssoadmin_permission_set_inline_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminPermissionSetInlinePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicyInput">inlinePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArnInput">permissionSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicy">inlinePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inlinePolicyInput`<sup>Optional</sup> <a name="inlinePolicyInput" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicyInput"></a>

```typescript
public readonly inlinePolicyInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `permissionSetArnInput`<sup>Optional</sup> <a name="permissionSetArnInput" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArnInput"></a>

```typescript
public readonly permissionSetArnInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inlinePolicy`<sup>Required</sup> <a name="inlinePolicy" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.inlinePolicy"></a>

```typescript
public readonly inlinePolicy: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminPermissionSetInlinePolicyConfig <a name="SsoadminPermissionSetInlinePolicyConfig" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.Initializer"></a>

```typescript
import { ssoadminPermissionSetInlinePolicy } from '@cdktf/aws-cdk'

const ssoadminPermissionSetInlinePolicyConfig: ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.inlinePolicy">inlinePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}. |
| <code><a href="#@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssoadmin_permission_set_inline_policy#id SsoadminPermissionSetInlinePolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `inlinePolicy`<sup>Required</sup> <a name="inlinePolicy" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.inlinePolicy"></a>

```typescript
public readonly inlinePolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.ssoadminPermissionSetInlinePolicy.SsoadminPermissionSetInlinePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ssoadmin_permission_set_inline_policy#id SsoadminPermissionSetInlinePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



