# `snsTopicSubscription` Submodule <a name="`snsTopicSubscription` Submodule" id="@cdktf/aws-cdk.snsTopicSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopicSubscription <a name="SnsTopicSubscription" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription aws_sns_topic_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.Initializer"></a>

```typescript
import { snsTopicSubscription } from '@cdktf/aws-cdk'

new snsTopicSubscription.SnsTopicSubscription(scope: Construct, id: string, config: SnsTopicSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig">SnsTopicSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig">SnsTopicSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetConfirmationTimeoutInMinutes">resetConfirmationTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetDeliveryPolicy">resetDeliveryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetEndpointAutoConfirms">resetEndpointAutoConfirms</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicy">resetFilterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetRawMessageDelivery">resetRawMessageDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetRedrivePolicy">resetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetSubscriptionRoleArn">resetSubscriptionRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConfirmationTimeoutInMinutes` <a name="resetConfirmationTimeoutInMinutes" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetConfirmationTimeoutInMinutes"></a>

```typescript
public resetConfirmationTimeoutInMinutes(): void
```

##### `resetDeliveryPolicy` <a name="resetDeliveryPolicy" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetDeliveryPolicy"></a>

```typescript
public resetDeliveryPolicy(): void
```

##### `resetEndpointAutoConfirms` <a name="resetEndpointAutoConfirms" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetEndpointAutoConfirms"></a>

```typescript
public resetEndpointAutoConfirms(): void
```

##### `resetFilterPolicy` <a name="resetFilterPolicy" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicy"></a>

```typescript
public resetFilterPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRawMessageDelivery` <a name="resetRawMessageDelivery" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetRawMessageDelivery"></a>

```typescript
public resetRawMessageDelivery(): void
```

##### `resetRedrivePolicy` <a name="resetRedrivePolicy" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetRedrivePolicy"></a>

```typescript
public resetRedrivePolicy(): void
```

##### `resetSubscriptionRoleArn` <a name="resetSubscriptionRoleArn" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.resetSubscriptionRoleArn"></a>

```typescript
public resetSubscriptionRoleArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SnsTopicSubscription resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.isConstruct"></a>

```typescript
import { snsTopicSubscription } from '@cdktf/aws-cdk'

snsTopicSubscription.SnsTopicSubscription.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.isTerraformElement"></a>

```typescript
import { snsTopicSubscription } from '@cdktf/aws-cdk'

snsTopicSubscription.SnsTopicSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.isTerraformResource"></a>

```typescript
import { snsTopicSubscription } from '@cdktf/aws-cdk'

snsTopicSubscription.SnsTopicSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.generateConfigForImport"></a>

```typescript
import { snsTopicSubscription } from '@cdktf/aws-cdk'

snsTopicSubscription.SnsTopicSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SnsTopicSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SnsTopicSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SnsTopicSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SnsTopicSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.confirmationWasAuthenticated">confirmationWasAuthenticated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.pendingConfirmation">pendingConfirmation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutesInput">confirmationTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicyInput">deliveryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirmsInput">endpointAutoConfirmsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyInput">filterPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDeliveryInput">rawMessageDeliveryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicyInput">redrivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArnInput">subscriptionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutes">confirmationTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicy">deliveryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirms">endpointAutoConfirms</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.filterPolicy">filterPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDelivery">rawMessageDelivery</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicy">redrivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArn">subscriptionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `confirmationWasAuthenticated`<sup>Required</sup> <a name="confirmationWasAuthenticated" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.confirmationWasAuthenticated"></a>

```typescript
public readonly confirmationWasAuthenticated: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `pendingConfirmation`<sup>Required</sup> <a name="pendingConfirmation" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.pendingConfirmation"></a>

```typescript
public readonly pendingConfirmation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `confirmationTimeoutInMinutesInput`<sup>Optional</sup> <a name="confirmationTimeoutInMinutesInput" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutesInput"></a>

```typescript
public readonly confirmationTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `deliveryPolicyInput`<sup>Optional</sup> <a name="deliveryPolicyInput" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicyInput"></a>

```typescript
public readonly deliveryPolicyInput: string;
```

- *Type:* string

---

##### `endpointAutoConfirmsInput`<sup>Optional</sup> <a name="endpointAutoConfirmsInput" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirmsInput"></a>

```typescript
public readonly endpointAutoConfirmsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `filterPolicyInput`<sup>Optional</sup> <a name="filterPolicyInput" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyInput"></a>

```typescript
public readonly filterPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `rawMessageDeliveryInput`<sup>Optional</sup> <a name="rawMessageDeliveryInput" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDeliveryInput"></a>

```typescript
public readonly rawMessageDeliveryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `redrivePolicyInput`<sup>Optional</sup> <a name="redrivePolicyInput" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicyInput"></a>

```typescript
public readonly redrivePolicyInput: string;
```

- *Type:* string

---

##### `subscriptionRoleArnInput`<sup>Optional</sup> <a name="subscriptionRoleArnInput" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArnInput"></a>

```typescript
public readonly subscriptionRoleArnInput: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `confirmationTimeoutInMinutes`<sup>Required</sup> <a name="confirmationTimeoutInMinutes" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutes"></a>

```typescript
public readonly confirmationTimeoutInMinutes: number;
```

- *Type:* number

---

##### `deliveryPolicy`<sup>Required</sup> <a name="deliveryPolicy" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicy"></a>

```typescript
public readonly deliveryPolicy: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `endpointAutoConfirms`<sup>Required</sup> <a name="endpointAutoConfirms" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirms"></a>

```typescript
public readonly endpointAutoConfirms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterPolicy`<sup>Required</sup> <a name="filterPolicy" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.filterPolicy"></a>

```typescript
public readonly filterPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `rawMessageDelivery`<sup>Required</sup> <a name="rawMessageDelivery" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDelivery"></a>

```typescript
public readonly rawMessageDelivery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `redrivePolicy`<sup>Required</sup> <a name="redrivePolicy" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicy"></a>

```typescript
public readonly redrivePolicy: string;
```

- *Type:* string

---

##### `subscriptionRoleArn`<sup>Required</sup> <a name="subscriptionRoleArn" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArn"></a>

```typescript
public readonly subscriptionRoleArn: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicSubscriptionConfig <a name="SnsTopicSubscriptionConfig" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.Initializer"></a>

```typescript
import { snsTopicSubscription } from '@cdktf/aws-cdk'

const snsTopicSubscriptionConfig: snsTopicSubscription.SnsTopicSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#protocol SnsTopicSubscription#protocol}. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.confirmationTimeoutInMinutes">confirmationTimeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.deliveryPolicy">deliveryPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpointAutoConfirms">endpointAutoConfirms</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicy">filterPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#id SnsTopicSubscription#id}. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.rawMessageDelivery">rawMessageDelivery</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.redrivePolicy">redrivePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}. |
| <code><a href="#@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.subscriptionRoleArn">subscriptionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#protocol SnsTopicSubscription#protocol}.

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}.

---

##### `confirmationTimeoutInMinutes`<sup>Optional</sup> <a name="confirmationTimeoutInMinutes" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.confirmationTimeoutInMinutes"></a>

```typescript
public readonly confirmationTimeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}.

---

##### `deliveryPolicy`<sup>Optional</sup> <a name="deliveryPolicy" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.deliveryPolicy"></a>

```typescript
public readonly deliveryPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}.

---

##### `endpointAutoConfirms`<sup>Optional</sup> <a name="endpointAutoConfirms" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpointAutoConfirms"></a>

```typescript
public readonly endpointAutoConfirms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}.

---

##### `filterPolicy`<sup>Optional</sup> <a name="filterPolicy" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicy"></a>

```typescript
public readonly filterPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#id SnsTopicSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rawMessageDelivery`<sup>Optional</sup> <a name="rawMessageDelivery" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.rawMessageDelivery"></a>

```typescript
public readonly rawMessageDelivery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}.

---

##### `redrivePolicy`<sup>Optional</sup> <a name="redrivePolicy" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.redrivePolicy"></a>

```typescript
public readonly redrivePolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}.

---

##### `subscriptionRoleArn`<sup>Optional</sup> <a name="subscriptionRoleArn" id="@cdktf/aws-cdk.snsTopicSubscription.SnsTopicSubscriptionConfig.property.subscriptionRoleArn"></a>

```typescript
public readonly subscriptionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}.

---



