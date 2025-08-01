# `route53ResolverFirewallRule` Submodule <a name="`route53ResolverFirewallRule` Submodule" id="@cdktf/aws-cdk.route53ResolverFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRule <a name="Route53ResolverFirewallRule" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule aws_route53_resolver_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer"></a>

```typescript
import { route53ResolverFirewallRule } from '@cdktf/aws-cdk'

new route53ResolverFirewallRule.Route53ResolverFirewallRule(scope: Construct, id: string, config: Route53ResolverFirewallRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig">Route53ResolverFirewallRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig">Route53ResolverFirewallRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDnsType">resetBlockOverrideDnsType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDomain">resetBlockOverrideDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideTtl">resetBlockOverrideTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockResponse">resetBlockResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBlockOverrideDnsType` <a name="resetBlockOverrideDnsType" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDnsType"></a>

```typescript
public resetBlockOverrideDnsType(): void
```

##### `resetBlockOverrideDomain` <a name="resetBlockOverrideDomain" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDomain"></a>

```typescript
public resetBlockOverrideDomain(): void
```

##### `resetBlockOverrideTtl` <a name="resetBlockOverrideTtl" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideTtl"></a>

```typescript
public resetBlockOverrideTtl(): void
```

##### `resetBlockResponse` <a name="resetBlockResponse" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockResponse"></a>

```typescript
public resetBlockResponse(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53ResolverFirewallRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct"></a>

```typescript
import { route53ResolverFirewallRule } from '@cdktf/aws-cdk'

route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement"></a>

```typescript
import { route53ResolverFirewallRule } from '@cdktf/aws-cdk'

route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource"></a>

```typescript
import { route53ResolverFirewallRule } from '@cdktf/aws-cdk'

route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport"></a>

```typescript
import { route53ResolverFirewallRule } from '@cdktf/aws-cdk'

route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Route53ResolverFirewallRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ResolverFirewallRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ResolverFirewallRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsTypeInput">blockOverrideDnsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomainInput">blockOverrideDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtlInput">blockOverrideTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponseInput">blockResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListIdInput">firewallDomainListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupIdInput">firewallRuleGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponse">blockResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListId">firewallDomainListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `blockOverrideDnsTypeInput`<sup>Optional</sup> <a name="blockOverrideDnsTypeInput" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsTypeInput"></a>

```typescript
public readonly blockOverrideDnsTypeInput: string;
```

- *Type:* string

---

##### `blockOverrideDomainInput`<sup>Optional</sup> <a name="blockOverrideDomainInput" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomainInput"></a>

```typescript
public readonly blockOverrideDomainInput: string;
```

- *Type:* string

---

##### `blockOverrideTtlInput`<sup>Optional</sup> <a name="blockOverrideTtlInput" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtlInput"></a>

```typescript
public readonly blockOverrideTtlInput: number;
```

- *Type:* number

---

##### `blockResponseInput`<sup>Optional</sup> <a name="blockResponseInput" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponseInput"></a>

```typescript
public readonly blockResponseInput: string;
```

- *Type:* string

---

##### `firewallDomainListIdInput`<sup>Optional</sup> <a name="firewallDomainListIdInput" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListIdInput"></a>

```typescript
public readonly firewallDomainListIdInput: string;
```

- *Type:* string

---

##### `firewallRuleGroupIdInput`<sup>Optional</sup> <a name="firewallRuleGroupIdInput" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupIdInput"></a>

```typescript
public readonly firewallRuleGroupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `blockOverrideDnsType`<sup>Required</sup> <a name="blockOverrideDnsType" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsType"></a>

```typescript
public readonly blockOverrideDnsType: string;
```

- *Type:* string

---

##### `blockOverrideDomain`<sup>Required</sup> <a name="blockOverrideDomain" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomain"></a>

```typescript
public readonly blockOverrideDomain: string;
```

- *Type:* string

---

##### `blockOverrideTtl`<sup>Required</sup> <a name="blockOverrideTtl" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtl"></a>

```typescript
public readonly blockOverrideTtl: number;
```

- *Type:* number

---

##### `blockResponse`<sup>Required</sup> <a name="blockResponse" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponse"></a>

```typescript
public readonly blockResponse: string;
```

- *Type:* string

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListId"></a>

```typescript
public readonly firewallDomainListId: string;
```

- *Type:* string

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupId"></a>

```typescript
public readonly firewallRuleGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleConfig <a name="Route53ResolverFirewallRuleConfig" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.Initializer"></a>

```typescript
import { route53ResolverFirewallRule } from '@cdktf/aws-cdk'

const route53ResolverFirewallRuleConfig: route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainListId">firewallDomainListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockResponse">blockResponse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}. |
| <code><a href="#@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}.

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainListId"></a>

```typescript
public readonly firewallDomainListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}.

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallRuleGroupId"></a>

```typescript
public readonly firewallRuleGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}.

---

##### `blockOverrideDnsType`<sup>Optional</sup> <a name="blockOverrideDnsType" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDnsType"></a>

```typescript
public readonly blockOverrideDnsType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}.

---

##### `blockOverrideDomain`<sup>Optional</sup> <a name="blockOverrideDomain" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDomain"></a>

```typescript
public readonly blockOverrideDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}.

---

##### `blockOverrideTtl`<sup>Optional</sup> <a name="blockOverrideTtl" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideTtl"></a>

```typescript
public readonly blockOverrideTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}.

---

##### `blockResponse`<sup>Optional</sup> <a name="blockResponse" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockResponse"></a>

```typescript
public readonly blockResponse: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



