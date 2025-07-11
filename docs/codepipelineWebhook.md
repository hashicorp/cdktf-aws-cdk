# `codepipelineWebhook` Submodule <a name="`codepipelineWebhook` Submodule" id="@cdktf/aws-cdk.codepipelineWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineWebhook <a name="CodepipelineWebhook" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook aws_codepipeline_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktf/aws-cdk'

new codepipelineWebhook.CodepipelineWebhook(scope: Construct, id: string, config: CodepipelineWebhookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig">CodepipelineWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig">CodepipelineWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration">putAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.resetAuthenticationConfiguration">resetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticationConfiguration` <a name="putAuthenticationConfiguration" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration"></a>

```typescript
public putAuthenticationConfiguration(value: CodepipelineWebhookAuthenticationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.putFilter"></a>

```typescript
public putFilter(value: IResolvable | CodepipelineWebhookFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>[]

---

##### `resetAuthenticationConfiguration` <a name="resetAuthenticationConfiguration" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.resetAuthenticationConfiguration"></a>

```typescript
public resetAuthenticationConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodepipelineWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.isConstruct"></a>

```typescript
import { codepipelineWebhook } from '@cdktf/aws-cdk'

codepipelineWebhook.CodepipelineWebhook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.isTerraformElement"></a>

```typescript
import { codepipelineWebhook } from '@cdktf/aws-cdk'

codepipelineWebhook.CodepipelineWebhook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.isTerraformResource"></a>

```typescript
import { codepipelineWebhook } from '@cdktf/aws-cdk'

codepipelineWebhook.CodepipelineWebhook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport"></a>

```typescript
import { codepipelineWebhook } from '@cdktf/aws-cdk'

codepipelineWebhook.CodepipelineWebhook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CodepipelineWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodepipelineWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodepipelineWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodepipelineWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList">CodepipelineWebhookFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput">authenticationConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput">authenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput">targetActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput">targetPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.authentication">authentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.targetAction">targetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline">targetPipeline</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration"></a>

```typescript
public readonly authenticationConfiguration: CodepipelineWebhookAuthenticationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.filter"></a>

```typescript
public readonly filter: CodepipelineWebhookFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList">CodepipelineWebhookFilterList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `authenticationConfigurationInput`<sup>Optional</sup> <a name="authenticationConfigurationInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput"></a>

```typescript
public readonly authenticationConfigurationInput: CodepipelineWebhookAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | CodepipelineWebhookFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetActionInput`<sup>Optional</sup> <a name="targetActionInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput"></a>

```typescript
public readonly targetActionInput: string;
```

- *Type:* string

---

##### `targetPipelineInput`<sup>Optional</sup> <a name="targetPipelineInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput"></a>

```typescript
public readonly targetPipelineInput: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.authentication"></a>

```typescript
public readonly authentication: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.targetAction"></a>

```typescript
public readonly targetAction: string;
```

- *Type:* string

---

##### `targetPipeline`<sup>Required</sup> <a name="targetPipeline" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline"></a>

```typescript
public readonly targetPipeline: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineWebhookAuthenticationConfiguration <a name="CodepipelineWebhookAuthenticationConfiguration" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktf/aws-cdk'

const codepipelineWebhookAuthenticationConfiguration: codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange">allowedIpRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken">secretToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}. |

---

##### `allowedIpRange`<sup>Optional</sup> <a name="allowedIpRange" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange"></a>

```typescript
public readonly allowedIpRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}.

---

##### `secretToken`<sup>Optional</sup> <a name="secretToken" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken"></a>

```typescript
public readonly secretToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}.

---

### CodepipelineWebhookConfig <a name="CodepipelineWebhookConfig" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktf/aws-cdk'

const codepipelineWebhookConfig: codepipelineWebhook.CodepipelineWebhookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication">authentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#authentication CodepipelineWebhook#authentication}. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#name CodepipelineWebhook#name}. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction">targetAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#target_action CodepipelineWebhook#target_action}. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline">targetPipeline</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#id CodepipelineWebhook#id}. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#tags CodepipelineWebhook#tags}. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication"></a>

```typescript
public readonly authentication: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#authentication CodepipelineWebhook#authentication}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | CodepipelineWebhookFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#filter CodepipelineWebhook#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#name CodepipelineWebhook#name}.

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction"></a>

```typescript
public readonly targetAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#target_action CodepipelineWebhook#target_action}.

---

##### `targetPipeline`<sup>Required</sup> <a name="targetPipeline" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline"></a>

```typescript
public readonly targetPipeline: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}.

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration"></a>

```typescript
public readonly authenticationConfiguration: CodepipelineWebhookAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#authentication_configuration CodepipelineWebhook#authentication_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#id CodepipelineWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#tags CodepipelineWebhook#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}.

---

### CodepipelineWebhookFilter <a name="CodepipelineWebhookFilter" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktf/aws-cdk'

const codepipelineWebhookFilter: codepipelineWebhook.CodepipelineWebhookFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter.property.jsonPath">jsonPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#json_path CodepipelineWebhook#json_path}. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter.property.matchEquals">matchEquals</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#match_equals CodepipelineWebhook#match_equals}. |

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#json_path CodepipelineWebhook#json_path}.

---

##### `matchEquals`<sup>Required</sup> <a name="matchEquals" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter.property.matchEquals"></a>

```typescript
public readonly matchEquals: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codepipeline_webhook#match_equals CodepipelineWebhook#match_equals}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineWebhookAuthenticationConfigurationOutputReference <a name="CodepipelineWebhookAuthenticationConfigurationOutputReference" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktf/aws-cdk'

new codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange">resetAllowedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken">resetSecretToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedIpRange` <a name="resetAllowedIpRange" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange"></a>

```typescript
public resetAllowedIpRange(): void
```

##### `resetSecretToken` <a name="resetSecretToken" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken"></a>

```typescript
public resetSecretToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput">allowedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput">secretTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange">allowedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken">secretToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedIpRangeInput`<sup>Optional</sup> <a name="allowedIpRangeInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput"></a>

```typescript
public readonly allowedIpRangeInput: string;
```

- *Type:* string

---

##### `secretTokenInput`<sup>Optional</sup> <a name="secretTokenInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput"></a>

```typescript
public readonly secretTokenInput: string;
```

- *Type:* string

---

##### `allowedIpRange`<sup>Required</sup> <a name="allowedIpRange" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange"></a>

```typescript
public readonly allowedIpRange: string;
```

- *Type:* string

---

##### `secretToken`<sup>Required</sup> <a name="secretToken" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken"></a>

```typescript
public readonly secretToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodepipelineWebhookAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---


### CodepipelineWebhookFilterList <a name="CodepipelineWebhookFilterList" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktf/aws-cdk'

new codepipelineWebhook.CodepipelineWebhookFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.get"></a>

```typescript
public get(index: number): CodepipelineWebhookFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineWebhookFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>[]

---


### CodepipelineWebhookFilterOutputReference <a name="CodepipelineWebhookFilterOutputReference" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer"></a>

```typescript
import { codepipelineWebhook } from '@cdktf/aws-cdk'

new codepipelineWebhook.CodepipelineWebhookFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPathInput">jsonPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEqualsInput">matchEqualsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPath">jsonPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEquals">matchEquals</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonPathInput`<sup>Optional</sup> <a name="jsonPathInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPathInput"></a>

```typescript
public readonly jsonPathInput: string;
```

- *Type:* string

---

##### `matchEqualsInput`<sup>Optional</sup> <a name="matchEqualsInput" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEqualsInput"></a>

```typescript
public readonly matchEqualsInput: string;
```

- *Type:* string

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

---

##### `matchEquals`<sup>Required</sup> <a name="matchEquals" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEquals"></a>

```typescript
public readonly matchEquals: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodepipelineWebhookFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>

---



