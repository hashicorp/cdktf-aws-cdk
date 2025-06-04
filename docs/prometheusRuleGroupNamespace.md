# `prometheusRuleGroupNamespace` Submodule <a name="`prometheusRuleGroupNamespace` Submodule" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusRuleGroupNamespace <a name="PrometheusRuleGroupNamespace" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_rule_group_namespace aws_prometheus_rule_group_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer"></a>

```typescript
import { prometheusRuleGroupNamespace } from '@cdktf/aws-cdk'

new prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace(scope: Construct, id: string, config: PrometheusRuleGroupNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig">PrometheusRuleGroupNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig">PrometheusRuleGroupNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrometheusRuleGroupNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isConstruct"></a>

```typescript
import { prometheusRuleGroupNamespace } from '@cdktf/aws-cdk'

prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformElement"></a>

```typescript
import { prometheusRuleGroupNamespace } from '@cdktf/aws-cdk'

prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformResource"></a>

```typescript
import { prometheusRuleGroupNamespace } from '@cdktf/aws-cdk'

prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.generateConfigForImport"></a>

```typescript
import { prometheusRuleGroupNamespace } from '@cdktf/aws-cdk'

prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrometheusRuleGroupNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrometheusRuleGroupNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrometheusRuleGroupNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_rule_group_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrometheusRuleGroupNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusRuleGroupNamespaceConfig <a name="PrometheusRuleGroupNamespaceConfig" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.Initializer"></a>

```typescript
import { prometheusRuleGroupNamespace } from '@cdktf/aws-cdk'

const prometheusRuleGroupNamespaceConfig: prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_rule_group_namespace#data PrometheusRuleGroupNamespace#data}. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_rule_group_namespace#name PrometheusRuleGroupNamespace#name}. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_rule_group_namespace#workspace_id PrometheusRuleGroupNamespace#workspace_id}. |
| <code><a href="#@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_rule_group_namespace#id PrometheusRuleGroupNamespace#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_rule_group_namespace#data PrometheusRuleGroupNamespace#data}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_rule_group_namespace#name PrometheusRuleGroupNamespace#name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_rule_group_namespace#workspace_id PrometheusRuleGroupNamespace#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_rule_group_namespace#id PrometheusRuleGroupNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



