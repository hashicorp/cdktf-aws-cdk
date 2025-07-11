# `dbProxyDefaultTargetGroup` Submodule <a name="`dbProxyDefaultTargetGroup` Submodule" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbProxyDefaultTargetGroup <a name="DbProxyDefaultTargetGroup" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group aws_db_proxy_default_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer"></a>

```typescript
import { dbProxyDefaultTargetGroup } from '@cdktf/aws-cdk'

new dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup(scope: Construct, id: string, config: DbProxyDefaultTargetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig">DbProxyDefaultTargetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig">DbProxyDefaultTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig">putConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetConnectionPoolConfig">resetConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionPoolConfig` <a name="putConnectionPoolConfig" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig"></a>

```typescript
public putConnectionPoolConfig(value: DbProxyDefaultTargetGroupConnectionPoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putConnectionPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DbProxyDefaultTargetGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>

---

##### `resetConnectionPoolConfig` <a name="resetConnectionPoolConfig" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetConnectionPoolConfig"></a>

```typescript
public resetConnectionPoolConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DbProxyDefaultTargetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct"></a>

```typescript
import { dbProxyDefaultTargetGroup } from '@cdktf/aws-cdk'

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement"></a>

```typescript
import { dbProxyDefaultTargetGroup } from '@cdktf/aws-cdk'

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource"></a>

```typescript
import { dbProxyDefaultTargetGroup } from '@cdktf/aws-cdk'

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.generateConfigForImport"></a>

```typescript
import { dbProxyDefaultTargetGroup } from '@cdktf/aws-cdk'

dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DbProxyDefaultTargetGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DbProxyDefaultTargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DbProxyDefaultTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DbProxyDefaultTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfig">connectionPoolConfig</a></code> | <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference">DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference">DbProxyDefaultTargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfigInput">connectionPoolConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyNameInput">dbProxyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyName">dbProxyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `connectionPoolConfig`<sup>Required</sup> <a name="connectionPoolConfig" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfig"></a>

```typescript
public readonly connectionPoolConfig: DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference">DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DbProxyDefaultTargetGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference">DbProxyDefaultTargetGroupTimeoutsOutputReference</a>

---

##### `connectionPoolConfigInput`<sup>Optional</sup> <a name="connectionPoolConfigInput" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.connectionPoolConfigInput"></a>

```typescript
public readonly connectionPoolConfigInput: DbProxyDefaultTargetGroupConnectionPoolConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

---

##### `dbProxyNameInput`<sup>Optional</sup> <a name="dbProxyNameInput" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyNameInput"></a>

```typescript
public readonly dbProxyNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DbProxyDefaultTargetGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.dbProxyName"></a>

```typescript
public readonly dbProxyName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DbProxyDefaultTargetGroupConfig <a name="DbProxyDefaultTargetGroupConfig" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.Initializer"></a>

```typescript
import { dbProxyDefaultTargetGroup } from '@cdktf/aws-cdk'

const dbProxyDefaultTargetGroupConfig: dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dbProxyName">dbProxyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connectionPoolConfig">connectionPoolConfig</a></code> | <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | connection_pool_config block. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbProxyName`<sup>Required</sup> <a name="dbProxyName" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.dbProxyName"></a>

```typescript
public readonly dbProxyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}.

---

##### `connectionPoolConfig`<sup>Optional</sup> <a name="connectionPoolConfig" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.connectionPoolConfig"></a>

```typescript
public readonly connectionPoolConfig: DbProxyDefaultTargetGroupConnectionPoolConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

connection_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DbProxyDefaultTargetGroupTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#timeouts DbProxyDefaultTargetGroup#timeouts}

---

### DbProxyDefaultTargetGroupConnectionPoolConfig <a name="DbProxyDefaultTargetGroupConnectionPoolConfig" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.Initializer"></a>

```typescript
import { dbProxyDefaultTargetGroup } from '@cdktf/aws-cdk'

const dbProxyDefaultTargetGroupConnectionPoolConfig: dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.connectionBorrowTimeout">connectionBorrowTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.initQuery">initQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#init_query DbProxyDefaultTargetGroup#init_query}. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxConnectionsPercent">maxConnectionsPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxIdleConnectionsPercent">maxIdleConnectionsPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.sessionPinningFilters">sessionPinningFilters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}. |

---

##### `connectionBorrowTimeout`<sup>Optional</sup> <a name="connectionBorrowTimeout" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.connectionBorrowTimeout"></a>

```typescript
public readonly connectionBorrowTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}.

---

##### `initQuery`<sup>Optional</sup> <a name="initQuery" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.initQuery"></a>

```typescript
public readonly initQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#init_query DbProxyDefaultTargetGroup#init_query}.

---

##### `maxConnectionsPercent`<sup>Optional</sup> <a name="maxConnectionsPercent" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxConnectionsPercent"></a>

```typescript
public readonly maxConnectionsPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}.

---

##### `maxIdleConnectionsPercent`<sup>Optional</sup> <a name="maxIdleConnectionsPercent" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.maxIdleConnectionsPercent"></a>

```typescript
public readonly maxIdleConnectionsPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}.

---

##### `sessionPinningFilters`<sup>Optional</sup> <a name="sessionPinningFilters" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig.property.sessionPinningFilters"></a>

```typescript
public readonly sessionPinningFilters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}.

---

### DbProxyDefaultTargetGroupTimeouts <a name="DbProxyDefaultTargetGroupTimeouts" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.Initializer"></a>

```typescript
import { dbProxyDefaultTargetGroup } from '@cdktf/aws-cdk'

const dbProxyDefaultTargetGroupTimeouts: dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#create DbProxyDefaultTargetGroup#create}. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#update DbProxyDefaultTargetGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#create DbProxyDefaultTargetGroup#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/db_proxy_default_target_group#update DbProxyDefaultTargetGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference <a name="DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer"></a>

```typescript
import { dbProxyDefaultTargetGroup } from '@cdktf/aws-cdk'

new dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetConnectionBorrowTimeout">resetConnectionBorrowTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetInitQuery">resetInitQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxConnectionsPercent">resetMaxConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxIdleConnectionsPercent">resetMaxIdleConnectionsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetSessionPinningFilters">resetSessionPinningFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionBorrowTimeout` <a name="resetConnectionBorrowTimeout" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetConnectionBorrowTimeout"></a>

```typescript
public resetConnectionBorrowTimeout(): void
```

##### `resetInitQuery` <a name="resetInitQuery" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetInitQuery"></a>

```typescript
public resetInitQuery(): void
```

##### `resetMaxConnectionsPercent` <a name="resetMaxConnectionsPercent" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxConnectionsPercent"></a>

```typescript
public resetMaxConnectionsPercent(): void
```

##### `resetMaxIdleConnectionsPercent` <a name="resetMaxIdleConnectionsPercent" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetMaxIdleConnectionsPercent"></a>

```typescript
public resetMaxIdleConnectionsPercent(): void
```

##### `resetSessionPinningFilters` <a name="resetSessionPinningFilters" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.resetSessionPinningFilters"></a>

```typescript
public resetSessionPinningFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeoutInput">connectionBorrowTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQueryInput">initQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercentInput">maxConnectionsPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercentInput">maxIdleConnectionsPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFiltersInput">sessionPinningFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeout">connectionBorrowTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQuery">initQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercent">maxConnectionsPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercent">maxIdleConnectionsPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFilters">sessionPinningFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionBorrowTimeoutInput`<sup>Optional</sup> <a name="connectionBorrowTimeoutInput" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeoutInput"></a>

```typescript
public readonly connectionBorrowTimeoutInput: number;
```

- *Type:* number

---

##### `initQueryInput`<sup>Optional</sup> <a name="initQueryInput" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQueryInput"></a>

```typescript
public readonly initQueryInput: string;
```

- *Type:* string

---

##### `maxConnectionsPercentInput`<sup>Optional</sup> <a name="maxConnectionsPercentInput" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercentInput"></a>

```typescript
public readonly maxConnectionsPercentInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsPercentInput`<sup>Optional</sup> <a name="maxIdleConnectionsPercentInput" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercentInput"></a>

```typescript
public readonly maxIdleConnectionsPercentInput: number;
```

- *Type:* number

---

##### `sessionPinningFiltersInput`<sup>Optional</sup> <a name="sessionPinningFiltersInput" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFiltersInput"></a>

```typescript
public readonly sessionPinningFiltersInput: string[];
```

- *Type:* string[]

---

##### `connectionBorrowTimeout`<sup>Required</sup> <a name="connectionBorrowTimeout" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.connectionBorrowTimeout"></a>

```typescript
public readonly connectionBorrowTimeout: number;
```

- *Type:* number

---

##### `initQuery`<sup>Required</sup> <a name="initQuery" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.initQuery"></a>

```typescript
public readonly initQuery: string;
```

- *Type:* string

---

##### `maxConnectionsPercent`<sup>Required</sup> <a name="maxConnectionsPercent" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxConnectionsPercent"></a>

```typescript
public readonly maxConnectionsPercent: number;
```

- *Type:* number

---

##### `maxIdleConnectionsPercent`<sup>Required</sup> <a name="maxIdleConnectionsPercent" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.maxIdleConnectionsPercent"></a>

```typescript
public readonly maxIdleConnectionsPercent: number;
```

- *Type:* number

---

##### `sessionPinningFilters`<sup>Required</sup> <a name="sessionPinningFilters" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.sessionPinningFilters"></a>

```typescript
public readonly sessionPinningFilters: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DbProxyDefaultTargetGroupConnectionPoolConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupConnectionPoolConfig">DbProxyDefaultTargetGroupConnectionPoolConfig</a>

---


### DbProxyDefaultTargetGroupTimeoutsOutputReference <a name="DbProxyDefaultTargetGroupTimeoutsOutputReference" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dbProxyDefaultTargetGroup } from '@cdktf/aws-cdk'

new dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DbProxyDefaultTargetGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dbProxyDefaultTargetGroup.DbProxyDefaultTargetGroupTimeouts">DbProxyDefaultTargetGroupTimeouts</a>

---



