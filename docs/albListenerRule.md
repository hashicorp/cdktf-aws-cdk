# `albListenerRule` Submodule <a name="`albListenerRule` Submodule" id="@cdktf/aws-cdk.albListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlbListenerRule <a name="AlbListenerRule" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule aws_alb_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRule(scope: Construct, id: string, config: AlbListenerRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig">AlbListenerRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig">AlbListenerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.putAction"></a>

```typescript
public putAction(value: IResolvable | AlbListenerRuleAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction">AlbListenerRuleAction</a>[]

---

##### `putCondition` <a name="putCondition" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.putCondition"></a>

```typescript
public putCondition(value: IResolvable | AlbListenerRuleCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition">AlbListenerRuleCondition</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AlbListenerRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.isConstruct"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

albListenerRule.AlbListenerRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.isTerraformElement"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

albListenerRule.AlbListenerRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.isTerraformResource"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

albListenerRule.AlbListenerRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.generateConfigForImport"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

albListenerRule.AlbListenerRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AlbListenerRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AlbListenerRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AlbListenerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlbListenerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.action">action</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList">AlbListenerRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.condition">condition</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList">AlbListenerRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction">AlbListenerRuleAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition">AlbListenerRuleCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.listenerArnInput">listenerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.listenerArn">listenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.action"></a>

```typescript
public readonly action: AlbListenerRuleActionList;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList">AlbListenerRuleActionList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.condition"></a>

```typescript
public readonly condition: AlbListenerRuleConditionList;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList">AlbListenerRuleConditionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | AlbListenerRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction">AlbListenerRuleAction</a>[]

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | AlbListenerRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition">AlbListenerRuleCondition</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listenerArnInput`<sup>Optional</sup> <a name="listenerArnInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.listenerArnInput"></a>

```typescript
public readonly listenerArnInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlbListenerRuleAction <a name="AlbListenerRuleAction" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleAction: albListenerRule.AlbListenerRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#type AlbListenerRule#type}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.authenticateCognito">authenticateCognito</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a></code> | authenticate_cognito block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.authenticateOidc">authenticateOidc</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a></code> | authenticate_oidc block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.forward">forward</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a></code> | forward block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#order AlbListenerRule#order}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.redirect">redirect</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#target_group_arn AlbListenerRule#target_group_arn}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#type AlbListenerRule#type}.

---

##### `authenticateCognito`<sup>Optional</sup> <a name="authenticateCognito" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.authenticateCognito"></a>

```typescript
public readonly authenticateCognito: AlbListenerRuleActionAuthenticateCognito;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a>

authenticate_cognito block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#authenticate_cognito AlbListenerRule#authenticate_cognito}

---

##### `authenticateOidc`<sup>Optional</sup> <a name="authenticateOidc" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.authenticateOidc"></a>

```typescript
public readonly authenticateOidc: AlbListenerRuleActionAuthenticateOidc;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a>

authenticate_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#authenticate_oidc AlbListenerRule#authenticate_oidc}

---

##### `fixedResponse`<sup>Optional</sup> <a name="fixedResponse" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: AlbListenerRuleActionFixedResponse;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#fixed_response AlbListenerRule#fixed_response}

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.forward"></a>

```typescript
public readonly forward: AlbListenerRuleActionForward;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#forward AlbListenerRule#forward}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#order AlbListenerRule#order}.

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.redirect"></a>

```typescript
public readonly redirect: AlbListenerRuleActionRedirect;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#redirect AlbListenerRule#redirect}

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#target_group_arn AlbListenerRule#target_group_arn}.

---

### AlbListenerRuleActionAuthenticateCognito <a name="AlbListenerRuleActionAuthenticateCognito" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleActionAuthenticateCognito: albListenerRule.AlbListenerRuleActionAuthenticateCognito = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#user_pool_arn AlbListenerRule#user_pool_arn}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#user_pool_client_id AlbListenerRule#user_pool_client_id}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#user_pool_domain AlbListenerRule#user_pool_domain}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#scope AlbListenerRule#scope}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#session_cookie_name AlbListenerRule#session_cookie_name}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#session_timeout AlbListenerRule#session_timeout}. |

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#user_pool_arn AlbListenerRule#user_pool_arn}.

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#user_pool_client_id AlbListenerRule#user_pool_client_id}.

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#user_pool_domain AlbListenerRule#user_pool_domain}.

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}.

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#scope AlbListenerRule#scope}.

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#session_cookie_name AlbListenerRule#session_cookie_name}.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#session_timeout AlbListenerRule#session_timeout}.

---

### AlbListenerRuleActionAuthenticateOidc <a name="AlbListenerRuleActionAuthenticateOidc" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleActionAuthenticateOidc: albListenerRule.AlbListenerRuleActionAuthenticateOidc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#authorization_endpoint AlbListenerRule#authorization_endpoint}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#client_id AlbListenerRule#client_id}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#client_secret AlbListenerRule#client_secret}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#issuer AlbListenerRule#issuer}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#token_endpoint AlbListenerRule#token_endpoint}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#user_info_endpoint AlbListenerRule#user_info_endpoint}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#scope AlbListenerRule#scope}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#session_cookie_name AlbListenerRule#session_cookie_name}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#session_timeout AlbListenerRule#session_timeout}. |

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#authorization_endpoint AlbListenerRule#authorization_endpoint}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#client_id AlbListenerRule#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#client_secret AlbListenerRule#client_secret}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#issuer AlbListenerRule#issuer}.

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#token_endpoint AlbListenerRule#token_endpoint}.

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#user_info_endpoint AlbListenerRule#user_info_endpoint}.

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}.

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#scope AlbListenerRule#scope}.

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#session_cookie_name AlbListenerRule#session_cookie_name}.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#session_timeout AlbListenerRule#session_timeout}.

---

### AlbListenerRuleActionFixedResponse <a name="AlbListenerRuleActionFixedResponse" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleActionFixedResponse: albListenerRule.AlbListenerRuleActionFixedResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#content_type AlbListenerRule#content_type}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse.property.messageBody">messageBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#message_body AlbListenerRule#message_body}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#status_code AlbListenerRule#status_code}. |

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#content_type AlbListenerRule#content_type}.

---

##### `messageBody`<sup>Optional</sup> <a name="messageBody" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#message_body AlbListenerRule#message_body}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#status_code AlbListenerRule#status_code}.

---

### AlbListenerRuleActionForward <a name="AlbListenerRuleActionForward" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleActionForward: albListenerRule.AlbListenerRuleActionForward = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward.property.targetGroup">targetGroup</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup">AlbListenerRuleActionForwardTargetGroup</a>[]</code> | target_group block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a></code> | stickiness block. |

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward.property.targetGroup"></a>

```typescript
public readonly targetGroup: IResolvable | AlbListenerRuleActionForwardTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup">AlbListenerRuleActionForwardTargetGroup</a>[]

target_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#target_group AlbListenerRule#target_group}

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward.property.stickiness"></a>

```typescript
public readonly stickiness: AlbListenerRuleActionForwardStickiness;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#stickiness AlbListenerRule#stickiness}

---

### AlbListenerRuleActionForwardStickiness <a name="AlbListenerRuleActionForwardStickiness" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleActionForwardStickiness: albListenerRule.AlbListenerRuleActionForwardStickiness = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness.property.duration">duration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#duration AlbListenerRule#duration}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#enabled AlbListenerRule#enabled}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#duration AlbListenerRule#duration}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#enabled AlbListenerRule#enabled}.

---

### AlbListenerRuleActionForwardTargetGroup <a name="AlbListenerRuleActionForwardTargetGroup" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleActionForwardTargetGroup: albListenerRule.AlbListenerRuleActionForwardTargetGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#arn AlbListenerRule#arn}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#weight AlbListenerRule#weight}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#arn AlbListenerRule#arn}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#weight AlbListenerRule#weight}.

---

### AlbListenerRuleActionRedirect <a name="AlbListenerRuleActionRedirect" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleActionRedirect: albListenerRule.AlbListenerRuleActionRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#status_code AlbListenerRule#status_code}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#host AlbListenerRule#host}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#path AlbListenerRule#path}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.port">port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#port AlbListenerRule#port}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#protocol AlbListenerRule#protocol}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#query AlbListenerRule#query}. |

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#status_code AlbListenerRule#status_code}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#host AlbListenerRule#host}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#path AlbListenerRule#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#port AlbListenerRule#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#protocol AlbListenerRule#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#query AlbListenerRule#query}.

---

### AlbListenerRuleCondition <a name="AlbListenerRuleCondition" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleCondition: albListenerRule.AlbListenerRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.hostHeader">hostHeader</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a></code> | host_header block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.httpHeader">httpHeader</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a></code> | http_header block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.httpRequestMethod">httpRequestMethod</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a></code> | http_request_method block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.pathPattern">pathPattern</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a></code> | path_pattern block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.queryString">queryString</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString">AlbListenerRuleConditionQueryString</a>[]</code> | query_string block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.sourceIp">sourceIp</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a></code> | source_ip block. |

---

##### `hostHeader`<sup>Optional</sup> <a name="hostHeader" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.hostHeader"></a>

```typescript
public readonly hostHeader: AlbListenerRuleConditionHostHeader;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a>

host_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#host_header AlbListenerRule#host_header}

---

##### `httpHeader`<sup>Optional</sup> <a name="httpHeader" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.httpHeader"></a>

```typescript
public readonly httpHeader: AlbListenerRuleConditionHttpHeader;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a>

http_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#http_header AlbListenerRule#http_header}

---

##### `httpRequestMethod`<sup>Optional</sup> <a name="httpRequestMethod" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.httpRequestMethod"></a>

```typescript
public readonly httpRequestMethod: AlbListenerRuleConditionHttpRequestMethod;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a>

http_request_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#http_request_method AlbListenerRule#http_request_method}

---

##### `pathPattern`<sup>Optional</sup> <a name="pathPattern" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.pathPattern"></a>

```typescript
public readonly pathPattern: AlbListenerRuleConditionPathPattern;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a>

path_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#path_pattern AlbListenerRule#path_pattern}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.queryString"></a>

```typescript
public readonly queryString: IResolvable | AlbListenerRuleConditionQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString">AlbListenerRuleConditionQueryString</a>[]

query_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#query_string AlbListenerRule#query_string}

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition.property.sourceIp"></a>

```typescript
public readonly sourceIp: AlbListenerRuleConditionSourceIp;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a>

source_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#source_ip AlbListenerRule#source_ip}

---

### AlbListenerRuleConditionHostHeader <a name="AlbListenerRuleConditionHostHeader" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeader.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleConditionHostHeader: albListenerRule.AlbListenerRuleConditionHostHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeader.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#values AlbListenerRule#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeader.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#values AlbListenerRule#values}.

---

### AlbListenerRuleConditionHttpHeader <a name="AlbListenerRuleConditionHttpHeader" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleConditionHttpHeader: albListenerRule.AlbListenerRuleConditionHttpHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader.property.httpHeaderName">httpHeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#http_header_name AlbListenerRule#http_header_name}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#values AlbListenerRule#values}. |

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader.property.httpHeaderName"></a>

```typescript
public readonly httpHeaderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#http_header_name AlbListenerRule#http_header_name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#values AlbListenerRule#values}.

---

### AlbListenerRuleConditionHttpRequestMethod <a name="AlbListenerRuleConditionHttpRequestMethod" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethod.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleConditionHttpRequestMethod: albListenerRule.AlbListenerRuleConditionHttpRequestMethod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethod.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#values AlbListenerRule#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethod.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#values AlbListenerRule#values}.

---

### AlbListenerRuleConditionPathPattern <a name="AlbListenerRuleConditionPathPattern" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPattern.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleConditionPathPattern: albListenerRule.AlbListenerRuleConditionPathPattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPattern.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#values AlbListenerRule#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPattern.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#values AlbListenerRule#values}.

---

### AlbListenerRuleConditionQueryString <a name="AlbListenerRuleConditionQueryString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleConditionQueryString: albListenerRule.AlbListenerRuleConditionQueryString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#value AlbListenerRule#value}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#key AlbListenerRule#key}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#value AlbListenerRule#value}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#key AlbListenerRule#key}.

---

### AlbListenerRuleConditionSourceIp <a name="AlbListenerRuleConditionSourceIp" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIp.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleConditionSourceIp: albListenerRule.AlbListenerRuleConditionSourceIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIp.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#values AlbListenerRule#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIp.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#values AlbListenerRule#values}.

---

### AlbListenerRuleConfig <a name="AlbListenerRuleConfig" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

const albListenerRuleConfig: albListenerRule.AlbListenerRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction">AlbListenerRuleAction</a>[]</code> | action block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition">AlbListenerRuleCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.listenerArn">listenerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#listener_arn AlbListenerRule#listener_arn}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#id AlbListenerRule#id}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#priority AlbListenerRule#priority}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#tags AlbListenerRule#tags}. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#tags_all AlbListenerRule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.action"></a>

```typescript
public readonly action: IResolvable | AlbListenerRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction">AlbListenerRuleAction</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#action AlbListenerRule#action}

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.condition"></a>

```typescript
public readonly condition: IResolvable | AlbListenerRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition">AlbListenerRuleCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#condition AlbListenerRule#condition}

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#listener_arn AlbListenerRule#listener_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#id AlbListenerRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#priority AlbListenerRule#priority}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#tags AlbListenerRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb_listener_rule#tags_all AlbListenerRule#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbListenerRuleActionAuthenticateCognitoOutputReference <a name="AlbListenerRuleActionAuthenticateCognitoOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams"></a>

```typescript
public resetAuthenticationRequestExtraParams(): void
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest"></a>

```typescript
public resetOnUnauthenticatedRequest(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionCookieName"></a>

```typescript
public resetSessionCookieName(): void
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionTimeout"></a>

```typescript
public resetSessionTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArnInput">userPoolArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput">userPoolClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomainInput">userPoolDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput"></a>

```typescript
public readonly authenticationRequestExtraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput"></a>

```typescript
public readonly onUnauthenticatedRequestInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput"></a>

```typescript
public readonly sessionCookieNameInput: string;
```

- *Type:* string

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput"></a>

```typescript
public readonly sessionTimeoutInput: number;
```

- *Type:* number

---

##### `userPoolArnInput`<sup>Optional</sup> <a name="userPoolArnInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArnInput"></a>

```typescript
public readonly userPoolArnInput: string;
```

- *Type:* string

---

##### `userPoolClientIdInput`<sup>Optional</sup> <a name="userPoolClientIdInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput"></a>

```typescript
public readonly userPoolClientIdInput: string;
```

- *Type:* string

---

##### `userPoolDomainInput`<sup>Optional</sup> <a name="userPoolDomainInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomainInput"></a>

```typescript
public readonly userPoolDomainInput: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbListenerRuleActionAuthenticateCognito;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a>

---


### AlbListenerRuleActionAuthenticateOidcOutputReference <a name="AlbListenerRuleActionAuthenticateOidcOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams"></a>

```typescript
public resetAuthenticationRequestExtraParams(): void
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest"></a>

```typescript
public resetOnUnauthenticatedRequest(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetSessionCookieName"></a>

```typescript
public resetSessionCookieName(): void
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetSessionTimeout"></a>

```typescript
public resetSessionTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput"></a>

```typescript
public readonly authenticationRequestExtraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput"></a>

```typescript
public readonly onUnauthenticatedRequestInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieNameInput"></a>

```typescript
public readonly sessionCookieNameInput: string;
```

- *Type:* string

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeoutInput"></a>

```typescript
public readonly sessionTimeoutInput: number;
```

- *Type:* number

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpointInput"></a>

```typescript
public readonly userInfoEndpointInput: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbListenerRuleActionAuthenticateOidc;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a>

---


### AlbListenerRuleActionFixedResponseOutputReference <a name="AlbListenerRuleActionFixedResponseOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleActionFixedResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resetMessageBody">resetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageBody` <a name="resetMessageBody" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resetMessageBody"></a>

```typescript
public resetMessageBody(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.messageBodyInput">messageBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.messageBody">messageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `messageBodyInput`<sup>Optional</sup> <a name="messageBodyInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.messageBodyInput"></a>

```typescript
public readonly messageBodyInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbListenerRuleActionFixedResponse;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a>

---


### AlbListenerRuleActionForwardOutputReference <a name="AlbListenerRuleActionForwardOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleActionForwardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.putStickiness">putStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.putTargetGroup">putTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.resetStickiness">resetStickiness</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStickiness` <a name="putStickiness" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.putStickiness"></a>

```typescript
public putStickiness(value: AlbListenerRuleActionForwardStickiness): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a>

---

##### `putTargetGroup` <a name="putTargetGroup" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.putTargetGroup"></a>

```typescript
public putTargetGroup(value: IResolvable | AlbListenerRuleActionForwardTargetGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup">AlbListenerRuleActionForwardTargetGroup</a>[]

---

##### `resetStickiness` <a name="resetStickiness" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.resetStickiness"></a>

```typescript
public resetStickiness(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference">AlbListenerRuleActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.targetGroup">targetGroup</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList">AlbListenerRuleActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.stickinessInput">stickinessInput</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.targetGroupInput">targetGroupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup">AlbListenerRuleActionForwardTargetGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.stickiness"></a>

```typescript
public readonly stickiness: AlbListenerRuleActionForwardStickinessOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference">AlbListenerRuleActionForwardStickinessOutputReference</a>

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.targetGroup"></a>

```typescript
public readonly targetGroup: AlbListenerRuleActionForwardTargetGroupList;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList">AlbListenerRuleActionForwardTargetGroupList</a>

---

##### `stickinessInput`<sup>Optional</sup> <a name="stickinessInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.stickinessInput"></a>

```typescript
public readonly stickinessInput: AlbListenerRuleActionForwardStickiness;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a>

---

##### `targetGroupInput`<sup>Optional</sup> <a name="targetGroupInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.targetGroupInput"></a>

```typescript
public readonly targetGroupInput: IResolvable | AlbListenerRuleActionForwardTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup">AlbListenerRuleActionForwardTargetGroup</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbListenerRuleActionForward;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a>

---


### AlbListenerRuleActionForwardStickinessOutputReference <a name="AlbListenerRuleActionForwardStickinessOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbListenerRuleActionForwardStickiness;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a>

---


### AlbListenerRuleActionForwardTargetGroupList <a name="AlbListenerRuleActionForwardTargetGroupList" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleActionForwardTargetGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.get"></a>

```typescript
public get(index: number): AlbListenerRuleActionForwardTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup">AlbListenerRuleActionForwardTargetGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbListenerRuleActionForwardTargetGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup">AlbListenerRuleActionForwardTargetGroup</a>[]

---


### AlbListenerRuleActionForwardTargetGroupOutputReference <a name="AlbListenerRuleActionForwardTargetGroupOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeight` <a name="resetWeight" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup">AlbListenerRuleActionForwardTargetGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbListenerRuleActionForwardTargetGroup;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardTargetGroup">AlbListenerRuleActionForwardTargetGroup</a>

---


### AlbListenerRuleActionList <a name="AlbListenerRuleActionList" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.get"></a>

```typescript
public get(index: number): AlbListenerRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction">AlbListenerRuleAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbListenerRuleAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction">AlbListenerRuleAction</a>[]

---


### AlbListenerRuleActionOutputReference <a name="AlbListenerRuleActionOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateCognito">putAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateOidc">putAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putFixedResponse">putFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putForward">putForward</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetAuthenticateCognito">resetAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetAuthenticateOidc">resetAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetFixedResponse">resetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetForward">resetForward</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetRedirect">resetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticateCognito` <a name="putAuthenticateCognito" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateCognito"></a>

```typescript
public putAuthenticateCognito(value: AlbListenerRuleActionAuthenticateCognito): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a>

---

##### `putAuthenticateOidc` <a name="putAuthenticateOidc" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateOidc"></a>

```typescript
public putAuthenticateOidc(value: AlbListenerRuleActionAuthenticateOidc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a>

---

##### `putFixedResponse` <a name="putFixedResponse" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putFixedResponse"></a>

```typescript
public putFixedResponse(value: AlbListenerRuleActionFixedResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a>

---

##### `putForward` <a name="putForward" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putForward"></a>

```typescript
public putForward(value: AlbListenerRuleActionForward): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a>

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putRedirect"></a>

```typescript
public putRedirect(value: AlbListenerRuleActionRedirect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a>

---

##### `resetAuthenticateCognito` <a name="resetAuthenticateCognito" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetAuthenticateCognito"></a>

```typescript
public resetAuthenticateCognito(): void
```

##### `resetAuthenticateOidc` <a name="resetAuthenticateOidc" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetAuthenticateOidc"></a>

```typescript
public resetAuthenticateOidc(): void
```

##### `resetFixedResponse` <a name="resetFixedResponse" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetFixedResponse"></a>

```typescript
public resetFixedResponse(): void
```

##### `resetForward` <a name="resetForward" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetForward"></a>

```typescript
public resetForward(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetRedirect"></a>

```typescript
public resetRedirect(): void
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.resetTargetGroupArn"></a>

```typescript
public resetTargetGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateCognito">authenticateCognito</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference">AlbListenerRuleActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateOidc">authenticateOidc</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference">AlbListenerRuleActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference">AlbListenerRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference">AlbListenerRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference">AlbListenerRuleActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateCognitoInput">authenticateCognitoInput</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateOidcInput">authenticateOidcInput</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.fixedResponseInput">fixedResponseInput</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.forwardInput">forwardInput</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.redirectInput">redirectInput</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction">AlbListenerRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticateCognito`<sup>Required</sup> <a name="authenticateCognito" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateCognito"></a>

```typescript
public readonly authenticateCognito: AlbListenerRuleActionAuthenticateCognitoOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference">AlbListenerRuleActionAuthenticateCognitoOutputReference</a>

---

##### `authenticateOidc`<sup>Required</sup> <a name="authenticateOidc" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateOidc"></a>

```typescript
public readonly authenticateOidc: AlbListenerRuleActionAuthenticateOidcOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference">AlbListenerRuleActionAuthenticateOidcOutputReference</a>

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.fixedResponse"></a>

```typescript
public readonly fixedResponse: AlbListenerRuleActionFixedResponseOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference">AlbListenerRuleActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.forward"></a>

```typescript
public readonly forward: AlbListenerRuleActionForwardOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForwardOutputReference">AlbListenerRuleActionForwardOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.redirect"></a>

```typescript
public readonly redirect: AlbListenerRuleActionRedirectOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference">AlbListenerRuleActionRedirectOutputReference</a>

---

##### `authenticateCognitoInput`<sup>Optional</sup> <a name="authenticateCognitoInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateCognitoInput"></a>

```typescript
public readonly authenticateCognitoInput: AlbListenerRuleActionAuthenticateCognito;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a>

---

##### `authenticateOidcInput`<sup>Optional</sup> <a name="authenticateOidcInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateOidcInput"></a>

```typescript
public readonly authenticateOidcInput: AlbListenerRuleActionAuthenticateOidc;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a>

---

##### `fixedResponseInput`<sup>Optional</sup> <a name="fixedResponseInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.fixedResponseInput"></a>

```typescript
public readonly fixedResponseInput: AlbListenerRuleActionFixedResponse;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a>

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.forwardInput"></a>

```typescript
public readonly forwardInput: AlbListenerRuleActionForward;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.redirectInput"></a>

```typescript
public readonly redirectInput: AlbListenerRuleActionRedirect;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a>

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.targetGroupArnInput"></a>

```typescript
public readonly targetGroupArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbListenerRuleAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleAction">AlbListenerRuleAction</a>

---


### AlbListenerRuleActionRedirectOutputReference <a name="AlbListenerRuleActionRedirectOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleActionRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbListenerRuleActionRedirect;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a>

---


### AlbListenerRuleConditionHostHeaderOutputReference <a name="AlbListenerRuleConditionHostHeaderOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbListenerRuleConditionHostHeader;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a>

---


### AlbListenerRuleConditionHttpHeaderOutputReference <a name="AlbListenerRuleConditionHttpHeaderOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderNameInput">httpHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName">httpHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaderNameInput`<sup>Optional</sup> <a name="httpHeaderNameInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderNameInput"></a>

```typescript
public readonly httpHeaderNameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName"></a>

```typescript
public readonly httpHeaderName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbListenerRuleConditionHttpHeader;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a>

---


### AlbListenerRuleConditionHttpRequestMethodOutputReference <a name="AlbListenerRuleConditionHttpRequestMethodOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbListenerRuleConditionHttpRequestMethod;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a>

---


### AlbListenerRuleConditionList <a name="AlbListenerRuleConditionList" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.get"></a>

```typescript
public get(index: number): AlbListenerRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition">AlbListenerRuleCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbListenerRuleCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition">AlbListenerRuleCondition</a>[]

---


### AlbListenerRuleConditionOutputReference <a name="AlbListenerRuleConditionOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putHostHeader">putHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpHeader">putHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpRequestMethod">putHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putPathPattern">putPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putQueryString">putQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putSourceIp">putSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetHostHeader">resetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetHttpHeader">resetHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetHttpRequestMethod">resetHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetPathPattern">resetPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetSourceIp">resetSourceIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostHeader` <a name="putHostHeader" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putHostHeader"></a>

```typescript
public putHostHeader(value: AlbListenerRuleConditionHostHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putHostHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a>

---

##### `putHttpHeader` <a name="putHttpHeader" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpHeader"></a>

```typescript
public putHttpHeader(value: AlbListenerRuleConditionHttpHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a>

---

##### `putHttpRequestMethod` <a name="putHttpRequestMethod" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpRequestMethod"></a>

```typescript
public putHttpRequestMethod(value: AlbListenerRuleConditionHttpRequestMethod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpRequestMethod.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a>

---

##### `putPathPattern` <a name="putPathPattern" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putPathPattern"></a>

```typescript
public putPathPattern(value: AlbListenerRuleConditionPathPattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putPathPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a>

---

##### `putQueryString` <a name="putQueryString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putQueryString"></a>

```typescript
public putQueryString(value: IResolvable | AlbListenerRuleConditionQueryString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putQueryString.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString">AlbListenerRuleConditionQueryString</a>[]

---

##### `putSourceIp` <a name="putSourceIp" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putSourceIp"></a>

```typescript
public putSourceIp(value: AlbListenerRuleConditionSourceIp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.putSourceIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a>

---

##### `resetHostHeader` <a name="resetHostHeader" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetHostHeader"></a>

```typescript
public resetHostHeader(): void
```

##### `resetHttpHeader` <a name="resetHttpHeader" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetHttpHeader"></a>

```typescript
public resetHttpHeader(): void
```

##### `resetHttpRequestMethod` <a name="resetHttpRequestMethod" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetHttpRequestMethod"></a>

```typescript
public resetHttpRequestMethod(): void
```

##### `resetPathPattern` <a name="resetPathPattern" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetPathPattern"></a>

```typescript
public resetPathPattern(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.resetSourceIp"></a>

```typescript
public resetSourceIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.hostHeader">hostHeader</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference">AlbListenerRuleConditionHostHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpHeader">httpHeader</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference">AlbListenerRuleConditionHttpHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpRequestMethod">httpRequestMethod</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference">AlbListenerRuleConditionHttpRequestMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.pathPattern">pathPattern</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference">AlbListenerRuleConditionPathPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList">AlbListenerRuleConditionQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.sourceIp">sourceIp</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference">AlbListenerRuleConditionSourceIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.hostHeaderInput">hostHeaderInput</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpHeaderInput">httpHeaderInput</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpRequestMethodInput">httpRequestMethodInput</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.pathPatternInput">pathPatternInput</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString">AlbListenerRuleConditionQueryString</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.sourceIpInput">sourceIpInput</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition">AlbListenerRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.hostHeader"></a>

```typescript
public readonly hostHeader: AlbListenerRuleConditionHostHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference">AlbListenerRuleConditionHostHeaderOutputReference</a>

---

##### `httpHeader`<sup>Required</sup> <a name="httpHeader" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpHeader"></a>

```typescript
public readonly httpHeader: AlbListenerRuleConditionHttpHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference">AlbListenerRuleConditionHttpHeaderOutputReference</a>

---

##### `httpRequestMethod`<sup>Required</sup> <a name="httpRequestMethod" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpRequestMethod"></a>

```typescript
public readonly httpRequestMethod: AlbListenerRuleConditionHttpRequestMethodOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference">AlbListenerRuleConditionHttpRequestMethodOutputReference</a>

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.pathPattern"></a>

```typescript
public readonly pathPattern: AlbListenerRuleConditionPathPatternOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference">AlbListenerRuleConditionPathPatternOutputReference</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.queryString"></a>

```typescript
public readonly queryString: AlbListenerRuleConditionQueryStringList;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList">AlbListenerRuleConditionQueryStringList</a>

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.sourceIp"></a>

```typescript
public readonly sourceIp: AlbListenerRuleConditionSourceIpOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference">AlbListenerRuleConditionSourceIpOutputReference</a>

---

##### `hostHeaderInput`<sup>Optional</sup> <a name="hostHeaderInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.hostHeaderInput"></a>

```typescript
public readonly hostHeaderInput: AlbListenerRuleConditionHostHeader;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a>

---

##### `httpHeaderInput`<sup>Optional</sup> <a name="httpHeaderInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpHeaderInput"></a>

```typescript
public readonly httpHeaderInput: AlbListenerRuleConditionHttpHeader;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a>

---

##### `httpRequestMethodInput`<sup>Optional</sup> <a name="httpRequestMethodInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpRequestMethodInput"></a>

```typescript
public readonly httpRequestMethodInput: AlbListenerRuleConditionHttpRequestMethod;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a>

---

##### `pathPatternInput`<sup>Optional</sup> <a name="pathPatternInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.pathPatternInput"></a>

```typescript
public readonly pathPatternInput: AlbListenerRuleConditionPathPattern;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: IResolvable | AlbListenerRuleConditionQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString">AlbListenerRuleConditionQueryString</a>[]

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.sourceIpInput"></a>

```typescript
public readonly sourceIpInput: AlbListenerRuleConditionSourceIp;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbListenerRuleCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleCondition">AlbListenerRuleCondition</a>

---


### AlbListenerRuleConditionPathPatternOutputReference <a name="AlbListenerRuleConditionPathPatternOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleConditionPathPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbListenerRuleConditionPathPattern;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a>

---


### AlbListenerRuleConditionQueryStringList <a name="AlbListenerRuleConditionQueryStringList" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleConditionQueryStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.get"></a>

```typescript
public get(index: number): AlbListenerRuleConditionQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString">AlbListenerRuleConditionQueryString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbListenerRuleConditionQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString">AlbListenerRuleConditionQueryString</a>[]

---


### AlbListenerRuleConditionQueryStringOutputReference <a name="AlbListenerRuleConditionQueryStringOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleConditionQueryStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString">AlbListenerRuleConditionQueryString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbListenerRuleConditionQueryString;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionQueryString">AlbListenerRuleConditionQueryString</a>

---


### AlbListenerRuleConditionSourceIpOutputReference <a name="AlbListenerRuleConditionSourceIpOutputReference" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.Initializer"></a>

```typescript
import { albListenerRule } from '@cdktf/aws-cdk'

new albListenerRule.AlbListenerRuleConditionSourceIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbListenerRuleConditionSourceIp;
```

- *Type:* <a href="#@cdktf/aws-cdk.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a>

---



