# `cloudwatchEventApiDestination` Submodule <a name="`cloudwatchEventApiDestination` Submodule" id="@cdktf/aws-cdk.cloudwatchEventApiDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventApiDestination <a name="CloudwatchEventApiDestination" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination aws_cloudwatch_event_api_destination}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer"></a>

```typescript
import { cloudwatchEventApiDestination } from '@cdktf/aws-cdk'

new cloudwatchEventApiDestination.CloudwatchEventApiDestination(scope: Construct, id: string, config: CloudwatchEventApiDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig">CloudwatchEventApiDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig">CloudwatchEventApiDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetInvocationRateLimitPerSecond">resetInvocationRateLimitPerSecond</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInvocationRateLimitPerSecond` <a name="resetInvocationRateLimitPerSecond" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetInvocationRateLimitPerSecond"></a>

```typescript
public resetInvocationRateLimitPerSecond(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchEventApiDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isConstruct"></a>

```typescript
import { cloudwatchEventApiDestination } from '@cdktf/aws-cdk'

cloudwatchEventApiDestination.CloudwatchEventApiDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformElement"></a>

```typescript
import { cloudwatchEventApiDestination } from '@cdktf/aws-cdk'

cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformResource"></a>

```typescript
import { cloudwatchEventApiDestination } from '@cdktf/aws-cdk'

cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.generateConfigForImport"></a>

```typescript
import { cloudwatchEventApiDestination } from '@cdktf/aws-cdk'

cloudwatchEventApiDestination.CloudwatchEventApiDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudwatchEventApiDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchEventApiDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchEventApiDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchEventApiDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connectionArnInput">connectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationEndpointInput">invocationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationRateLimitPerSecondInput">invocationRateLimitPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connectionArn">connectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationEndpoint">invocationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationRateLimitPerSecond">invocationRateLimitPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `connectionArnInput`<sup>Optional</sup> <a name="connectionArnInput" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connectionArnInput"></a>

```typescript
public readonly connectionArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `invocationEndpointInput`<sup>Optional</sup> <a name="invocationEndpointInput" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationEndpointInput"></a>

```typescript
public readonly invocationEndpointInput: string;
```

- *Type:* string

---

##### `invocationRateLimitPerSecondInput`<sup>Optional</sup> <a name="invocationRateLimitPerSecondInput" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationRateLimitPerSecondInput"></a>

```typescript
public readonly invocationRateLimitPerSecondInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `invocationEndpoint`<sup>Required</sup> <a name="invocationEndpoint" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationEndpoint"></a>

```typescript
public readonly invocationEndpoint: string;
```

- *Type:* string

---

##### `invocationRateLimitPerSecond`<sup>Required</sup> <a name="invocationRateLimitPerSecond" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationRateLimitPerSecond"></a>

```typescript
public readonly invocationRateLimitPerSecond: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventApiDestinationConfig <a name="CloudwatchEventApiDestinationConfig" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.Initializer"></a>

```typescript
import { cloudwatchEventApiDestination } from '@cdktf/aws-cdk'

const cloudwatchEventApiDestinationConfig: cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.connectionArn">connectionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#connection_arn CloudwatchEventApiDestination#connection_arn}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#http_method CloudwatchEventApiDestination#http_method}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.invocationEndpoint">invocationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#invocation_endpoint CloudwatchEventApiDestination#invocation_endpoint}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#name CloudwatchEventApiDestination#name}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#description CloudwatchEventApiDestination#description}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#id CloudwatchEventApiDestination#id}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.invocationRateLimitPerSecond">invocationRateLimitPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#invocation_rate_limit_per_second CloudwatchEventApiDestination#invocation_rate_limit_per_second}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#connection_arn CloudwatchEventApiDestination#connection_arn}.

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#http_method CloudwatchEventApiDestination#http_method}.

---

##### `invocationEndpoint`<sup>Required</sup> <a name="invocationEndpoint" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.invocationEndpoint"></a>

```typescript
public readonly invocationEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#invocation_endpoint CloudwatchEventApiDestination#invocation_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#name CloudwatchEventApiDestination#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#description CloudwatchEventApiDestination#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#id CloudwatchEventApiDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invocationRateLimitPerSecond`<sup>Optional</sup> <a name="invocationRateLimitPerSecond" id="@cdktf/aws-cdk.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.invocationRateLimitPerSecond"></a>

```typescript
public readonly invocationRateLimitPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_event_api_destination#invocation_rate_limit_per_second CloudwatchEventApiDestination#invocation_rate_limit_per_second}.

---



