# `macieMemberAccountAssociation` Submodule <a name="`macieMemberAccountAssociation` Submodule" id="@cdktf/aws-cdk.macieMemberAccountAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieMemberAccountAssociation <a name="MacieMemberAccountAssociation" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association aws_macie_member_account_association}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.Initializer"></a>

```typescript
import { macieMemberAccountAssociation } from '@cdktf/aws-cdk'

new macieMemberAccountAssociation.MacieMemberAccountAssociation(scope: Construct, id: string, config: MacieMemberAccountAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig">MacieMemberAccountAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig">MacieMemberAccountAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MacieMemberAccountAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.isConstruct"></a>

```typescript
import { macieMemberAccountAssociation } from '@cdktf/aws-cdk'

macieMemberAccountAssociation.MacieMemberAccountAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.isTerraformElement"></a>

```typescript
import { macieMemberAccountAssociation } from '@cdktf/aws-cdk'

macieMemberAccountAssociation.MacieMemberAccountAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.isTerraformResource"></a>

```typescript
import { macieMemberAccountAssociation } from '@cdktf/aws-cdk'

macieMemberAccountAssociation.MacieMemberAccountAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.generateConfigForImport"></a>

```typescript
import { macieMemberAccountAssociation } from '@cdktf/aws-cdk'

macieMemberAccountAssociation.MacieMemberAccountAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MacieMemberAccountAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MacieMemberAccountAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MacieMemberAccountAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MacieMemberAccountAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.memberAccountIdInput">memberAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.memberAccountId">memberAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberAccountIdInput`<sup>Optional</sup> <a name="memberAccountIdInput" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.memberAccountIdInput"></a>

```typescript
public readonly memberAccountIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberAccountId`<sup>Required</sup> <a name="memberAccountId" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.memberAccountId"></a>

```typescript
public readonly memberAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MacieMemberAccountAssociationConfig <a name="MacieMemberAccountAssociationConfig" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.Initializer"></a>

```typescript
import { macieMemberAccountAssociation } from '@cdktf/aws-cdk'

const macieMemberAccountAssociationConfig: macieMemberAccountAssociation.MacieMemberAccountAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.memberAccountId">memberAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association#member_account_id MacieMemberAccountAssociation#member_account_id}. |
| <code><a href="#@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association#id MacieMemberAccountAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `memberAccountId`<sup>Required</sup> <a name="memberAccountId" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.memberAccountId"></a>

```typescript
public readonly memberAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association#member_account_id MacieMemberAccountAssociation#member_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.macieMemberAccountAssociation.MacieMemberAccountAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association#id MacieMemberAccountAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



