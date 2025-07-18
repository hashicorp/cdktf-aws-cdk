# `elasticacheUser` Submodule <a name="`elasticacheUser` Submodule" id="@cdktf/aws-cdk.elasticacheUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheUser <a name="ElasticacheUser" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user aws_elasticache_user}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.Initializer"></a>

```typescript
import { elasticacheUser } from '@cdktf/aws-cdk'

new elasticacheUser.ElasticacheUser(scope: Construct, id: string, config: ElasticacheUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig">ElasticacheUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig">ElasticacheUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetNoPasswordRequired">resetNoPasswordRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetPasswords">resetPasswords</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetArn` <a name="resetArn" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNoPasswordRequired` <a name="resetNoPasswordRequired" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetNoPasswordRequired"></a>

```typescript
public resetNoPasswordRequired(): void
```

##### `resetPasswords` <a name="resetPasswords" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetPasswords"></a>

```typescript
public resetPasswords(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticacheUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.isConstruct"></a>

```typescript
import { elasticacheUser } from '@cdktf/aws-cdk'

elasticacheUser.ElasticacheUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.isTerraformElement"></a>

```typescript
import { elasticacheUser } from '@cdktf/aws-cdk'

elasticacheUser.ElasticacheUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.isTerraformResource"></a>

```typescript
import { elasticacheUser } from '@cdktf/aws-cdk'

elasticacheUser.ElasticacheUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.generateConfigForImport"></a>

```typescript
import { elasticacheUser } from '@cdktf/aws-cdk'

elasticacheUser.ElasticacheUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ElasticacheUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticacheUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.accessStringInput">accessStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.noPasswordRequiredInput">noPasswordRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.passwordsInput">passwordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.accessString">accessString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.noPasswordRequired">noPasswordRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.passwords">passwords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessStringInput`<sup>Optional</sup> <a name="accessStringInput" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.accessStringInput"></a>

```typescript
public readonly accessStringInput: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `noPasswordRequiredInput`<sup>Optional</sup> <a name="noPasswordRequiredInput" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.noPasswordRequiredInput"></a>

```typescript
public readonly noPasswordRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordsInput`<sup>Optional</sup> <a name="passwordsInput" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.passwordsInput"></a>

```typescript
public readonly passwordsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `accessString`<sup>Required</sup> <a name="accessString" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.accessString"></a>

```typescript
public readonly accessString: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `noPasswordRequired`<sup>Required</sup> <a name="noPasswordRequired" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.noPasswordRequired"></a>

```typescript
public readonly noPasswordRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwords`<sup>Required</sup> <a name="passwords" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.passwords"></a>

```typescript
public readonly passwords: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheUserConfig <a name="ElasticacheUserConfig" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.Initializer"></a>

```typescript
import { elasticacheUser } from '@cdktf/aws-cdk'

const elasticacheUserConfig: elasticacheUser.ElasticacheUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.accessString">accessString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#access_string ElasticacheUser#access_string}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#engine ElasticacheUser#engine}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#user_id ElasticacheUser#user_id}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#user_name ElasticacheUser#user_name}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#arn ElasticacheUser#arn}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#id ElasticacheUser#id}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.noPasswordRequired">noPasswordRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#no_password_required ElasticacheUser#no_password_required}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.passwords">passwords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#passwords ElasticacheUser#passwords}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#tags ElasticacheUser#tags}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#tags_all ElasticacheUser#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessString`<sup>Required</sup> <a name="accessString" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.accessString"></a>

```typescript
public readonly accessString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#access_string ElasticacheUser#access_string}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#engine ElasticacheUser#engine}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#user_id ElasticacheUser#user_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#user_name ElasticacheUser#user_name}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#arn ElasticacheUser#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#id ElasticacheUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noPasswordRequired`<sup>Optional</sup> <a name="noPasswordRequired" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.noPasswordRequired"></a>

```typescript
public readonly noPasswordRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#no_password_required ElasticacheUser#no_password_required}.

---

##### `passwords`<sup>Optional</sup> <a name="passwords" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.passwords"></a>

```typescript
public readonly passwords: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#passwords ElasticacheUser#passwords}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#tags ElasticacheUser#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.elasticacheUser.ElasticacheUserConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_user#tags_all ElasticacheUser#tags_all}.

---



