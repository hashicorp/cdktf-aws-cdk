# `route53KeySigningKey` Submodule <a name="`route53KeySigningKey` Submodule" id="@cdktf/aws-cdk.route53KeySigningKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53KeySigningKey <a name="Route53KeySigningKey" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key aws_route53_key_signing_key}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.Initializer"></a>

```typescript
import { route53KeySigningKey } from '@cdktf/aws-cdk'

new route53KeySigningKey.Route53KeySigningKey(scope: Construct, id: string, config: Route53KeySigningKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig">Route53KeySigningKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig">Route53KeySigningKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Route53KeySigningKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.isConstruct"></a>

```typescript
import { route53KeySigningKey } from '@cdktf/aws-cdk'

route53KeySigningKey.Route53KeySigningKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.isTerraformElement"></a>

```typescript
import { route53KeySigningKey } from '@cdktf/aws-cdk'

route53KeySigningKey.Route53KeySigningKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.isTerraformResource"></a>

```typescript
import { route53KeySigningKey } from '@cdktf/aws-cdk'

route53KeySigningKey.Route53KeySigningKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport"></a>

```typescript
import { route53KeySigningKey } from '@cdktf/aws-cdk'

route53KeySigningKey.Route53KeySigningKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Route53KeySigningKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53KeySigningKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53KeySigningKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53KeySigningKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmMnemonic">digestAlgorithmMnemonic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmType">digestAlgorithmType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.digestValue">digestValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.dnskeyRecord">dnskeyRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.dsRecord">dsRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.flag">flag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.keyTag">keyTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmMnemonic">signingAlgorithmMnemonic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmType">signingAlgorithmType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArnInput">keyManagementServiceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArn">keyManagementServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `digestAlgorithmMnemonic`<sup>Required</sup> <a name="digestAlgorithmMnemonic" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmMnemonic"></a>

```typescript
public readonly digestAlgorithmMnemonic: string;
```

- *Type:* string

---

##### `digestAlgorithmType`<sup>Required</sup> <a name="digestAlgorithmType" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.digestAlgorithmType"></a>

```typescript
public readonly digestAlgorithmType: number;
```

- *Type:* number

---

##### `digestValue`<sup>Required</sup> <a name="digestValue" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.digestValue"></a>

```typescript
public readonly digestValue: string;
```

- *Type:* string

---

##### `dnskeyRecord`<sup>Required</sup> <a name="dnskeyRecord" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.dnskeyRecord"></a>

```typescript
public readonly dnskeyRecord: string;
```

- *Type:* string

---

##### `dsRecord`<sup>Required</sup> <a name="dsRecord" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.dsRecord"></a>

```typescript
public readonly dsRecord: string;
```

- *Type:* string

---

##### `flag`<sup>Required</sup> <a name="flag" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.flag"></a>

```typescript
public readonly flag: number;
```

- *Type:* number

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `signingAlgorithmMnemonic`<sup>Required</sup> <a name="signingAlgorithmMnemonic" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmMnemonic"></a>

```typescript
public readonly signingAlgorithmMnemonic: string;
```

- *Type:* string

---

##### `signingAlgorithmType`<sup>Required</sup> <a name="signingAlgorithmType" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.signingAlgorithmType"></a>

```typescript
public readonly signingAlgorithmType: number;
```

- *Type:* number

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneIdInput"></a>

```typescript
public readonly hostedZoneIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyManagementServiceArnInput`<sup>Optional</sup> <a name="keyManagementServiceArnInput" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArnInput"></a>

```typescript
public readonly keyManagementServiceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyManagementServiceArn`<sup>Required</sup> <a name="keyManagementServiceArn" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.keyManagementServiceArn"></a>

```typescript
public readonly keyManagementServiceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53KeySigningKeyConfig <a name="Route53KeySigningKeyConfig" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.Initializer"></a>

```typescript
import { route53KeySigningKey } from '@cdktf/aws-cdk'

const route53KeySigningKeyConfig: route53KeySigningKey.Route53KeySigningKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.keyManagementServiceArn">keyManagementServiceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key#name Route53KeySigningKey#name}. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key#id Route53KeySigningKey#id}. |
| <code><a href="#@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key#status Route53KeySigningKey#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}.

---

##### `keyManagementServiceArn`<sup>Required</sup> <a name="keyManagementServiceArn" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.keyManagementServiceArn"></a>

```typescript
public readonly keyManagementServiceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key#name Route53KeySigningKey#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key#id Route53KeySigningKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/aws-cdk.route53KeySigningKey.Route53KeySigningKeyConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/route53_key_signing_key#status Route53KeySigningKey#status}.

---



