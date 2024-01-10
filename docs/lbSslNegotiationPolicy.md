# `lbSslNegotiationPolicy` Submodule <a name="`lbSslNegotiationPolicy` Submodule" id="@cdktf/aws-cdk.lbSslNegotiationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbSslNegotiationPolicy <a name="LbSslNegotiationPolicy" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy aws_lb_ssl_negotiation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer"></a>

```typescript
import { lbSslNegotiationPolicy } from '@cdktf/aws-cdk'

new lbSslNegotiationPolicy.LbSslNegotiationPolicy(scope: Construct, id: string, config: LbSslNegotiationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig">LbSslNegotiationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig">LbSslNegotiationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute">putAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttribute` <a name="putAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute"></a>

```typescript
public putAttribute(value: IResolvable | LbSslNegotiationPolicyAttribute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.putAttribute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]

---

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbSslNegotiationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct"></a>

```typescript
import { lbSslNegotiationPolicy } from '@cdktf/aws-cdk'

lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement"></a>

```typescript
import { lbSslNegotiationPolicy } from '@cdktf/aws-cdk'

lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource"></a>

```typescript
import { lbSslNegotiationPolicy } from '@cdktf/aws-cdk'

lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport"></a>

```typescript
import { lbSslNegotiationPolicy } from '@cdktf/aws-cdk'

lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbSslNegotiationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbSslNegotiationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbSslNegotiationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbSslNegotiationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attribute">attribute</a></code> | <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList">LbSslNegotiationPolicyAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attributeInput">attributeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPortInput">lbPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancerInput">loadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPort">lbPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancer">loadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attribute"></a>

```typescript
public readonly attribute: LbSslNegotiationPolicyAttributeList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList">LbSslNegotiationPolicyAttributeList</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.attributeInput"></a>

```typescript
public readonly attributeInput: IResolvable | LbSslNegotiationPolicyAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lbPortInput`<sup>Optional</sup> <a name="lbPortInput" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPortInput"></a>

```typescript
public readonly lbPortInput: number;
```

- *Type:* number

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lbPort`<sup>Required</sup> <a name="lbPort" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.lbPort"></a>

```typescript
public readonly lbPort: number;
```

- *Type:* number

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbSslNegotiationPolicyAttribute <a name="LbSslNegotiationPolicyAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.Initializer"></a>

```typescript
import { lbSslNegotiationPolicy } from '@cdktf/aws-cdk'

const lbSslNegotiationPolicyAttribute: lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#value LbSslNegotiationPolicy#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#value LbSslNegotiationPolicy#value}.

---

### LbSslNegotiationPolicyConfig <a name="LbSslNegotiationPolicyConfig" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.Initializer"></a>

```typescript
import { lbSslNegotiationPolicy } from '@cdktf/aws-cdk'

const lbSslNegotiationPolicyConfig: lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lbPort">lbPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#lb_port LbSslNegotiationPolicy#lb_port}. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.loadBalancer">loadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#load_balancer LbSslNegotiationPolicy#load_balancer}. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.attribute">attribute</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]</code> | attribute block. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#id LbSslNegotiationPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lbPort`<sup>Required</sup> <a name="lbPort" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.lbPort"></a>

```typescript
public readonly lbPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#lb_port LbSslNegotiationPolicy#lb_port}.

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#load_balancer LbSslNegotiationPolicy#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.attribute"></a>

```typescript
public readonly attribute: IResolvable | LbSslNegotiationPolicyAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]

attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#attribute LbSslNegotiationPolicy#attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lb_ssl_negotiation_policy#id LbSslNegotiationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### LbSslNegotiationPolicyAttributeList <a name="LbSslNegotiationPolicyAttributeList" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer"></a>

```typescript
import { lbSslNegotiationPolicy } from '@cdktf/aws-cdk'

new lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get"></a>

```typescript
public get(index: number): LbSslNegotiationPolicyAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbSslNegotiationPolicyAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>[]

---


### LbSslNegotiationPolicyAttributeOutputReference <a name="LbSslNegotiationPolicyAttributeOutputReference" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer"></a>

```typescript
import { lbSslNegotiationPolicy } from '@cdktf/aws-cdk'

new lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbSslNegotiationPolicyAttribute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lbSslNegotiationPolicy.LbSslNegotiationPolicyAttribute">LbSslNegotiationPolicyAttribute</a>

---



