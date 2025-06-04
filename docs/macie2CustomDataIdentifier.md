# `macie2CustomDataIdentifier` Submodule <a name="`macie2CustomDataIdentifier` Submodule" id="@cdktf/aws-cdk.macie2CustomDataIdentifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2CustomDataIdentifier <a name="Macie2CustomDataIdentifier" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier aws_macie2_custom_data_identifier}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer"></a>

```typescript
import { macie2CustomDataIdentifier } from '@cdktf/aws-cdk'

new macie2CustomDataIdentifier.Macie2CustomDataIdentifier(scope: Construct, id: string, config?: Macie2CustomDataIdentifierConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig">Macie2CustomDataIdentifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig">Macie2CustomDataIdentifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetIgnoreWords">resetIgnoreWords</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetKeywords">resetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetMaximumMatchDistance">resetMaximumMatchDistance</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreWords` <a name="resetIgnoreWords" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetIgnoreWords"></a>

```typescript
public resetIgnoreWords(): void
```

##### `resetKeywords` <a name="resetKeywords" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetKeywords"></a>

```typescript
public resetKeywords(): void
```

##### `resetMaximumMatchDistance` <a name="resetMaximumMatchDistance" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetMaximumMatchDistance"></a>

```typescript
public resetMaximumMatchDistance(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Macie2CustomDataIdentifier resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct"></a>

```typescript
import { macie2CustomDataIdentifier } from '@cdktf/aws-cdk'

macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement"></a>

```typescript
import { macie2CustomDataIdentifier } from '@cdktf/aws-cdk'

macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource"></a>

```typescript
import { macie2CustomDataIdentifier } from '@cdktf/aws-cdk'

macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport"></a>

```typescript
import { macie2CustomDataIdentifier } from '@cdktf/aws-cdk'

macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Macie2CustomDataIdentifier resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Macie2CustomDataIdentifier to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Macie2CustomDataIdentifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Macie2CustomDataIdentifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWordsInput">ignoreWordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywordsInput">keywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistanceInput">maximumMatchDistanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWords">ignoreWords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywords">keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistance">maximumMatchDistance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreWordsInput`<sup>Optional</sup> <a name="ignoreWordsInput" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWordsInput"></a>

```typescript
public readonly ignoreWordsInput: string[];
```

- *Type:* string[]

---

##### `keywordsInput`<sup>Optional</sup> <a name="keywordsInput" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywordsInput"></a>

```typescript
public readonly keywordsInput: string[];
```

- *Type:* string[]

---

##### `maximumMatchDistanceInput`<sup>Optional</sup> <a name="maximumMatchDistanceInput" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistanceInput"></a>

```typescript
public readonly maximumMatchDistanceInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreWords`<sup>Required</sup> <a name="ignoreWords" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWords"></a>

```typescript
public readonly ignoreWords: string[];
```

- *Type:* string[]

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

---

##### `maximumMatchDistance`<sup>Required</sup> <a name="maximumMatchDistance" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistance"></a>

```typescript
public readonly maximumMatchDistance: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2CustomDataIdentifierConfig <a name="Macie2CustomDataIdentifierConfig" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.Initializer"></a>

```typescript
import { macie2CustomDataIdentifier } from '@cdktf/aws-cdk'

const macie2CustomDataIdentifierConfig: macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.ignoreWords">ignoreWords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.keywords">keywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.maximumMatchDistance">maximumMatchDistance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}. |
| <code><a href="#@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWords`<sup>Optional</sup> <a name="ignoreWords" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.ignoreWords"></a>

```typescript
public readonly ignoreWords: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}.

---

##### `maximumMatchDistance`<sup>Optional</sup> <a name="maximumMatchDistance" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.maximumMatchDistance"></a>

```typescript
public readonly maximumMatchDistance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}.

---



