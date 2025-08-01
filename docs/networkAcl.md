# `networkAcl` Submodule <a name="`networkAcl` Submodule" id="@cdktf/aws-cdk.networkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkAcl <a name="NetworkAcl" id="@cdktf/aws-cdk.networkAcl.NetworkAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl aws_network_acl}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.Initializer"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

new networkAcl.NetworkAcl(scope: Construct, id: string, config: NetworkAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig">NetworkAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig">NetworkAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgress` <a name="putEgress" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.putEgress"></a>

```typescript
public putEgress(value: IResolvable | NetworkAclEgress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.putEgress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress">NetworkAclEgress</a>[]

---

##### `putIngress` <a name="putIngress" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.putIngress"></a>

```typescript
public putIngress(value: IResolvable | NetworkAclIngress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.putIngress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress">NetworkAclIngress</a>[]

---

##### `resetEgress` <a name="resetEgress" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.resetEgress"></a>

```typescript
public resetEgress(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.resetIngress"></a>

```typescript
public resetIngress(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkAcl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.isConstruct"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

networkAcl.NetworkAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.isTerraformElement"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

networkAcl.NetworkAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.isTerraformResource"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

networkAcl.NetworkAcl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.generateConfigForImport"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

networkAcl.NetworkAcl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.egress">egress</a></code> | <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList">NetworkAclEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.ingress">ingress</a></code> | <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList">NetworkAclIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.egressInput">egressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress">NetworkAclEgress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.ingressInput">ingressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress">NetworkAclIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.egress"></a>

```typescript
public readonly egress: NetworkAclEgressList;
```

- *Type:* <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList">NetworkAclEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.ingress"></a>

```typescript
public readonly ingress: NetworkAclIngressList;
```

- *Type:* <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList">NetworkAclIngressList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.egressInput"></a>

```typescript
public readonly egressInput: IResolvable | NetworkAclEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress">NetworkAclEgress</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.ingressInput"></a>

```typescript
public readonly ingressInput: IResolvable | NetworkAclIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress">NetworkAclIngress</a>[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.networkAcl.NetworkAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkAclConfig <a name="NetworkAclConfig" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.Initializer"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

const networkAclConfig: networkAcl.NetworkAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#vpc_id NetworkAcl#vpc_id}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.egress">egress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress">NetworkAclEgress</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#egress NetworkAcl#egress}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#id NetworkAcl#id}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.ingress">ingress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress">NetworkAclIngress</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#ingress NetworkAcl#ingress}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#subnet_ids NetworkAcl#subnet_ids}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#tags NetworkAcl#tags}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#tags_all NetworkAcl#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#vpc_id NetworkAcl#vpc_id}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.egress"></a>

```typescript
public readonly egress: IResolvable | NetworkAclEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress">NetworkAclEgress</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#egress NetworkAcl#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#id NetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.ingress"></a>

```typescript
public readonly ingress: IResolvable | NetworkAclIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress">NetworkAclIngress</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#ingress NetworkAcl#ingress}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#subnet_ids NetworkAcl#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#tags NetworkAcl#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.networkAcl.NetworkAclConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#tags_all NetworkAcl#tags_all}.

---

### NetworkAclEgress <a name="NetworkAclEgress" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgress.Initializer"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

const networkAclEgress: networkAcl.NetworkAclEgress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#action NetworkAcl#action}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#cidr_block NetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#from_port NetworkAcl#from_port}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.icmpCode">icmpCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#icmp_code NetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.icmpType">icmpType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#icmp_type NetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#protocol NetworkAcl#protocol}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.ruleNo">ruleNo</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#rule_no NetworkAcl#rule_no}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#to_port NetworkAcl#to_port}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#action NetworkAcl#action}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#cidr_block NetworkAcl#cidr_block}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#from_port NetworkAcl#from_port}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#icmp_code NetworkAcl#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#icmp_type NetworkAcl#icmp_type}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#protocol NetworkAcl#protocol}.

---

##### `ruleNo`<sup>Optional</sup> <a name="ruleNo" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.ruleNo"></a>

```typescript
public readonly ruleNo: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#rule_no NetworkAcl#rule_no}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgress.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#to_port NetworkAcl#to_port}.

---

### NetworkAclIngress <a name="NetworkAclIngress" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngress.Initializer"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

const networkAclIngress: networkAcl.NetworkAclIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#action NetworkAcl#action}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#cidr_block NetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#from_port NetworkAcl#from_port}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.icmpCode">icmpCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#icmp_code NetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.icmpType">icmpType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#icmp_type NetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#protocol NetworkAcl#protocol}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.ruleNo">ruleNo</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#rule_no NetworkAcl#rule_no}. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#to_port NetworkAcl#to_port}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#action NetworkAcl#action}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#cidr_block NetworkAcl#cidr_block}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#from_port NetworkAcl#from_port}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#icmp_code NetworkAcl#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#icmp_type NetworkAcl#icmp_type}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#protocol NetworkAcl#protocol}.

---

##### `ruleNo`<sup>Optional</sup> <a name="ruleNo" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.ruleNo"></a>

```typescript
public readonly ruleNo: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#rule_no NetworkAcl#rule_no}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngress.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/network_acl#to_port NetworkAcl#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkAclEgressList <a name="NetworkAclEgressList" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.Initializer"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

new networkAcl.NetworkAclEgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.get"></a>

```typescript
public get(index: number): NetworkAclEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress">NetworkAclEgress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkAclEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress">NetworkAclEgress</a>[]

---


### NetworkAclEgressOutputReference <a name="NetworkAclEgressOutputReference" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.Initializer"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

new networkAcl.NetworkAclEgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetRuleNo">resetRuleNo</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetIcmpCode"></a>

```typescript
public resetIcmpCode(): void
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetIcmpType"></a>

```typescript
public resetIcmpType(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRuleNo` <a name="resetRuleNo" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetRuleNo"></a>

```typescript
public resetRuleNo(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.ruleNoInput">ruleNoInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.icmpCode">icmpCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.icmpType">icmpType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.ruleNo">ruleNo</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress">NetworkAclEgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.icmpCodeInput"></a>

```typescript
public readonly icmpCodeInput: number;
```

- *Type:* number

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.icmpTypeInput"></a>

```typescript
public readonly icmpTypeInput: number;
```

- *Type:* number

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `ruleNoInput`<sup>Optional</sup> <a name="ruleNoInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.ruleNoInput"></a>

```typescript
public readonly ruleNoInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `ruleNo`<sup>Required</sup> <a name="ruleNo" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.ruleNo"></a>

```typescript
public readonly ruleNo: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.networkAcl.NetworkAclEgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkAclEgress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclEgress">NetworkAclEgress</a>

---


### NetworkAclIngressList <a name="NetworkAclIngressList" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.Initializer"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

new networkAcl.NetworkAclIngressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.get"></a>

```typescript
public get(index: number): NetworkAclIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress">NetworkAclIngress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkAclIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress">NetworkAclIngress</a>[]

---


### NetworkAclIngressOutputReference <a name="NetworkAclIngressOutputReference" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.Initializer"></a>

```typescript
import { networkAcl } from '@cdktf/aws-cdk'

new networkAcl.NetworkAclIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetRuleNo">resetRuleNo</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetIcmpCode"></a>

```typescript
public resetIcmpCode(): void
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetIcmpType"></a>

```typescript
public resetIcmpType(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRuleNo` <a name="resetRuleNo" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetRuleNo"></a>

```typescript
public resetRuleNo(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.ruleNoInput">ruleNoInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.icmpCode">icmpCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.icmpType">icmpType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.ruleNo">ruleNo</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress">NetworkAclIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.icmpCodeInput"></a>

```typescript
public readonly icmpCodeInput: number;
```

- *Type:* number

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.icmpTypeInput"></a>

```typescript
public readonly icmpTypeInput: number;
```

- *Type:* number

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `ruleNoInput`<sup>Optional</sup> <a name="ruleNoInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.ruleNoInput"></a>

```typescript
public readonly ruleNoInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `ruleNo`<sup>Required</sup> <a name="ruleNo" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.ruleNo"></a>

```typescript
public readonly ruleNo: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.networkAcl.NetworkAclIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkAclIngress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.networkAcl.NetworkAclIngress">NetworkAclIngress</a>

---



