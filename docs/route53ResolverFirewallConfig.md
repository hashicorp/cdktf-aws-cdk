# `route53ResolverFirewallConfig` Submodule <a name="`route53ResolverFirewallConfig` Submodule" id="@cdktf/aws-cdk.route53ResolverFirewallConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallConfig <a name="Route53ResolverFirewallConfig" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_config aws_route53_resolver_firewall_config}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.Initializer"></a>

```typescript
import { route53ResolverFirewallConfig } from '@cdktf/aws-cdk'

new route53ResolverFirewallConfig.Route53ResolverFirewallConfig(scope: Construct, id: string, config: Route53ResolverFirewallConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig">Route53ResolverFirewallConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig">Route53ResolverFirewallConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.resetFirewallFailOpen">resetFirewallFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetFirewallFailOpen` <a name="resetFirewallFailOpen" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.resetFirewallFailOpen"></a>

```typescript
public resetFirewallFailOpen(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53ResolverFirewallConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isConstruct"></a>

```typescript
import { route53ResolverFirewallConfig } from '@cdktf/aws-cdk'

route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isTerraformElement"></a>

```typescript
import { route53ResolverFirewallConfig } from '@cdktf/aws-cdk'

route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isTerraformResource"></a>

```typescript
import { route53ResolverFirewallConfig } from '@cdktf/aws-cdk'

route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.generateConfigForImport"></a>

```typescript
import { route53ResolverFirewallConfig } from '@cdktf/aws-cdk'

route53ResolverFirewallConfig.Route53ResolverFirewallConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Route53ResolverFirewallConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ResolverFirewallConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ResolverFirewallConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.firewallFailOpenInput">firewallFailOpenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.firewallFailOpen">firewallFailOpen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `firewallFailOpenInput`<sup>Optional</sup> <a name="firewallFailOpenInput" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.firewallFailOpenInput"></a>

```typescript
public readonly firewallFailOpenInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `firewallFailOpen`<sup>Required</sup> <a name="firewallFailOpen" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.firewallFailOpen"></a>

```typescript
public readonly firewallFailOpen: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallConfigConfig <a name="Route53ResolverFirewallConfigConfig" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.Initializer"></a>

```typescript
import { route53ResolverFirewallConfig } from '@cdktf/aws-cdk'

const route53ResolverFirewallConfigConfig: route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_config#resource_id Route53ResolverFirewallConfig#resource_id}. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.firewallFailOpen">firewallFailOpen</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_config#firewall_fail_open Route53ResolverFirewallConfig#firewall_fail_open}. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_config#id Route53ResolverFirewallConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_config#resource_id Route53ResolverFirewallConfig#resource_id}.

---

##### `firewallFailOpen`<sup>Optional</sup> <a name="firewallFailOpen" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.firewallFailOpen"></a>

```typescript
public readonly firewallFailOpen: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_config#firewall_fail_open Route53ResolverFirewallConfig#firewall_fail_open}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallConfig.Route53ResolverFirewallConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_config#id Route53ResolverFirewallConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



