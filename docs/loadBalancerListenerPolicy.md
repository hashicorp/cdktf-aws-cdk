# `loadBalancerListenerPolicy` Submodule <a name="`loadBalancerListenerPolicy` Submodule" id="@cdktf/aws-cdk.loadBalancerListenerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerListenerPolicy <a name="LoadBalancerListenerPolicy" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/load_balancer_listener_policy aws_load_balancer_listener_policy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer"></a>

```typescript
import { loadBalancerListenerPolicy } from '@cdktf/aws-cdk'

new loadBalancerListenerPolicy.LoadBalancerListenerPolicy(scope: Construct, id: string, config: LoadBalancerListenerPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig">LoadBalancerListenerPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig">LoadBalancerListenerPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetPolicyNames">resetPolicyNames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyNames` <a name="resetPolicyNames" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.resetPolicyNames"></a>

```typescript
public resetPolicyNames(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerListenerPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct"></a>

```typescript
import { loadBalancerListenerPolicy } from '@cdktf/aws-cdk'

loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement"></a>

```typescript
import { loadBalancerListenerPolicy } from '@cdktf/aws-cdk'

loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource"></a>

```typescript
import { loadBalancerListenerPolicy } from '@cdktf/aws-cdk'

loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.generateConfigForImport"></a>

```typescript
import { loadBalancerListenerPolicy } from '@cdktf/aws-cdk'

loadBalancerListenerPolicy.LoadBalancerListenerPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadBalancerListenerPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerListenerPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerListenerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/load_balancer_listener_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerListenerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerNameInput">loadBalancerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPortInput">loadBalancerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNamesInput">policyNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPort">loadBalancerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNames">policyNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerNameInput`<sup>Optional</sup> <a name="loadBalancerNameInput" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerNameInput"></a>

```typescript
public readonly loadBalancerNameInput: string;
```

- *Type:* string

---

##### `loadBalancerPortInput`<sup>Optional</sup> <a name="loadBalancerPortInput" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPortInput"></a>

```typescript
public readonly loadBalancerPortInput: number;
```

- *Type:* number

---

##### `policyNamesInput`<sup>Optional</sup> <a name="policyNamesInput" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNamesInput"></a>

```typescript
public readonly policyNamesInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

---

##### `loadBalancerPort`<sup>Required</sup> <a name="loadBalancerPort" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.loadBalancerPort"></a>

```typescript
public readonly loadBalancerPort: number;
```

- *Type:* number

---

##### `policyNames`<sup>Required</sup> <a name="policyNames" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.policyNames"></a>

```typescript
public readonly policyNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerListenerPolicyConfig <a name="LoadBalancerListenerPolicyConfig" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.Initializer"></a>

```typescript
import { loadBalancerListenerPolicy } from '@cdktf/aws-cdk'

const loadBalancerListenerPolicyConfig: loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerPort">loadBalancerPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}. |
| <code><a href="#@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.policyNames">policyNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/load_balancer_listener_policy#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}.

---

##### `loadBalancerPort`<sup>Required</sup> <a name="loadBalancerPort" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.loadBalancerPort"></a>

```typescript
public readonly loadBalancerPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/load_balancer_listener_policy#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/load_balancer_listener_policy#id LoadBalancerListenerPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyNames`<sup>Optional</sup> <a name="policyNames" id="@cdktf/aws-cdk.loadBalancerListenerPolicy.LoadBalancerListenerPolicyConfig.property.policyNames"></a>

```typescript
public readonly policyNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/load_balancer_listener_policy#policy_names LoadBalancerListenerPolicy#policy_names}.

---



