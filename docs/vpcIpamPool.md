# `vpcIpamPool` Submodule <a name="`vpcIpamPool` Submodule" id="@cdktf/aws-cdk.vpcIpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPool <a name="VpcIpamPool" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool aws_vpc_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.Initializer"></a>

```typescript
import { vpcIpamPool } from '@cdktf/aws-cdk'

new vpcIpamPool.VpcIpamPool(scope: Construct, id: string, config: VpcIpamPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig">VpcIpamPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig">VpcIpamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength">resetAllocationDefaultNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength">resetAllocationMaxNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength">resetAllocationMinNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags">resetAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAutoImport">resetAutoImport</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAwsService">resetAwsService</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable">resetPubliclyAdvertisable</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId">resetSourceIpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllocationDefaultNetmaskLength` <a name="resetAllocationDefaultNetmaskLength" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength"></a>

```typescript
public resetAllocationDefaultNetmaskLength(): void
```

##### `resetAllocationMaxNetmaskLength` <a name="resetAllocationMaxNetmaskLength" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength"></a>

```typescript
public resetAllocationMaxNetmaskLength(): void
```

##### `resetAllocationMinNetmaskLength` <a name="resetAllocationMinNetmaskLength" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength"></a>

```typescript
public resetAllocationMinNetmaskLength(): void
```

##### `resetAllocationResourceTags` <a name="resetAllocationResourceTags" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags"></a>

```typescript
public resetAllocationResourceTags(): void
```

##### `resetAutoImport` <a name="resetAutoImport" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAutoImport"></a>

```typescript
public resetAutoImport(): void
```

##### `resetAwsService` <a name="resetAwsService" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetAwsService"></a>

```typescript
public resetAwsService(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocale` <a name="resetLocale" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetLocale"></a>

```typescript
public resetLocale(): void
```

##### `resetPubliclyAdvertisable` <a name="resetPubliclyAdvertisable" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable"></a>

```typescript
public resetPubliclyAdvertisable(): void
```

##### `resetSourceIpamPoolId` <a name="resetSourceIpamPoolId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId"></a>

```typescript
public resetSourceIpamPoolId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcIpamPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.isConstruct"></a>

```typescript
import { vpcIpamPool } from '@cdktf/aws-cdk'

vpcIpamPool.VpcIpamPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.isTerraformElement"></a>

```typescript
import { vpcIpamPool } from '@cdktf/aws-cdk'

vpcIpamPool.VpcIpamPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.isTerraformResource"></a>

```typescript
import { vpcIpamPool } from '@cdktf/aws-cdk'

vpcIpamPool.VpcIpamPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.generateConfigForImport"></a>

```typescript
import { vpcIpamPool } from '@cdktf/aws-cdk'

vpcIpamPool.VpcIpamPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcIpamPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcIpamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcIpamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcIpamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.ipamScopeType">ipamScopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.poolDepth">poolDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput">allocationDefaultNetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput">allocationMaxNetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput">allocationMinNetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput">allocationResourceTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.autoImportInput">autoImportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.awsServiceInput">awsServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput">ipamScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput">publiclyAdvertisableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput">sourceIpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationResourceTags">allocationResourceTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.autoImport">autoImport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.awsService">awsService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ipamScopeType`<sup>Required</sup> <a name="ipamScopeType" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.ipamScopeType"></a>

```typescript
public readonly ipamScopeType: string;
```

- *Type:* string

---

##### `poolDepth`<sup>Required</sup> <a name="poolDepth" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.poolDepth"></a>

```typescript
public readonly poolDepth: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `allocationDefaultNetmaskLengthInput`<sup>Optional</sup> <a name="allocationDefaultNetmaskLengthInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput"></a>

```typescript
public readonly allocationDefaultNetmaskLengthInput: number;
```

- *Type:* number

---

##### `allocationMaxNetmaskLengthInput`<sup>Optional</sup> <a name="allocationMaxNetmaskLengthInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput"></a>

```typescript
public readonly allocationMaxNetmaskLengthInput: number;
```

- *Type:* number

---

##### `allocationMinNetmaskLengthInput`<sup>Optional</sup> <a name="allocationMinNetmaskLengthInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput"></a>

```typescript
public readonly allocationMinNetmaskLengthInput: number;
```

- *Type:* number

---

##### `allocationResourceTagsInput`<sup>Optional</sup> <a name="allocationResourceTagsInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput"></a>

```typescript
public readonly allocationResourceTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `autoImportInput`<sup>Optional</sup> <a name="autoImportInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.autoImportInput"></a>

```typescript
public readonly autoImportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsServiceInput`<sup>Optional</sup> <a name="awsServiceInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.awsServiceInput"></a>

```typescript
public readonly awsServiceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipamScopeIdInput`<sup>Optional</sup> <a name="ipamScopeIdInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput"></a>

```typescript
public readonly ipamScopeIdInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `publiclyAdvertisableInput`<sup>Optional</sup> <a name="publiclyAdvertisableInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput"></a>

```typescript
public readonly publiclyAdvertisableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceIpamPoolIdInput`<sup>Optional</sup> <a name="sourceIpamPoolIdInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput"></a>

```typescript
public readonly sourceIpamPoolIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `allocationDefaultNetmaskLength`<sup>Required</sup> <a name="allocationDefaultNetmaskLength" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength"></a>

```typescript
public readonly allocationDefaultNetmaskLength: number;
```

- *Type:* number

---

##### `allocationMaxNetmaskLength`<sup>Required</sup> <a name="allocationMaxNetmaskLength" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength"></a>

```typescript
public readonly allocationMaxNetmaskLength: number;
```

- *Type:* number

---

##### `allocationMinNetmaskLength`<sup>Required</sup> <a name="allocationMinNetmaskLength" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength"></a>

```typescript
public readonly allocationMinNetmaskLength: number;
```

- *Type:* number

---

##### `allocationResourceTags`<sup>Required</sup> <a name="allocationResourceTags" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.allocationResourceTags"></a>

```typescript
public readonly allocationResourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `autoImport`<sup>Required</sup> <a name="autoImport" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.autoImport"></a>

```typescript
public readonly autoImport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsService`<sup>Required</sup> <a name="awsService" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.awsService"></a>

```typescript
public readonly awsService: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `publiclyAdvertisable`<sup>Required</sup> <a name="publiclyAdvertisable" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable"></a>

```typescript
public readonly publiclyAdvertisable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceIpamPoolId`<sup>Required</sup> <a name="sourceIpamPoolId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId"></a>

```typescript
public readonly sourceIpamPoolId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolConfig <a name="VpcIpamPoolConfig" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.Initializer"></a>

```typescript
import { vpcIpamPool } from '@cdktf/aws-cdk'

const vpcIpamPoolConfig: vpcIpamPool.VpcIpamPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily">addressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#address_family VpcIpamPool#address_family}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags">allocationResourceTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.autoImport">autoImport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.awsService">awsService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#description VpcIpamPool#description}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#id VpcIpamPool#id}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#locale VpcIpamPool#locale}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#tags VpcIpamPool#tags}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#address_family VpcIpamPool#address_family}.

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}.

---

##### `allocationDefaultNetmaskLength`<sup>Optional</sup> <a name="allocationDefaultNetmaskLength" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength"></a>

```typescript
public readonly allocationDefaultNetmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}.

---

##### `allocationMaxNetmaskLength`<sup>Optional</sup> <a name="allocationMaxNetmaskLength" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength"></a>

```typescript
public readonly allocationMaxNetmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}.

---

##### `allocationMinNetmaskLength`<sup>Optional</sup> <a name="allocationMinNetmaskLength" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength"></a>

```typescript
public readonly allocationMinNetmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}.

---

##### `allocationResourceTags`<sup>Optional</sup> <a name="allocationResourceTags" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags"></a>

```typescript
public readonly allocationResourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}.

---

##### `autoImport`<sup>Optional</sup> <a name="autoImport" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.autoImport"></a>

```typescript
public readonly autoImport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}.

---

##### `awsService`<sup>Optional</sup> <a name="awsService" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.awsService"></a>

```typescript
public readonly awsService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#description VpcIpamPool#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#id VpcIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#locale VpcIpamPool#locale}.

---

##### `publiclyAdvertisable`<sup>Optional</sup> <a name="publiclyAdvertisable" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable"></a>

```typescript
public readonly publiclyAdvertisable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}.

---

##### `sourceIpamPoolId`<sup>Optional</sup> <a name="sourceIpamPoolId" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId"></a>

```typescript
public readonly sourceIpamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#tags VpcIpamPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}.

---



