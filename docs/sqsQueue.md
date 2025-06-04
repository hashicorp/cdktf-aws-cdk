# `sqsQueue` Submodule <a name="`sqsQueue` Submodule" id="@cdktf/aws-cdk.sqsQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueue <a name="SqsQueue" id="@cdktf/aws-cdk.sqsQueue.SqsQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue aws_sqs_queue}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.Initializer"></a>

```typescript
import { sqsQueue } from '@cdktf/aws-cdk'

new sqsQueue.SqsQueue(scope: Construct, id: string, config?: SqsQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig">SqsQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig">SqsQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetContentBasedDeduplication">resetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetDeduplicationScope">resetDeduplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetDelaySeconds">resetDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetFifoQueue">resetFifoQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetFifoThroughputLimit">resetFifoThroughputLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds">resetKmsDataKeyReusePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetMaxMessageSize">resetMaxMessageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetMessageRetentionSeconds">resetMessageRetentionSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds">resetReceiveWaitTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetRedriveAllowPolicy">resetRedriveAllowPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetRedrivePolicy">resetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetSqsManagedSseEnabled">resetSqsManagedSseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds">resetVisibilityTimeoutSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetContentBasedDeduplication` <a name="resetContentBasedDeduplication" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetContentBasedDeduplication"></a>

```typescript
public resetContentBasedDeduplication(): void
```

##### `resetDeduplicationScope` <a name="resetDeduplicationScope" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetDeduplicationScope"></a>

```typescript
public resetDeduplicationScope(): void
```

##### `resetDelaySeconds` <a name="resetDelaySeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetDelaySeconds"></a>

```typescript
public resetDelaySeconds(): void
```

##### `resetFifoQueue` <a name="resetFifoQueue" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetFifoQueue"></a>

```typescript
public resetFifoQueue(): void
```

##### `resetFifoThroughputLimit` <a name="resetFifoThroughputLimit" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetFifoThroughputLimit"></a>

```typescript
public resetFifoThroughputLimit(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsDataKeyReusePeriodSeconds` <a name="resetKmsDataKeyReusePeriodSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds"></a>

```typescript
public resetKmsDataKeyReusePeriodSeconds(): void
```

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetKmsMasterKeyId"></a>

```typescript
public resetKmsMasterKeyId(): void
```

##### `resetMaxMessageSize` <a name="resetMaxMessageSize" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetMaxMessageSize"></a>

```typescript
public resetMaxMessageSize(): void
```

##### `resetMessageRetentionSeconds` <a name="resetMessageRetentionSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetMessageRetentionSeconds"></a>

```typescript
public resetMessageRetentionSeconds(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetReceiveWaitTimeSeconds` <a name="resetReceiveWaitTimeSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds"></a>

```typescript
public resetReceiveWaitTimeSeconds(): void
```

##### `resetRedriveAllowPolicy` <a name="resetRedriveAllowPolicy" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetRedriveAllowPolicy"></a>

```typescript
public resetRedriveAllowPolicy(): void
```

##### `resetRedrivePolicy` <a name="resetRedrivePolicy" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetRedrivePolicy"></a>

```typescript
public resetRedrivePolicy(): void
```

##### `resetSqsManagedSseEnabled` <a name="resetSqsManagedSseEnabled" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetSqsManagedSseEnabled"></a>

```typescript
public resetSqsManagedSseEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVisibilityTimeoutSeconds` <a name="resetVisibilityTimeoutSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds"></a>

```typescript
public resetVisibilityTimeoutSeconds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqsQueue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.isConstruct"></a>

```typescript
import { sqsQueue } from '@cdktf/aws-cdk'

sqsQueue.SqsQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.isTerraformElement"></a>

```typescript
import { sqsQueue } from '@cdktf/aws-cdk'

sqsQueue.SqsQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.isTerraformResource"></a>

```typescript
import { sqsQueue } from '@cdktf/aws-cdk'

sqsQueue.SqsQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.generateConfigForImport"></a>

```typescript
import { sqsQueue } from '@cdktf/aws-cdk'

sqsQueue.SqsQueue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SqsQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqsQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqsQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqsQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput">contentBasedDeduplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.deduplicationScopeInput">deduplicationScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.delaySecondsInput">delaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.fifoQueueInput">fifoQueueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.fifoThroughputLimitInput">fifoThroughputLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput">kmsDataKeyReusePeriodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.maxMessageSizeInput">maxMessageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.messageRetentionSecondsInput">messageRetentionSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput">receiveWaitTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.redriveAllowPolicyInput">redriveAllowPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.redrivePolicyInput">redrivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput">sqsManagedSseEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput">visibilityTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.deduplicationScope">deduplicationScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.delaySeconds">delaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.fifoQueue">fifoQueue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.fifoThroughputLimit">fifoThroughputLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.maxMessageSize">maxMessageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.messageRetentionSeconds">messageRetentionSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds">receiveWaitTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.redriveAllowPolicy">redriveAllowPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.redrivePolicy">redrivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.sqsManagedSseEnabled">sqsManagedSseEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds">visibilityTimeoutSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `contentBasedDeduplicationInput`<sup>Optional</sup> <a name="contentBasedDeduplicationInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput"></a>

```typescript
public readonly contentBasedDeduplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deduplicationScopeInput`<sup>Optional</sup> <a name="deduplicationScopeInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.deduplicationScopeInput"></a>

```typescript
public readonly deduplicationScopeInput: string;
```

- *Type:* string

---

##### `delaySecondsInput`<sup>Optional</sup> <a name="delaySecondsInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.delaySecondsInput"></a>

```typescript
public readonly delaySecondsInput: number;
```

- *Type:* number

---

##### `fifoQueueInput`<sup>Optional</sup> <a name="fifoQueueInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.fifoQueueInput"></a>

```typescript
public readonly fifoQueueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fifoThroughputLimitInput`<sup>Optional</sup> <a name="fifoThroughputLimitInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.fifoThroughputLimitInput"></a>

```typescript
public readonly fifoThroughputLimitInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsDataKeyReusePeriodSecondsInput`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSecondsInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput"></a>

```typescript
public readonly kmsDataKeyReusePeriodSecondsInput: number;
```

- *Type:* number

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput"></a>

```typescript
public readonly kmsMasterKeyIdInput: string;
```

- *Type:* string

---

##### `maxMessageSizeInput`<sup>Optional</sup> <a name="maxMessageSizeInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.maxMessageSizeInput"></a>

```typescript
public readonly maxMessageSizeInput: number;
```

- *Type:* number

---

##### `messageRetentionSecondsInput`<sup>Optional</sup> <a name="messageRetentionSecondsInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.messageRetentionSecondsInput"></a>

```typescript
public readonly messageRetentionSecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `receiveWaitTimeSecondsInput`<sup>Optional</sup> <a name="receiveWaitTimeSecondsInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput"></a>

```typescript
public readonly receiveWaitTimeSecondsInput: number;
```

- *Type:* number

---

##### `redriveAllowPolicyInput`<sup>Optional</sup> <a name="redriveAllowPolicyInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.redriveAllowPolicyInput"></a>

```typescript
public readonly redriveAllowPolicyInput: string;
```

- *Type:* string

---

##### `redrivePolicyInput`<sup>Optional</sup> <a name="redrivePolicyInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.redrivePolicyInput"></a>

```typescript
public readonly redrivePolicyInput: string;
```

- *Type:* string

---

##### `sqsManagedSseEnabledInput`<sup>Optional</sup> <a name="sqsManagedSseEnabledInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput"></a>

```typescript
public readonly sqsManagedSseEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `visibilityTimeoutSecondsInput`<sup>Optional</sup> <a name="visibilityTimeoutSecondsInput" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput"></a>

```typescript
public readonly visibilityTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `contentBasedDeduplication`<sup>Required</sup> <a name="contentBasedDeduplication" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.contentBasedDeduplication"></a>

```typescript
public readonly contentBasedDeduplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deduplicationScope`<sup>Required</sup> <a name="deduplicationScope" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.deduplicationScope"></a>

```typescript
public readonly deduplicationScope: string;
```

- *Type:* string

---

##### `delaySeconds`<sup>Required</sup> <a name="delaySeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.delaySeconds"></a>

```typescript
public readonly delaySeconds: number;
```

- *Type:* number

---

##### `fifoQueue`<sup>Required</sup> <a name="fifoQueue" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.fifoQueue"></a>

```typescript
public readonly fifoQueue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fifoThroughputLimit`<sup>Required</sup> <a name="fifoThroughputLimit" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.fifoThroughputLimit"></a>

```typescript
public readonly fifoThroughputLimit: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds"></a>

```typescript
public readonly kmsDataKeyReusePeriodSeconds: number;
```

- *Type:* number

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

##### `maxMessageSize`<sup>Required</sup> <a name="maxMessageSize" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.maxMessageSize"></a>

```typescript
public readonly maxMessageSize: number;
```

- *Type:* number

---

##### `messageRetentionSeconds`<sup>Required</sup> <a name="messageRetentionSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.messageRetentionSeconds"></a>

```typescript
public readonly messageRetentionSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `receiveWaitTimeSeconds`<sup>Required</sup> <a name="receiveWaitTimeSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds"></a>

```typescript
public readonly receiveWaitTimeSeconds: number;
```

- *Type:* number

---

##### `redriveAllowPolicy`<sup>Required</sup> <a name="redriveAllowPolicy" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.redriveAllowPolicy"></a>

```typescript
public readonly redriveAllowPolicy: string;
```

- *Type:* string

---

##### `redrivePolicy`<sup>Required</sup> <a name="redrivePolicy" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.redrivePolicy"></a>

```typescript
public readonly redrivePolicy: string;
```

- *Type:* string

---

##### `sqsManagedSseEnabled`<sup>Required</sup> <a name="sqsManagedSseEnabled" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.sqsManagedSseEnabled"></a>

```typescript
public readonly sqsManagedSseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `visibilityTimeoutSeconds`<sup>Required</sup> <a name="visibilityTimeoutSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds"></a>

```typescript
public readonly visibilityTimeoutSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.sqsQueue.SqsQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueConfig <a name="SqsQueueConfig" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.Initializer"></a>

```typescript
import { sqsQueue } from '@cdktf/aws-cdk'

const sqsQueueConfig: sqsQueue.SqsQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.deduplicationScope">deduplicationScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.delaySeconds">delaySeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.fifoQueue">fifoQueue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit">fifoThroughputLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#id SqsQueue#id}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.maxMessageSize">maxMessageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds">messageRetentionSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#name SqsQueue#name}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#policy SqsQueue#policy}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds">receiveWaitTimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy">redriveAllowPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.redrivePolicy">redrivePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled">sqsManagedSseEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#tags SqsQueue#tags}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds">visibilityTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentBasedDeduplication`<sup>Optional</sup> <a name="contentBasedDeduplication" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication"></a>

```typescript
public readonly contentBasedDeduplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}.

---

##### `deduplicationScope`<sup>Optional</sup> <a name="deduplicationScope" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.deduplicationScope"></a>

```typescript
public readonly deduplicationScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}.

---

##### `delaySeconds`<sup>Optional</sup> <a name="delaySeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.delaySeconds"></a>

```typescript
public readonly delaySeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}.

---

##### `fifoQueue`<sup>Optional</sup> <a name="fifoQueue" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.fifoQueue"></a>

```typescript
public readonly fifoQueue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}.

---

##### `fifoThroughputLimit`<sup>Optional</sup> <a name="fifoThroughputLimit" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit"></a>

```typescript
public readonly fifoThroughputLimit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#id SqsQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds"></a>

```typescript
public readonly kmsDataKeyReusePeriodSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}.

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}.

---

##### `maxMessageSize`<sup>Optional</sup> <a name="maxMessageSize" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.maxMessageSize"></a>

```typescript
public readonly maxMessageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}.

---

##### `messageRetentionSeconds`<sup>Optional</sup> <a name="messageRetentionSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds"></a>

```typescript
public readonly messageRetentionSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#name SqsQueue#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#policy SqsQueue#policy}.

---

##### `receiveWaitTimeSeconds`<sup>Optional</sup> <a name="receiveWaitTimeSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds"></a>

```typescript
public readonly receiveWaitTimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}.

---

##### `redriveAllowPolicy`<sup>Optional</sup> <a name="redriveAllowPolicy" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy"></a>

```typescript
public readonly redriveAllowPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}.

---

##### `redrivePolicy`<sup>Optional</sup> <a name="redrivePolicy" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.redrivePolicy"></a>

```typescript
public readonly redrivePolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}.

---

##### `sqsManagedSseEnabled`<sup>Optional</sup> <a name="sqsManagedSseEnabled" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled"></a>

```typescript
public readonly sqsManagedSseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#tags SqsQueue#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}.

---

##### `visibilityTimeoutSeconds`<sup>Optional</sup> <a name="visibilityTimeoutSeconds" id="@cdktf/aws-cdk.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds"></a>

```typescript
public readonly visibilityTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}.

---



