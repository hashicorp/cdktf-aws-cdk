# `autoscalingPolicy` Submodule <a name="`autoscalingPolicy` Submodule" id="@cdktf/aws-cdk.autoscalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingPolicy <a name="AutoscalingPolicy" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy aws_autoscaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicy(scope: Construct, id: string, config: AutoscalingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig">AutoscalingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig">AutoscalingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.putPredictiveScalingConfiguration">putPredictiveScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.putStepAdjustment">putStepAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.putTargetTrackingConfiguration">putTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetAdjustmentType">resetAdjustmentType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetEstimatedInstanceWarmup">resetEstimatedInstanceWarmup</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetMetricAggregationType">resetMetricAggregationType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetMinAdjustmentMagnitude">resetMinAdjustmentMagnitude</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetPredictiveScalingConfiguration">resetPredictiveScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetScalingAdjustment">resetScalingAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetStepAdjustment">resetStepAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetTargetTrackingConfiguration">resetTargetTrackingConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPredictiveScalingConfiguration` <a name="putPredictiveScalingConfiguration" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.putPredictiveScalingConfiguration"></a>

```typescript
public putPredictiveScalingConfiguration(value: AutoscalingPolicyPredictiveScalingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.putPredictiveScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration">AutoscalingPolicyPredictiveScalingConfiguration</a>

---

##### `putStepAdjustment` <a name="putStepAdjustment" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.putStepAdjustment"></a>

```typescript
public putStepAdjustment(value: IResolvable | AutoscalingPolicyStepAdjustment[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.putStepAdjustment.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment">AutoscalingPolicyStepAdjustment</a>[]

---

##### `putTargetTrackingConfiguration` <a name="putTargetTrackingConfiguration" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.putTargetTrackingConfiguration"></a>

```typescript
public putTargetTrackingConfiguration(value: AutoscalingPolicyTargetTrackingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.putTargetTrackingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration">AutoscalingPolicyTargetTrackingConfiguration</a>

---

##### `resetAdjustmentType` <a name="resetAdjustmentType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetAdjustmentType"></a>

```typescript
public resetAdjustmentType(): void
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetCooldown"></a>

```typescript
public resetCooldown(): void
```

##### `resetEstimatedInstanceWarmup` <a name="resetEstimatedInstanceWarmup" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetEstimatedInstanceWarmup"></a>

```typescript
public resetEstimatedInstanceWarmup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetricAggregationType` <a name="resetMetricAggregationType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetMetricAggregationType"></a>

```typescript
public resetMetricAggregationType(): void
```

##### `resetMinAdjustmentMagnitude` <a name="resetMinAdjustmentMagnitude" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetMinAdjustmentMagnitude"></a>

```typescript
public resetMinAdjustmentMagnitude(): void
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetPolicyType"></a>

```typescript
public resetPolicyType(): void
```

##### `resetPredictiveScalingConfiguration` <a name="resetPredictiveScalingConfiguration" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetPredictiveScalingConfiguration"></a>

```typescript
public resetPredictiveScalingConfiguration(): void
```

##### `resetScalingAdjustment` <a name="resetScalingAdjustment" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetScalingAdjustment"></a>

```typescript
public resetScalingAdjustment(): void
```

##### `resetStepAdjustment` <a name="resetStepAdjustment" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetStepAdjustment"></a>

```typescript
public resetStepAdjustment(): void
```

##### `resetTargetTrackingConfiguration` <a name="resetTargetTrackingConfiguration" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.resetTargetTrackingConfiguration"></a>

```typescript
public resetTargetTrackingConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutoscalingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.isConstruct"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

autoscalingPolicy.AutoscalingPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.isTerraformElement"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

autoscalingPolicy.AutoscalingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.isTerraformResource"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

autoscalingPolicy.AutoscalingPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.generateConfigForImport"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

autoscalingPolicy.AutoscalingPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AutoscalingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutoscalingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutoscalingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutoscalingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.predictiveScalingConfiguration">predictiveScalingConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference">AutoscalingPolicyPredictiveScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.stepAdjustment">stepAdjustment</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList">AutoscalingPolicyStepAdjustmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.targetTrackingConfiguration">targetTrackingConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference">AutoscalingPolicyTargetTrackingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.adjustmentTypeInput">adjustmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.autoscalingGroupNameInput">autoscalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.cooldownInput">cooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.estimatedInstanceWarmupInput">estimatedInstanceWarmupInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.metricAggregationTypeInput">metricAggregationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.minAdjustmentMagnitudeInput">minAdjustmentMagnitudeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.predictiveScalingConfigurationInput">predictiveScalingConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration">AutoscalingPolicyPredictiveScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.scalingAdjustmentInput">scalingAdjustmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.stepAdjustmentInput">stepAdjustmentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment">AutoscalingPolicyStepAdjustment</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.targetTrackingConfigurationInput">targetTrackingConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration">AutoscalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.adjustmentType">adjustmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.cooldown">cooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.metricAggregationType">metricAggregationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.minAdjustmentMagnitude">minAdjustmentMagnitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.scalingAdjustment">scalingAdjustment</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `predictiveScalingConfiguration`<sup>Required</sup> <a name="predictiveScalingConfiguration" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.predictiveScalingConfiguration"></a>

```typescript
public readonly predictiveScalingConfiguration: AutoscalingPolicyPredictiveScalingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference">AutoscalingPolicyPredictiveScalingConfigurationOutputReference</a>

---

##### `stepAdjustment`<sup>Required</sup> <a name="stepAdjustment" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.stepAdjustment"></a>

```typescript
public readonly stepAdjustment: AutoscalingPolicyStepAdjustmentList;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList">AutoscalingPolicyStepAdjustmentList</a>

---

##### `targetTrackingConfiguration`<sup>Required</sup> <a name="targetTrackingConfiguration" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.targetTrackingConfiguration"></a>

```typescript
public readonly targetTrackingConfiguration: AutoscalingPolicyTargetTrackingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference">AutoscalingPolicyTargetTrackingConfigurationOutputReference</a>

---

##### `adjustmentTypeInput`<sup>Optional</sup> <a name="adjustmentTypeInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.adjustmentTypeInput"></a>

```typescript
public readonly adjustmentTypeInput: string;
```

- *Type:* string

---

##### `autoscalingGroupNameInput`<sup>Optional</sup> <a name="autoscalingGroupNameInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.autoscalingGroupNameInput"></a>

```typescript
public readonly autoscalingGroupNameInput: string;
```

- *Type:* string

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: number;
```

- *Type:* number

---

##### `estimatedInstanceWarmupInput`<sup>Optional</sup> <a name="estimatedInstanceWarmupInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.estimatedInstanceWarmupInput"></a>

```typescript
public readonly estimatedInstanceWarmupInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricAggregationTypeInput`<sup>Optional</sup> <a name="metricAggregationTypeInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.metricAggregationTypeInput"></a>

```typescript
public readonly metricAggregationTypeInput: string;
```

- *Type:* string

---

##### `minAdjustmentMagnitudeInput`<sup>Optional</sup> <a name="minAdjustmentMagnitudeInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.minAdjustmentMagnitudeInput"></a>

```typescript
public readonly minAdjustmentMagnitudeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `predictiveScalingConfigurationInput`<sup>Optional</sup> <a name="predictiveScalingConfigurationInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.predictiveScalingConfigurationInput"></a>

```typescript
public readonly predictiveScalingConfigurationInput: AutoscalingPolicyPredictiveScalingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration">AutoscalingPolicyPredictiveScalingConfiguration</a>

---

##### `scalingAdjustmentInput`<sup>Optional</sup> <a name="scalingAdjustmentInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.scalingAdjustmentInput"></a>

```typescript
public readonly scalingAdjustmentInput: number;
```

- *Type:* number

---

##### `stepAdjustmentInput`<sup>Optional</sup> <a name="stepAdjustmentInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.stepAdjustmentInput"></a>

```typescript
public readonly stepAdjustmentInput: IResolvable | AutoscalingPolicyStepAdjustment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment">AutoscalingPolicyStepAdjustment</a>[]

---

##### `targetTrackingConfigurationInput`<sup>Optional</sup> <a name="targetTrackingConfigurationInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.targetTrackingConfigurationInput"></a>

```typescript
public readonly targetTrackingConfigurationInput: AutoscalingPolicyTargetTrackingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration">AutoscalingPolicyTargetTrackingConfiguration</a>

---

##### `adjustmentType`<sup>Required</sup> <a name="adjustmentType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.adjustmentType"></a>

```typescript
public readonly adjustmentType: string;
```

- *Type:* string

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.autoscalingGroupName"></a>

```typescript
public readonly autoscalingGroupName: string;
```

- *Type:* string

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

---

##### `estimatedInstanceWarmup`<sup>Required</sup> <a name="estimatedInstanceWarmup" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.estimatedInstanceWarmup"></a>

```typescript
public readonly estimatedInstanceWarmup: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricAggregationType`<sup>Required</sup> <a name="metricAggregationType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.metricAggregationType"></a>

```typescript
public readonly metricAggregationType: string;
```

- *Type:* string

---

##### `minAdjustmentMagnitude`<sup>Required</sup> <a name="minAdjustmentMagnitude" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.minAdjustmentMagnitude"></a>

```typescript
public readonly minAdjustmentMagnitude: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `scalingAdjustment`<sup>Required</sup> <a name="scalingAdjustment" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.scalingAdjustment"></a>

```typescript
public readonly scalingAdjustment: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingPolicyConfig <a name="AutoscalingPolicyConfig" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

const autoscalingPolicyConfig: autoscalingPolicy.AutoscalingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#autoscaling_group_name AutoscalingPolicy#autoscaling_group_name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#name AutoscalingPolicy#name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.adjustmentType">adjustmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#adjustment_type AutoscalingPolicy#adjustment_type}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.cooldown">cooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#cooldown AutoscalingPolicy#cooldown}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.estimatedInstanceWarmup">estimatedInstanceWarmup</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#estimated_instance_warmup AutoscalingPolicy#estimated_instance_warmup}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#id AutoscalingPolicy#id}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.metricAggregationType">metricAggregationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#metric_aggregation_type AutoscalingPolicy#metric_aggregation_type}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.minAdjustmentMagnitude">minAdjustmentMagnitude</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#min_adjustment_magnitude AutoscalingPolicy#min_adjustment_magnitude}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#policy_type AutoscalingPolicy#policy_type}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.predictiveScalingConfiguration">predictiveScalingConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration">AutoscalingPolicyPredictiveScalingConfiguration</a></code> | predictive_scaling_configuration block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.scalingAdjustment">scalingAdjustment</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#scaling_adjustment AutoscalingPolicy#scaling_adjustment}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.stepAdjustment">stepAdjustment</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment">AutoscalingPolicyStepAdjustment</a>[]</code> | step_adjustment block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.targetTrackingConfiguration">targetTrackingConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration">AutoscalingPolicyTargetTrackingConfiguration</a></code> | target_tracking_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.autoscalingGroupName"></a>

```typescript
public readonly autoscalingGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#autoscaling_group_name AutoscalingPolicy#autoscaling_group_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#name AutoscalingPolicy#name}.

---

##### `adjustmentType`<sup>Optional</sup> <a name="adjustmentType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.adjustmentType"></a>

```typescript
public readonly adjustmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#adjustment_type AutoscalingPolicy#adjustment_type}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#cooldown AutoscalingPolicy#cooldown}.

---

##### `estimatedInstanceWarmup`<sup>Optional</sup> <a name="estimatedInstanceWarmup" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.estimatedInstanceWarmup"></a>

```typescript
public readonly estimatedInstanceWarmup: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#estimated_instance_warmup AutoscalingPolicy#estimated_instance_warmup}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#id AutoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricAggregationType`<sup>Optional</sup> <a name="metricAggregationType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.metricAggregationType"></a>

```typescript
public readonly metricAggregationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#metric_aggregation_type AutoscalingPolicy#metric_aggregation_type}.

---

##### `minAdjustmentMagnitude`<sup>Optional</sup> <a name="minAdjustmentMagnitude" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.minAdjustmentMagnitude"></a>

```typescript
public readonly minAdjustmentMagnitude: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#min_adjustment_magnitude AutoscalingPolicy#min_adjustment_magnitude}.

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#policy_type AutoscalingPolicy#policy_type}.

---

##### `predictiveScalingConfiguration`<sup>Optional</sup> <a name="predictiveScalingConfiguration" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.predictiveScalingConfiguration"></a>

```typescript
public readonly predictiveScalingConfiguration: AutoscalingPolicyPredictiveScalingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration">AutoscalingPolicyPredictiveScalingConfiguration</a>

predictive_scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predictive_scaling_configuration AutoscalingPolicy#predictive_scaling_configuration}

---

##### `scalingAdjustment`<sup>Optional</sup> <a name="scalingAdjustment" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.scalingAdjustment"></a>

```typescript
public readonly scalingAdjustment: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#scaling_adjustment AutoscalingPolicy#scaling_adjustment}.

---

##### `stepAdjustment`<sup>Optional</sup> <a name="stepAdjustment" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.stepAdjustment"></a>

```typescript
public readonly stepAdjustment: IResolvable | AutoscalingPolicyStepAdjustment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment">AutoscalingPolicyStepAdjustment</a>[]

step_adjustment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#step_adjustment AutoscalingPolicy#step_adjustment}

---

##### `targetTrackingConfiguration`<sup>Optional</sup> <a name="targetTrackingConfiguration" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyConfig.property.targetTrackingConfiguration"></a>

```typescript
public readonly targetTrackingConfiguration: AutoscalingPolicyTargetTrackingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration">AutoscalingPolicyTargetTrackingConfiguration</a>

target_tracking_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#target_tracking_configuration AutoscalingPolicy#target_tracking_configuration}

---

### AutoscalingPolicyPredictiveScalingConfiguration <a name="AutoscalingPolicyPredictiveScalingConfiguration" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

const autoscalingPolicyPredictiveScalingConfiguration: autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration.property.metricSpecification">metricSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification</a></code> | metric_specification block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration.property.maxCapacityBreachBehavior">maxCapacityBreachBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#max_capacity_breach_behavior AutoscalingPolicy#max_capacity_breach_behavior}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration.property.maxCapacityBuffer">maxCapacityBuffer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#max_capacity_buffer AutoscalingPolicy#max_capacity_buffer}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#mode AutoscalingPolicy#mode}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration.property.schedulingBufferTime">schedulingBufferTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#scheduling_buffer_time AutoscalingPolicy#scheduling_buffer_time}. |

---

##### `metricSpecification`<sup>Required</sup> <a name="metricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration.property.metricSpecification"></a>

```typescript
public readonly metricSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification</a>

metric_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#metric_specification AutoscalingPolicy#metric_specification}

---

##### `maxCapacityBreachBehavior`<sup>Optional</sup> <a name="maxCapacityBreachBehavior" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration.property.maxCapacityBreachBehavior"></a>

```typescript
public readonly maxCapacityBreachBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#max_capacity_breach_behavior AutoscalingPolicy#max_capacity_breach_behavior}.

---

##### `maxCapacityBuffer`<sup>Optional</sup> <a name="maxCapacityBuffer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration.property.maxCapacityBuffer"></a>

```typescript
public readonly maxCapacityBuffer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#max_capacity_buffer AutoscalingPolicy#max_capacity_buffer}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#mode AutoscalingPolicy#mode}.

---

##### `schedulingBufferTime`<sup>Optional</sup> <a name="schedulingBufferTime" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration.property.schedulingBufferTime"></a>

```typescript
public readonly schedulingBufferTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#scheduling_buffer_time AutoscalingPolicy#scheduling_buffer_time}.

---

### AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification <a name="AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

const autoscalingPolicyPredictiveScalingConfigurationMetricSpecification: autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification.property.targetValue">targetValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#target_value AutoscalingPolicy#target_value}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification.property.predefinedLoadMetricSpecification">predefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification</a></code> | predefined_load_metric_specification block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification.property.predefinedMetricPairSpecification">predefinedMetricPairSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification</a></code> | predefined_metric_pair_specification block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification.property.predefinedScalingMetricSpecification">predefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification</a></code> | predefined_scaling_metric_specification block. |

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#target_value AutoscalingPolicy#target_value}.

---

##### `predefinedLoadMetricSpecification`<sup>Optional</sup> <a name="predefinedLoadMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification.property.predefinedLoadMetricSpecification"></a>

```typescript
public readonly predefinedLoadMetricSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification</a>

predefined_load_metric_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_load_metric_specification AutoscalingPolicy#predefined_load_metric_specification}

---

##### `predefinedMetricPairSpecification`<sup>Optional</sup> <a name="predefinedMetricPairSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification.property.predefinedMetricPairSpecification"></a>

```typescript
public readonly predefinedMetricPairSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification</a>

predefined_metric_pair_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_metric_pair_specification AutoscalingPolicy#predefined_metric_pair_specification}

---

##### `predefinedScalingMetricSpecification`<sup>Optional</sup> <a name="predefinedScalingMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification.property.predefinedScalingMetricSpecification"></a>

```typescript
public readonly predefinedScalingMetricSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification</a>

predefined_scaling_metric_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_scaling_metric_specification AutoscalingPolicy#predefined_scaling_metric_specification}

---

### AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification <a name="AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

const autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification: autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}. |

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}.

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}.

---

### AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification <a name="AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

const autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification: autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}. |

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}.

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}.

---

### AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification <a name="AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

const autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification: autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}. |

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}.

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}.

---

### AutoscalingPolicyStepAdjustment <a name="AutoscalingPolicyStepAdjustment" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

const autoscalingPolicyStepAdjustment: autoscalingPolicy.AutoscalingPolicyStepAdjustment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment.property.scalingAdjustment">scalingAdjustment</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#scaling_adjustment AutoscalingPolicy#scaling_adjustment}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment.property.metricIntervalLowerBound">metricIntervalLowerBound</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#metric_interval_lower_bound AutoscalingPolicy#metric_interval_lower_bound}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment.property.metricIntervalUpperBound">metricIntervalUpperBound</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#metric_interval_upper_bound AutoscalingPolicy#metric_interval_upper_bound}. |

---

##### `scalingAdjustment`<sup>Required</sup> <a name="scalingAdjustment" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment.property.scalingAdjustment"></a>

```typescript
public readonly scalingAdjustment: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#scaling_adjustment AutoscalingPolicy#scaling_adjustment}.

---

##### `metricIntervalLowerBound`<sup>Optional</sup> <a name="metricIntervalLowerBound" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment.property.metricIntervalLowerBound"></a>

```typescript
public readonly metricIntervalLowerBound: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#metric_interval_lower_bound AutoscalingPolicy#metric_interval_lower_bound}.

---

##### `metricIntervalUpperBound`<sup>Optional</sup> <a name="metricIntervalUpperBound" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment.property.metricIntervalUpperBound"></a>

```typescript
public readonly metricIntervalUpperBound: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#metric_interval_upper_bound AutoscalingPolicy#metric_interval_upper_bound}.

---

### AutoscalingPolicyTargetTrackingConfiguration <a name="AutoscalingPolicyTargetTrackingConfiguration" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

const autoscalingPolicyTargetTrackingConfiguration: autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration.property.targetValue">targetValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#target_value AutoscalingPolicy#target_value}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration.property.customizedMetricSpecification">customizedMetricSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification</a></code> | customized_metric_specification block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#disable_scale_in AutoscalingPolicy#disable_scale_in}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration.property.predefinedMetricSpecification">predefinedMetricSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification</a></code> | predefined_metric_specification block. |

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#target_value AutoscalingPolicy#target_value}.

---

##### `customizedMetricSpecification`<sup>Optional</sup> <a name="customizedMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration.property.customizedMetricSpecification"></a>

```typescript
public readonly customizedMetricSpecification: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification</a>

customized_metric_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#customized_metric_specification AutoscalingPolicy#customized_metric_specification}

---

##### `disableScaleIn`<sup>Optional</sup> <a name="disableScaleIn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#disable_scale_in AutoscalingPolicy#disable_scale_in}.

---

##### `predefinedMetricSpecification`<sup>Optional</sup> <a name="predefinedMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration.property.predefinedMetricSpecification"></a>

```typescript
public readonly predefinedMetricSpecification: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification</a>

predefined_metric_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_metric_specification AutoscalingPolicy#predefined_metric_specification}

---

### AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification <a name="AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

const autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification: autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#metric_name AutoscalingPolicy#metric_name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#namespace AutoscalingPolicy#namespace}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#statistic AutoscalingPolicy#statistic}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.property.metricDimension">metricDimension</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension</a>[]</code> | metric_dimension block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#unit AutoscalingPolicy#unit}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#metric_name AutoscalingPolicy#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#namespace AutoscalingPolicy#namespace}.

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#statistic AutoscalingPolicy#statistic}.

---

##### `metricDimension`<sup>Optional</sup> <a name="metricDimension" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.property.metricDimension"></a>

```typescript
public readonly metricDimension: IResolvable | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension</a>[]

metric_dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#metric_dimension AutoscalingPolicy#metric_dimension}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#unit AutoscalingPolicy#unit}.

---

### AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension <a name="AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

const autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension: autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#name AutoscalingPolicy#name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#value AutoscalingPolicy#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#name AutoscalingPolicy#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#value AutoscalingPolicy#value}.

---

### AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification <a name="AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

const autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification: autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}. |

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}.

---

##### `resourceLabel`<sup>Optional</sup> <a name="resourceLabel" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference <a name="AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.putPredefinedLoadMetricSpecification">putPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.putPredefinedMetricPairSpecification">putPredefinedMetricPairSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.putPredefinedScalingMetricSpecification">putPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.resetPredefinedLoadMetricSpecification">resetPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.resetPredefinedMetricPairSpecification">resetPredefinedMetricPairSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.resetPredefinedScalingMetricSpecification">resetPredefinedScalingMetricSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPredefinedLoadMetricSpecification` <a name="putPredefinedLoadMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.putPredefinedLoadMetricSpecification"></a>

```typescript
public putPredefinedLoadMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.putPredefinedLoadMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification</a>

---

##### `putPredefinedMetricPairSpecification` <a name="putPredefinedMetricPairSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.putPredefinedMetricPairSpecification"></a>

```typescript
public putPredefinedMetricPairSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.putPredefinedMetricPairSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification</a>

---

##### `putPredefinedScalingMetricSpecification` <a name="putPredefinedScalingMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.putPredefinedScalingMetricSpecification"></a>

```typescript
public putPredefinedScalingMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.putPredefinedScalingMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification</a>

---

##### `resetPredefinedLoadMetricSpecification` <a name="resetPredefinedLoadMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.resetPredefinedLoadMetricSpecification"></a>

```typescript
public resetPredefinedLoadMetricSpecification(): void
```

##### `resetPredefinedMetricPairSpecification` <a name="resetPredefinedMetricPairSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.resetPredefinedMetricPairSpecification"></a>

```typescript
public resetPredefinedMetricPairSpecification(): void
```

##### `resetPredefinedScalingMetricSpecification` <a name="resetPredefinedScalingMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.resetPredefinedScalingMetricSpecification"></a>

```typescript
public resetPredefinedScalingMetricSpecification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedLoadMetricSpecification">predefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedMetricPairSpecification">predefinedMetricPairSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedScalingMetricSpecification">predefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedLoadMetricSpecificationInput">predefinedLoadMetricSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedMetricPairSpecificationInput">predefinedMetricPairSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedScalingMetricSpecificationInput">predefinedScalingMetricSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedLoadMetricSpecification`<sup>Required</sup> <a name="predefinedLoadMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedLoadMetricSpecification"></a>

```typescript
public readonly predefinedLoadMetricSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference</a>

---

##### `predefinedMetricPairSpecification`<sup>Required</sup> <a name="predefinedMetricPairSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedMetricPairSpecification"></a>

```typescript
public readonly predefinedMetricPairSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference</a>

---

##### `predefinedScalingMetricSpecification`<sup>Required</sup> <a name="predefinedScalingMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedScalingMetricSpecification"></a>

```typescript
public readonly predefinedScalingMetricSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference</a>

---

##### `predefinedLoadMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedLoadMetricSpecificationInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedLoadMetricSpecificationInput"></a>

```typescript
public readonly predefinedLoadMetricSpecificationInput: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification</a>

---

##### `predefinedMetricPairSpecificationInput`<sup>Optional</sup> <a name="predefinedMetricPairSpecificationInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedMetricPairSpecificationInput"></a>

```typescript
public readonly predefinedMetricPairSpecificationInput: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification</a>

---

##### `predefinedScalingMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedScalingMetricSpecificationInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.predefinedScalingMetricSpecificationInput"></a>

```typescript
public readonly predefinedScalingMetricSpecificationInput: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification</a>

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification</a>

---


### AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference <a name="AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.predefinedMetricTypeInput">predefinedMetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedMetricTypeInput`<sup>Optional</sup> <a name="predefinedMetricTypeInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.predefinedMetricTypeInput"></a>

```typescript
public readonly predefinedMetricTypeInput: string;
```

- *Type:* string

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```typescript
public readonly resourceLabelInput: string;
```

- *Type:* string

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification</a>

---


### AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference <a name="AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.predefinedMetricTypeInput">predefinedMetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedMetricTypeInput`<sup>Optional</sup> <a name="predefinedMetricTypeInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.predefinedMetricTypeInput"></a>

```typescript
public readonly predefinedMetricTypeInput: string;
```

- *Type:* string

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.resourceLabelInput"></a>

```typescript
public readonly resourceLabelInput: string;
```

- *Type:* string

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification</a>

---


### AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference <a name="AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.predefinedMetricTypeInput">predefinedMetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedMetricTypeInput`<sup>Optional</sup> <a name="predefinedMetricTypeInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.predefinedMetricTypeInput"></a>

```typescript
public readonly predefinedMetricTypeInput: string;
```

- *Type:* string

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```typescript
public readonly resourceLabelInput: string;
```

- *Type:* string

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification</a>

---


### AutoscalingPolicyPredictiveScalingConfigurationOutputReference <a name="AutoscalingPolicyPredictiveScalingConfigurationOutputReference" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.putMetricSpecification">putMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.resetMaxCapacityBreachBehavior">resetMaxCapacityBreachBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.resetMaxCapacityBuffer">resetMaxCapacityBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.resetSchedulingBufferTime">resetSchedulingBufferTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricSpecification` <a name="putMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.putMetricSpecification"></a>

```typescript
public putMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.putMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification</a>

---

##### `resetMaxCapacityBreachBehavior` <a name="resetMaxCapacityBreachBehavior" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.resetMaxCapacityBreachBehavior"></a>

```typescript
public resetMaxCapacityBreachBehavior(): void
```

##### `resetMaxCapacityBuffer` <a name="resetMaxCapacityBuffer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.resetMaxCapacityBuffer"></a>

```typescript
public resetMaxCapacityBuffer(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSchedulingBufferTime` <a name="resetSchedulingBufferTime" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.resetSchedulingBufferTime"></a>

```typescript
public resetSchedulingBufferTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.metricSpecification">metricSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBreachBehaviorInput">maxCapacityBreachBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBufferInput">maxCapacityBufferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.metricSpecificationInput">metricSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.schedulingBufferTimeInput">schedulingBufferTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBreachBehavior">maxCapacityBreachBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBuffer">maxCapacityBuffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.schedulingBufferTime">schedulingBufferTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration">AutoscalingPolicyPredictiveScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricSpecification`<sup>Required</sup> <a name="metricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.metricSpecification"></a>

```typescript
public readonly metricSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference</a>

---

##### `maxCapacityBreachBehaviorInput`<sup>Optional</sup> <a name="maxCapacityBreachBehaviorInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBreachBehaviorInput"></a>

```typescript
public readonly maxCapacityBreachBehaviorInput: string;
```

- *Type:* string

---

##### `maxCapacityBufferInput`<sup>Optional</sup> <a name="maxCapacityBufferInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBufferInput"></a>

```typescript
public readonly maxCapacityBufferInput: string;
```

- *Type:* string

---

##### `metricSpecificationInput`<sup>Optional</sup> <a name="metricSpecificationInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.metricSpecificationInput"></a>

```typescript
public readonly metricSpecificationInput: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification">AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `schedulingBufferTimeInput`<sup>Optional</sup> <a name="schedulingBufferTimeInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.schedulingBufferTimeInput"></a>

```typescript
public readonly schedulingBufferTimeInput: string;
```

- *Type:* string

---

##### `maxCapacityBreachBehavior`<sup>Required</sup> <a name="maxCapacityBreachBehavior" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBreachBehavior"></a>

```typescript
public readonly maxCapacityBreachBehavior: string;
```

- *Type:* string

---

##### `maxCapacityBuffer`<sup>Required</sup> <a name="maxCapacityBuffer" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBuffer"></a>

```typescript
public readonly maxCapacityBuffer: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `schedulingBufferTime`<sup>Required</sup> <a name="schedulingBufferTime" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.schedulingBufferTime"></a>

```typescript
public readonly schedulingBufferTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingPolicyPredictiveScalingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyPredictiveScalingConfiguration">AutoscalingPolicyPredictiveScalingConfiguration</a>

---


### AutoscalingPolicyStepAdjustmentList <a name="AutoscalingPolicyStepAdjustmentList" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyStepAdjustmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.get"></a>

```typescript
public get(index: number): AutoscalingPolicyStepAdjustmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment">AutoscalingPolicyStepAdjustment</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingPolicyStepAdjustment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment">AutoscalingPolicyStepAdjustment</a>[]

---


### AutoscalingPolicyStepAdjustmentOutputReference <a name="AutoscalingPolicyStepAdjustmentOutputReference" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.resetMetricIntervalLowerBound">resetMetricIntervalLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.resetMetricIntervalUpperBound">resetMetricIntervalUpperBound</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricIntervalLowerBound` <a name="resetMetricIntervalLowerBound" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.resetMetricIntervalLowerBound"></a>

```typescript
public resetMetricIntervalLowerBound(): void
```

##### `resetMetricIntervalUpperBound` <a name="resetMetricIntervalUpperBound" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.resetMetricIntervalUpperBound"></a>

```typescript
public resetMetricIntervalUpperBound(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.metricIntervalLowerBoundInput">metricIntervalLowerBoundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.metricIntervalUpperBoundInput">metricIntervalUpperBoundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.scalingAdjustmentInput">scalingAdjustmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.metricIntervalLowerBound">metricIntervalLowerBound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.metricIntervalUpperBound">metricIntervalUpperBound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.scalingAdjustment">scalingAdjustment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment">AutoscalingPolicyStepAdjustment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricIntervalLowerBoundInput`<sup>Optional</sup> <a name="metricIntervalLowerBoundInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.metricIntervalLowerBoundInput"></a>

```typescript
public readonly metricIntervalLowerBoundInput: string;
```

- *Type:* string

---

##### `metricIntervalUpperBoundInput`<sup>Optional</sup> <a name="metricIntervalUpperBoundInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.metricIntervalUpperBoundInput"></a>

```typescript
public readonly metricIntervalUpperBoundInput: string;
```

- *Type:* string

---

##### `scalingAdjustmentInput`<sup>Optional</sup> <a name="scalingAdjustmentInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.scalingAdjustmentInput"></a>

```typescript
public readonly scalingAdjustmentInput: number;
```

- *Type:* number

---

##### `metricIntervalLowerBound`<sup>Required</sup> <a name="metricIntervalLowerBound" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.metricIntervalLowerBound"></a>

```typescript
public readonly metricIntervalLowerBound: string;
```

- *Type:* string

---

##### `metricIntervalUpperBound`<sup>Required</sup> <a name="metricIntervalUpperBound" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.metricIntervalUpperBound"></a>

```typescript
public readonly metricIntervalUpperBound: string;
```

- *Type:* string

---

##### `scalingAdjustment`<sup>Required</sup> <a name="scalingAdjustment" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.scalingAdjustment"></a>

```typescript
public readonly scalingAdjustment: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingPolicyStepAdjustment;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyStepAdjustment">AutoscalingPolicyStepAdjustment</a>

---


### AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList <a name="AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.get"></a>

```typescript
public get(index: number): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension</a>[]

---


### AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference <a name="AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension</a>

---


### AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference <a name="AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.putMetricDimension">putMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resetMetricDimension">resetMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDimension` <a name="putMetricDimension" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.putMetricDimension"></a>

```typescript
public putMetricDimension(value: IResolvable | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.putMetricDimension.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension</a>[]

---

##### `resetMetricDimension` <a name="resetMetricDimension" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resetMetricDimension"></a>

```typescript
public resetMetricDimension(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricDimension">metricDimension</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricDimensionInput">metricDimensionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricDimension`<sup>Required</sup> <a name="metricDimension" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricDimension"></a>

```typescript
public readonly metricDimension: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList</a>

---

##### `metricDimensionInput`<sup>Optional</sup> <a name="metricDimensionInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricDimensionInput"></a>

```typescript
public readonly metricDimensionInput: IResolvable | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension</a>[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification</a>

---


### AutoscalingPolicyTargetTrackingConfigurationOutputReference <a name="AutoscalingPolicyTargetTrackingConfigurationOutputReference" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.putCustomizedMetricSpecification">putCustomizedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.putPredefinedMetricSpecification">putPredefinedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.resetCustomizedMetricSpecification">resetCustomizedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.resetDisableScaleIn">resetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.resetPredefinedMetricSpecification">resetPredefinedMetricSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizedMetricSpecification` <a name="putCustomizedMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.putCustomizedMetricSpecification"></a>

```typescript
public putCustomizedMetricSpecification(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.putCustomizedMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification</a>

---

##### `putPredefinedMetricSpecification` <a name="putPredefinedMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.putPredefinedMetricSpecification"></a>

```typescript
public putPredefinedMetricSpecification(value: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.putPredefinedMetricSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification</a>

---

##### `resetCustomizedMetricSpecification` <a name="resetCustomizedMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.resetCustomizedMetricSpecification"></a>

```typescript
public resetCustomizedMetricSpecification(): void
```

##### `resetDisableScaleIn` <a name="resetDisableScaleIn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.resetDisableScaleIn"></a>

```typescript
public resetDisableScaleIn(): void
```

##### `resetPredefinedMetricSpecification` <a name="resetPredefinedMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.resetPredefinedMetricSpecification"></a>

```typescript
public resetPredefinedMetricSpecification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.customizedMetricSpecification">customizedMetricSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.predefinedMetricSpecification">predefinedMetricSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference">AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.customizedMetricSpecificationInput">customizedMetricSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.disableScaleInInput">disableScaleInInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.predefinedMetricSpecificationInput">predefinedMetricSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.disableScaleIn">disableScaleIn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration">AutoscalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customizedMetricSpecification`<sup>Required</sup> <a name="customizedMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.customizedMetricSpecification"></a>

```typescript
public readonly customizedMetricSpecification: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference</a>

---

##### `predefinedMetricSpecification`<sup>Required</sup> <a name="predefinedMetricSpecification" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.predefinedMetricSpecification"></a>

```typescript
public readonly predefinedMetricSpecification: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference">AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference</a>

---

##### `customizedMetricSpecificationInput`<sup>Optional</sup> <a name="customizedMetricSpecificationInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.customizedMetricSpecificationInput"></a>

```typescript
public readonly customizedMetricSpecificationInput: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification</a>

---

##### `disableScaleInInput`<sup>Optional</sup> <a name="disableScaleInInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.disableScaleInInput"></a>

```typescript
public readonly disableScaleInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `predefinedMetricSpecificationInput`<sup>Optional</sup> <a name="predefinedMetricSpecificationInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.predefinedMetricSpecificationInput"></a>

```typescript
public readonly predefinedMetricSpecificationInput: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification</a>

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `disableScaleIn`<sup>Required</sup> <a name="disableScaleIn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.disableScaleIn"></a>

```typescript
public readonly disableScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingPolicyTargetTrackingConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfiguration">AutoscalingPolicyTargetTrackingConfiguration</a>

---


### AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference <a name="AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingPolicy } from '@cdktf/aws-cdk'

new autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.resetResourceLabel">resetResourceLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceLabel` <a name="resetResourceLabel" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.resetResourceLabel"></a>

```typescript
public resetResourceLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricTypeInput">predefinedMetricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabelInput">resourceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType">predefinedMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel">resourceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedMetricTypeInput`<sup>Optional</sup> <a name="predefinedMetricTypeInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricTypeInput"></a>

```typescript
public readonly predefinedMetricTypeInput: string;
```

- *Type:* string

---

##### `resourceLabelInput`<sup>Optional</sup> <a name="resourceLabelInput" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```typescript
public readonly resourceLabelInput: string;
```

- *Type:* string

---

##### `predefinedMetricType`<sup>Required</sup> <a name="predefinedMetricType" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```typescript
public readonly predefinedMetricType: string;
```

- *Type:* string

---

##### `resourceLabel`<sup>Required</sup> <a name="resourceLabel" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel"></a>

```typescript
public readonly resourceLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingPolicy.AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification">AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification</a>

---



