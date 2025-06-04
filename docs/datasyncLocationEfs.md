# `datasyncLocationEfs` Submodule <a name="`datasyncLocationEfs` Submodule" id="@cdktf/aws-cdk.datasyncLocationEfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationEfs <a name="DatasyncLocationEfs" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs aws_datasync_location_efs}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.Initializer"></a>

```typescript
import { datasyncLocationEfs } from '@cdktf/aws-cdk'

new datasyncLocationEfs.DatasyncLocationEfs(scope: Construct, id: string, config: DatasyncLocationEfsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig">DatasyncLocationEfsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig">DatasyncLocationEfsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config">putEc2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEc2Config` <a name="putEc2Config" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config"></a>

```typescript
public putEc2Config(value: DatasyncLocationEfsEc2Config): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.resetSubdirectory"></a>

```typescript
public resetSubdirectory(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatasyncLocationEfs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.isConstruct"></a>

```typescript
import { datasyncLocationEfs } from '@cdktf/aws-cdk'

datasyncLocationEfs.DatasyncLocationEfs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement"></a>

```typescript
import { datasyncLocationEfs } from '@cdktf/aws-cdk'

datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource"></a>

```typescript
import { datasyncLocationEfs } from '@cdktf/aws-cdk'

datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport"></a>

```typescript
import { datasyncLocationEfs } from '@cdktf/aws-cdk'

datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatasyncLocationEfs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationEfs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationEfs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatasyncLocationEfs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.ec2Config">ec2Config</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference">DatasyncLocationEfsEc2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.ec2ConfigInput">ec2ConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArnInput">efsFileSystemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArn">efsFileSystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ec2Config`<sup>Required</sup> <a name="ec2Config" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.ec2Config"></a>

```typescript
public readonly ec2Config: DatasyncLocationEfsEc2ConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference">DatasyncLocationEfsEc2ConfigOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `ec2ConfigInput`<sup>Optional</sup> <a name="ec2ConfigInput" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.ec2ConfigInput"></a>

```typescript
public readonly ec2ConfigInput: DatasyncLocationEfsEc2Config;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---

##### `efsFileSystemArnInput`<sup>Optional</sup> <a name="efsFileSystemArnInput" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArnInput"></a>

```typescript
public readonly efsFileSystemArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `efsFileSystemArn`<sup>Required</sup> <a name="efsFileSystemArn" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArn"></a>

```typescript
public readonly efsFileSystemArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationEfsConfig <a name="DatasyncLocationEfsConfig" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.Initializer"></a>

```typescript
import { datasyncLocationEfs } from '@cdktf/aws-cdk'

const datasyncLocationEfsConfig: datasyncLocationEfs.DatasyncLocationEfsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.ec2Config">ec2Config</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | ec2_config block. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.efsFileSystemArn">efsFileSystemArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#id DatasyncLocationEfs#id}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#tags DatasyncLocationEfs#tags}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ec2Config`<sup>Required</sup> <a name="ec2Config" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.ec2Config"></a>

```typescript
public readonly ec2Config: DatasyncLocationEfsEc2Config;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

ec2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#ec2_config DatasyncLocationEfs#ec2_config}

---

##### `efsFileSystemArn`<sup>Required</sup> <a name="efsFileSystemArn" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.efsFileSystemArn"></a>

```typescript
public readonly efsFileSystemArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#id DatasyncLocationEfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#tags DatasyncLocationEfs#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}.

---

### DatasyncLocationEfsEc2Config <a name="DatasyncLocationEfsEc2Config" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config.Initializer"></a>

```typescript
import { datasyncLocationEfs } from '@cdktf/aws-cdk'

const datasyncLocationEfsEc2Config: datasyncLocationEfs.DatasyncLocationEfsEc2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#security_group_arns DatasyncLocationEfs#security_group_arns}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.subnetArn">subnetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#subnet_arn DatasyncLocationEfs#subnet_arn}. |

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#security_group_arns DatasyncLocationEfs#security_group_arns}.

---

##### `subnetArn`<sup>Required</sup> <a name="subnetArn" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.subnetArn"></a>

```typescript
public readonly subnetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_efs#subnet_arn DatasyncLocationEfs#subnet_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationEfsEc2ConfigOutputReference <a name="DatasyncLocationEfsEc2ConfigOutputReference" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationEfs } from '@cdktf/aws-cdk'

new datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArnsInput">securityGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArnInput">subnetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArn">subnetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupArnsInput`<sup>Optional</sup> <a name="securityGroupArnsInput" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArnsInput"></a>

```typescript
public readonly securityGroupArnsInput: string[];
```

- *Type:* string[]

---

##### `subnetArnInput`<sup>Optional</sup> <a name="subnetArnInput" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArnInput"></a>

```typescript
public readonly subnetArnInput: string;
```

- *Type:* string

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

---

##### `subnetArn`<sup>Required</sup> <a name="subnetArn" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArn"></a>

```typescript
public readonly subnetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncLocationEfsEc2Config;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---



