# `kmsReplicaKey` Submodule <a name="`kmsReplicaKey` Submodule" id="@cdktf/aws-cdk.kmsReplicaKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsReplicaKey <a name="KmsReplicaKey" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key aws_kms_replica_key}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.Initializer"></a>

```typescript
import { kmsReplicaKey } from '@cdktf/aws-cdk'

new kmsReplicaKey.KmsReplicaKey(scope: Construct, id: string, config: KmsReplicaKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig">KmsReplicaKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig">KmsReplicaKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetBypassPolicyLockoutSafetyCheck">resetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetDeletionWindowInDays">resetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBypassPolicyLockoutSafetyCheck` <a name="resetBypassPolicyLockoutSafetyCheck" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetBypassPolicyLockoutSafetyCheck"></a>

```typescript
public resetBypassPolicyLockoutSafetyCheck(): void
```

##### `resetDeletionWindowInDays` <a name="resetDeletionWindowInDays" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetDeletionWindowInDays"></a>

```typescript
public resetDeletionWindowInDays(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KmsReplicaKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.isConstruct"></a>

```typescript
import { kmsReplicaKey } from '@cdktf/aws-cdk'

kmsReplicaKey.KmsReplicaKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.isTerraformElement"></a>

```typescript
import { kmsReplicaKey } from '@cdktf/aws-cdk'

kmsReplicaKey.KmsReplicaKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.isTerraformResource"></a>

```typescript
import { kmsReplicaKey } from '@cdktf/aws-cdk'

kmsReplicaKey.KmsReplicaKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.generateConfigForImport"></a>

```typescript
import { kmsReplicaKey } from '@cdktf/aws-cdk'

kmsReplicaKey.KmsReplicaKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KmsReplicaKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsReplicaKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsReplicaKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsReplicaKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.keyRotationEnabled">keyRotationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.keySpec">keySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.keyUsage">keyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.bypassPolicyLockoutSafetyCheckInput">bypassPolicyLockoutSafetyCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.deletionWindowInDaysInput">deletionWindowInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.primaryKeyArnInput">primaryKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.primaryKeyArn">primaryKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyRotationEnabled`<sup>Required</sup> <a name="keyRotationEnabled" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.keyRotationEnabled"></a>

```typescript
public readonly keyRotationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.keySpec"></a>

```typescript
public readonly keySpec: string;
```

- *Type:* string

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.keyUsage"></a>

```typescript
public readonly keyUsage: string;
```

- *Type:* string

---

##### `bypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheckInput" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionWindowInDaysInput`<sup>Optional</sup> <a name="deletionWindowInDaysInput" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.deletionWindowInDaysInput"></a>

```typescript
public readonly deletionWindowInDaysInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `primaryKeyArnInput`<sup>Optional</sup> <a name="primaryKeyArnInput" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.primaryKeyArnInput"></a>

```typescript
public readonly primaryKeyArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.bypassPolicyLockoutSafetyCheck"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionWindowInDays`<sup>Required</sup> <a name="deletionWindowInDays" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.deletionWindowInDays"></a>

```typescript
public readonly deletionWindowInDays: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `primaryKeyArn`<sup>Required</sup> <a name="primaryKeyArn" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.primaryKeyArn"></a>

```typescript
public readonly primaryKeyArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsReplicaKeyConfig <a name="KmsReplicaKeyConfig" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.Initializer"></a>

```typescript
import { kmsReplicaKey } from '@cdktf/aws-cdk'

const kmsReplicaKeyConfig: kmsReplicaKey.KmsReplicaKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.primaryKeyArn">primaryKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#primary_key_arn KmsReplicaKey#primary_key_arn}. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#bypass_policy_lockout_safety_check KmsReplicaKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#deletion_window_in_days KmsReplicaKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#description KmsReplicaKey#description}. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#enabled KmsReplicaKey#enabled}. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#id KmsReplicaKey#id}. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#policy KmsReplicaKey#policy}. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#tags KmsReplicaKey#tags}. |
| <code><a href="#@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#tags_all KmsReplicaKey#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `primaryKeyArn`<sup>Required</sup> <a name="primaryKeyArn" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.primaryKeyArn"></a>

```typescript
public readonly primaryKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#primary_key_arn KmsReplicaKey#primary_key_arn}.

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#bypass_policy_lockout_safety_check KmsReplicaKey#bypass_policy_lockout_safety_check}.

---

##### `deletionWindowInDays`<sup>Optional</sup> <a name="deletionWindowInDays" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.deletionWindowInDays"></a>

```typescript
public readonly deletionWindowInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#deletion_window_in_days KmsReplicaKey#deletion_window_in_days}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#description KmsReplicaKey#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#enabled KmsReplicaKey#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#id KmsReplicaKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#policy KmsReplicaKey#policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#tags KmsReplicaKey#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.kmsReplicaKey.KmsReplicaKeyConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/kms_replica_key#tags_all KmsReplicaKey#tags_all}.

---



