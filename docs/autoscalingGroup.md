# `autoscalingGroup` Submodule <a name="`autoscalingGroup` Submodule" id="@cdktf/aws-cdk.autoscalingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingGroup <a name="AutoscalingGroup" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group aws_autoscaling_group}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroup(scope: Construct, id: string, config: AutoscalingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig">AutoscalingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig">AutoscalingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putInitialLifecycleHook">putInitialLifecycleHook</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putInstanceRefresh">putInstanceRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putMixedInstancesPolicy">putMixedInstancesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putWarmPool">putWarmPool</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetCapacityRebalance">resetCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetDefaultCooldown">resetDefaultCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetDesiredCapacity">resetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetEnabledMetrics">resetEnabledMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetForceDeleteWarmPool">resetForceDeleteWarmPool</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetHealthCheckGracePeriod">resetHealthCheckGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetHealthCheckType">resetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetInitialLifecycleHook">resetInitialLifecycleHook</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetInstanceRefresh">resetInstanceRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetLaunchConfiguration">resetLaunchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetLaunchTemplate">resetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetLoadBalancers">resetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetMaxInstanceLifetime">resetMaxInstanceLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetMetricsGranularity">resetMetricsGranularity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetMinElbCapacity">resetMinElbCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetMixedInstancesPolicy">resetMixedInstancesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetPlacementGroup">resetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetProtectFromScaleIn">resetProtectFromScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetServiceLinkedRoleArn">resetServiceLinkedRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetSuspendedProcesses">resetSuspendedProcesses</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetTargetGroupArns">resetTargetGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetTerminationPolicies">resetTerminationPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetVpcZoneIdentifier">resetVpcZoneIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetWaitForCapacityTimeout">resetWaitForCapacityTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetWaitForElbCapacity">resetWaitForElbCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetWarmPool">resetWarmPool</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInitialLifecycleHook` <a name="putInitialLifecycleHook" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putInitialLifecycleHook"></a>

```typescript
public putInitialLifecycleHook(value: IResolvable | AutoscalingGroupInitialLifecycleHook[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putInitialLifecycleHook.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>[]

---

##### `putInstanceRefresh` <a name="putInstanceRefresh" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putInstanceRefresh"></a>

```typescript
public putInstanceRefresh(value: AutoscalingGroupInstanceRefresh): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putInstanceRefresh.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a>

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putLaunchTemplate"></a>

```typescript
public putLaunchTemplate(value: AutoscalingGroupLaunchTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a>

---

##### `putMixedInstancesPolicy` <a name="putMixedInstancesPolicy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putMixedInstancesPolicy"></a>

```typescript
public putMixedInstancesPolicy(value: AutoscalingGroupMixedInstancesPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putMixedInstancesPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a>

---

##### `putTag` <a name="putTag" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putTag"></a>

```typescript
public putTag(value: IResolvable | AutoscalingGroupTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: AutoscalingGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

---

##### `putWarmPool` <a name="putWarmPool" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putWarmPool"></a>

```typescript
public putWarmPool(value: AutoscalingGroupWarmPool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.putWarmPool.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a>

---

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetCapacityRebalance` <a name="resetCapacityRebalance" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetCapacityRebalance"></a>

```typescript
public resetCapacityRebalance(): void
```

##### `resetDefaultCooldown` <a name="resetDefaultCooldown" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetDefaultCooldown"></a>

```typescript
public resetDefaultCooldown(): void
```

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetDesiredCapacity"></a>

```typescript
public resetDesiredCapacity(): void
```

##### `resetEnabledMetrics` <a name="resetEnabledMetrics" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetEnabledMetrics"></a>

```typescript
public resetEnabledMetrics(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetForceDeleteWarmPool` <a name="resetForceDeleteWarmPool" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetForceDeleteWarmPool"></a>

```typescript
public resetForceDeleteWarmPool(): void
```

##### `resetHealthCheckGracePeriod` <a name="resetHealthCheckGracePeriod" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetHealthCheckGracePeriod"></a>

```typescript
public resetHealthCheckGracePeriod(): void
```

##### `resetHealthCheckType` <a name="resetHealthCheckType" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetHealthCheckType"></a>

```typescript
public resetHealthCheckType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialLifecycleHook` <a name="resetInitialLifecycleHook" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetInitialLifecycleHook"></a>

```typescript
public resetInitialLifecycleHook(): void
```

##### `resetInstanceRefresh` <a name="resetInstanceRefresh" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetInstanceRefresh"></a>

```typescript
public resetInstanceRefresh(): void
```

##### `resetLaunchConfiguration` <a name="resetLaunchConfiguration" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetLaunchConfiguration"></a>

```typescript
public resetLaunchConfiguration(): void
```

##### `resetLaunchTemplate` <a name="resetLaunchTemplate" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetLaunchTemplate"></a>

```typescript
public resetLaunchTemplate(): void
```

##### `resetLoadBalancers` <a name="resetLoadBalancers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetLoadBalancers"></a>

```typescript
public resetLoadBalancers(): void
```

##### `resetMaxInstanceLifetime` <a name="resetMaxInstanceLifetime" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetMaxInstanceLifetime"></a>

```typescript
public resetMaxInstanceLifetime(): void
```

##### `resetMetricsGranularity` <a name="resetMetricsGranularity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetMetricsGranularity"></a>

```typescript
public resetMetricsGranularity(): void
```

##### `resetMinElbCapacity` <a name="resetMinElbCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetMinElbCapacity"></a>

```typescript
public resetMinElbCapacity(): void
```

##### `resetMixedInstancesPolicy` <a name="resetMixedInstancesPolicy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetMixedInstancesPolicy"></a>

```typescript
public resetMixedInstancesPolicy(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetPlacementGroup` <a name="resetPlacementGroup" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetPlacementGroup"></a>

```typescript
public resetPlacementGroup(): void
```

##### `resetProtectFromScaleIn` <a name="resetProtectFromScaleIn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetProtectFromScaleIn"></a>

```typescript
public resetProtectFromScaleIn(): void
```

##### `resetServiceLinkedRoleArn` <a name="resetServiceLinkedRoleArn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetServiceLinkedRoleArn"></a>

```typescript
public resetServiceLinkedRoleArn(): void
```

##### `resetSuspendedProcesses` <a name="resetSuspendedProcesses" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetSuspendedProcesses"></a>

```typescript
public resetSuspendedProcesses(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetGroupArns` <a name="resetTargetGroupArns" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetTargetGroupArns"></a>

```typescript
public resetTargetGroupArns(): void
```

##### `resetTerminationPolicies` <a name="resetTerminationPolicies" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetTerminationPolicies"></a>

```typescript
public resetTerminationPolicies(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcZoneIdentifier` <a name="resetVpcZoneIdentifier" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetVpcZoneIdentifier"></a>

```typescript
public resetVpcZoneIdentifier(): void
```

##### `resetWaitForCapacityTimeout` <a name="resetWaitForCapacityTimeout" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetWaitForCapacityTimeout"></a>

```typescript
public resetWaitForCapacityTimeout(): void
```

##### `resetWaitForElbCapacity` <a name="resetWaitForElbCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetWaitForElbCapacity"></a>

```typescript
public resetWaitForElbCapacity(): void
```

##### `resetWarmPool` <a name="resetWarmPool" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.resetWarmPool"></a>

```typescript
public resetWarmPool(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.isConstruct"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

autoscalingGroup.AutoscalingGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.isTerraformElement"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

autoscalingGroup.AutoscalingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.isTerraformResource"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

autoscalingGroup.AutoscalingGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.generateConfigForImport"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

autoscalingGroup.AutoscalingGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutoscalingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutoscalingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutoscalingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.initialLifecycleHook">initialLifecycleHook</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList">AutoscalingGroupInitialLifecycleHookList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.instanceRefresh">instanceRefresh</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference">AutoscalingGroupInstanceRefreshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference">AutoscalingGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.mixedInstancesPolicy">mixedInstancesPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference">AutoscalingGroupMixedInstancesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.tag">tag</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList">AutoscalingGroupTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference">AutoscalingGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.warmPool">warmPool</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference">AutoscalingGroupWarmPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.capacityRebalanceInput">capacityRebalanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.defaultCooldownInput">defaultCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.enabledMetricsInput">enabledMetricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.forceDeleteWarmPoolInput">forceDeleteWarmPoolInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.healthCheckGracePeriodInput">healthCheckGracePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.initialLifecycleHookInput">initialLifecycleHookInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.instanceRefreshInput">instanceRefreshInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.launchConfigurationInput">launchConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.loadBalancersInput">loadBalancersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.maxInstanceLifetimeInput">maxInstanceLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.metricsGranularityInput">metricsGranularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.minElbCapacityInput">minElbCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.mixedInstancesPolicyInput">mixedInstancesPolicyInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.placementGroupInput">placementGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.protectFromScaleInInput">protectFromScaleInInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.serviceLinkedRoleArnInput">serviceLinkedRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.suspendedProcessesInput">suspendedProcessesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.tagInput">tagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.targetGroupArnsInput">targetGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.terminationPoliciesInput">terminationPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.vpcZoneIdentifierInput">vpcZoneIdentifierInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.waitForCapacityTimeoutInput">waitForCapacityTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.waitForElbCapacityInput">waitForElbCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.warmPoolInput">warmPoolInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.capacityRebalance">capacityRebalance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.defaultCooldown">defaultCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.enabledMetrics">enabledMetrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.forceDeleteWarmPool">forceDeleteWarmPool</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.launchConfiguration">launchConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.loadBalancers">loadBalancers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.maxInstanceLifetime">maxInstanceLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.metricsGranularity">metricsGranularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.minElbCapacity">minElbCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.placementGroup">placementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.protectFromScaleIn">protectFromScaleIn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.serviceLinkedRoleArn">serviceLinkedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.suspendedProcesses">suspendedProcesses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.tags">tags</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.targetGroupArns">targetGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.terminationPolicies">terminationPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.vpcZoneIdentifier">vpcZoneIdentifier</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.waitForCapacityTimeout">waitForCapacityTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.waitForElbCapacity">waitForElbCapacity</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `initialLifecycleHook`<sup>Required</sup> <a name="initialLifecycleHook" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.initialLifecycleHook"></a>

```typescript
public readonly initialLifecycleHook: AutoscalingGroupInitialLifecycleHookList;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList">AutoscalingGroupInitialLifecycleHookList</a>

---

##### `instanceRefresh`<sup>Required</sup> <a name="instanceRefresh" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.instanceRefresh"></a>

```typescript
public readonly instanceRefresh: AutoscalingGroupInstanceRefreshOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference">AutoscalingGroupInstanceRefreshOutputReference</a>

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: AutoscalingGroupLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference">AutoscalingGroupLaunchTemplateOutputReference</a>

---

##### `mixedInstancesPolicy`<sup>Required</sup> <a name="mixedInstancesPolicy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.mixedInstancesPolicy"></a>

```typescript
public readonly mixedInstancesPolicy: AutoscalingGroupMixedInstancesPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference">AutoscalingGroupMixedInstancesPolicyOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.tag"></a>

```typescript
public readonly tag: AutoscalingGroupTagList;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList">AutoscalingGroupTagList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.timeouts"></a>

```typescript
public readonly timeouts: AutoscalingGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference">AutoscalingGroupTimeoutsOutputReference</a>

---

##### `warmPool`<sup>Required</sup> <a name="warmPool" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.warmPool"></a>

```typescript
public readonly warmPool: AutoscalingGroupWarmPoolOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference">AutoscalingGroupWarmPoolOutputReference</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `capacityRebalanceInput`<sup>Optional</sup> <a name="capacityRebalanceInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.capacityRebalanceInput"></a>

```typescript
public readonly capacityRebalanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultCooldownInput`<sup>Optional</sup> <a name="defaultCooldownInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.defaultCooldownInput"></a>

```typescript
public readonly defaultCooldownInput: number;
```

- *Type:* number

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.desiredCapacityInput"></a>

```typescript
public readonly desiredCapacityInput: number;
```

- *Type:* number

---

##### `enabledMetricsInput`<sup>Optional</sup> <a name="enabledMetricsInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.enabledMetricsInput"></a>

```typescript
public readonly enabledMetricsInput: string[];
```

- *Type:* string[]

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDeleteWarmPoolInput`<sup>Optional</sup> <a name="forceDeleteWarmPoolInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.forceDeleteWarmPoolInput"></a>

```typescript
public readonly forceDeleteWarmPoolInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckGracePeriodInput`<sup>Optional</sup> <a name="healthCheckGracePeriodInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.healthCheckGracePeriodInput"></a>

```typescript
public readonly healthCheckGracePeriodInput: number;
```

- *Type:* number

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.healthCheckTypeInput"></a>

```typescript
public readonly healthCheckTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialLifecycleHookInput`<sup>Optional</sup> <a name="initialLifecycleHookInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.initialLifecycleHookInput"></a>

```typescript
public readonly initialLifecycleHookInput: IResolvable | AutoscalingGroupInitialLifecycleHook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>[]

---

##### `instanceRefreshInput`<sup>Optional</sup> <a name="instanceRefreshInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.instanceRefreshInput"></a>

```typescript
public readonly instanceRefreshInput: AutoscalingGroupInstanceRefresh;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a>

---

##### `launchConfigurationInput`<sup>Optional</sup> <a name="launchConfigurationInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.launchConfigurationInput"></a>

```typescript
public readonly launchConfigurationInput: string;
```

- *Type:* string

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.launchTemplateInput"></a>

```typescript
public readonly launchTemplateInput: AutoscalingGroupLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a>

---

##### `loadBalancersInput`<sup>Optional</sup> <a name="loadBalancersInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.loadBalancersInput"></a>

```typescript
public readonly loadBalancersInput: string[];
```

- *Type:* string[]

---

##### `maxInstanceLifetimeInput`<sup>Optional</sup> <a name="maxInstanceLifetimeInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.maxInstanceLifetimeInput"></a>

```typescript
public readonly maxInstanceLifetimeInput: number;
```

- *Type:* number

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `metricsGranularityInput`<sup>Optional</sup> <a name="metricsGranularityInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.metricsGranularityInput"></a>

```typescript
public readonly metricsGranularityInput: string;
```

- *Type:* string

---

##### `minElbCapacityInput`<sup>Optional</sup> <a name="minElbCapacityInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.minElbCapacityInput"></a>

```typescript
public readonly minElbCapacityInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `mixedInstancesPolicyInput`<sup>Optional</sup> <a name="mixedInstancesPolicyInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.mixedInstancesPolicyInput"></a>

```typescript
public readonly mixedInstancesPolicyInput: AutoscalingGroupMixedInstancesPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `placementGroupInput`<sup>Optional</sup> <a name="placementGroupInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.placementGroupInput"></a>

```typescript
public readonly placementGroupInput: string;
```

- *Type:* string

---

##### `protectFromScaleInInput`<sup>Optional</sup> <a name="protectFromScaleInInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.protectFromScaleInInput"></a>

```typescript
public readonly protectFromScaleInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceLinkedRoleArnInput`<sup>Optional</sup> <a name="serviceLinkedRoleArnInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.serviceLinkedRoleArnInput"></a>

```typescript
public readonly serviceLinkedRoleArnInput: string;
```

- *Type:* string

---

##### `suspendedProcessesInput`<sup>Optional</sup> <a name="suspendedProcessesInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.suspendedProcessesInput"></a>

```typescript
public readonly suspendedProcessesInput: string[];
```

- *Type:* string[]

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | AutoscalingGroupTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `targetGroupArnsInput`<sup>Optional</sup> <a name="targetGroupArnsInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.targetGroupArnsInput"></a>

```typescript
public readonly targetGroupArnsInput: string[];
```

- *Type:* string[]

---

##### `terminationPoliciesInput`<sup>Optional</sup> <a name="terminationPoliciesInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.terminationPoliciesInput"></a>

```typescript
public readonly terminationPoliciesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AutoscalingGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

---

##### `vpcZoneIdentifierInput`<sup>Optional</sup> <a name="vpcZoneIdentifierInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.vpcZoneIdentifierInput"></a>

```typescript
public readonly vpcZoneIdentifierInput: string[];
```

- *Type:* string[]

---

##### `waitForCapacityTimeoutInput`<sup>Optional</sup> <a name="waitForCapacityTimeoutInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.waitForCapacityTimeoutInput"></a>

```typescript
public readonly waitForCapacityTimeoutInput: string;
```

- *Type:* string

---

##### `waitForElbCapacityInput`<sup>Optional</sup> <a name="waitForElbCapacityInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.waitForElbCapacityInput"></a>

```typescript
public readonly waitForElbCapacityInput: number;
```

- *Type:* number

---

##### `warmPoolInput`<sup>Optional</sup> <a name="warmPoolInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.warmPoolInput"></a>

```typescript
public readonly warmPoolInput: AutoscalingGroupWarmPool;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `capacityRebalance`<sup>Required</sup> <a name="capacityRebalance" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.capacityRebalance"></a>

```typescript
public readonly capacityRebalance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultCooldown`<sup>Required</sup> <a name="defaultCooldown" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.defaultCooldown"></a>

```typescript
public readonly defaultCooldown: number;
```

- *Type:* number

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

---

##### `enabledMetrics`<sup>Required</sup> <a name="enabledMetrics" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.enabledMetrics"></a>

```typescript
public readonly enabledMetrics: string[];
```

- *Type:* string[]

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDeleteWarmPool`<sup>Required</sup> <a name="forceDeleteWarmPool" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.forceDeleteWarmPool"></a>

```typescript
public readonly forceDeleteWarmPool: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckGracePeriod`<sup>Required</sup> <a name="healthCheckGracePeriod" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: number;
```

- *Type:* number

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `launchConfiguration`<sup>Required</sup> <a name="launchConfiguration" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.launchConfiguration"></a>

```typescript
public readonly launchConfiguration: string;
```

- *Type:* string

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.loadBalancers"></a>

```typescript
public readonly loadBalancers: string[];
```

- *Type:* string[]

---

##### `maxInstanceLifetime`<sup>Required</sup> <a name="maxInstanceLifetime" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.maxInstanceLifetime"></a>

```typescript
public readonly maxInstanceLifetime: number;
```

- *Type:* number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `metricsGranularity`<sup>Required</sup> <a name="metricsGranularity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.metricsGranularity"></a>

```typescript
public readonly metricsGranularity: string;
```

- *Type:* string

---

##### `minElbCapacity`<sup>Required</sup> <a name="minElbCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.minElbCapacity"></a>

```typescript
public readonly minElbCapacity: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

---

##### `protectFromScaleIn`<sup>Required</sup> <a name="protectFromScaleIn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.protectFromScaleIn"></a>

```typescript
public readonly protectFromScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceLinkedRoleArn`<sup>Required</sup> <a name="serviceLinkedRoleArn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.serviceLinkedRoleArn"></a>

```typescript
public readonly serviceLinkedRoleArn: string;
```

- *Type:* string

---

##### `suspendedProcesses`<sup>Required</sup> <a name="suspendedProcesses" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.suspendedProcesses"></a>

```typescript
public readonly suspendedProcesses: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.tags"></a>

```typescript
public readonly tags: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `targetGroupArns`<sup>Required</sup> <a name="targetGroupArns" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.targetGroupArns"></a>

```typescript
public readonly targetGroupArns: string[];
```

- *Type:* string[]

---

##### `terminationPolicies`<sup>Required</sup> <a name="terminationPolicies" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.terminationPolicies"></a>

```typescript
public readonly terminationPolicies: string[];
```

- *Type:* string[]

---

##### `vpcZoneIdentifier`<sup>Required</sup> <a name="vpcZoneIdentifier" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.vpcZoneIdentifier"></a>

```typescript
public readonly vpcZoneIdentifier: string[];
```

- *Type:* string[]

---

##### `waitForCapacityTimeout`<sup>Required</sup> <a name="waitForCapacityTimeout" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.waitForCapacityTimeout"></a>

```typescript
public readonly waitForCapacityTimeout: string;
```

- *Type:* string

---

##### `waitForElbCapacity`<sup>Required</sup> <a name="waitForElbCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.waitForElbCapacity"></a>

```typescript
public readonly waitForElbCapacity: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingGroupConfig <a name="AutoscalingGroupConfig" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupConfig: autoscalingGroup.AutoscalingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.maxSize">maxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#max_size AutoscalingGroup#max_size}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_size AutoscalingGroup#min_size}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#availability_zones AutoscalingGroup#availability_zones}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.capacityRebalance">capacityRebalance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#capacity_rebalance AutoscalingGroup#capacity_rebalance}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.defaultCooldown">defaultCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#default_cooldown AutoscalingGroup#default_cooldown}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#desired_capacity AutoscalingGroup#desired_capacity}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.enabledMetrics">enabledMetrics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#enabled_metrics AutoscalingGroup#enabled_metrics}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#force_delete AutoscalingGroup#force_delete}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.forceDeleteWarmPool">forceDeleteWarmPool</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.healthCheckGracePeriod">healthCheckGracePeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#health_check_grace_period AutoscalingGroup#health_check_grace_period}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#health_check_type AutoscalingGroup#health_check_type}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#id AutoscalingGroup#id}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.initialLifecycleHook">initialLifecycleHook</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>[]</code> | initial_lifecycle_hook block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.instanceRefresh">instanceRefresh</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a></code> | instance_refresh block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.launchConfiguration">launchConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_configuration AutoscalingGroup#launch_configuration}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.loadBalancers">loadBalancers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#load_balancers AutoscalingGroup#load_balancers}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.maxInstanceLifetime">maxInstanceLifetime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.metricsGranularity">metricsGranularity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#metrics_granularity AutoscalingGroup#metrics_granularity}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.minElbCapacity">minElbCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_elb_capacity AutoscalingGroup#min_elb_capacity}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.mixedInstancesPolicy">mixedInstancesPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a></code> | mixed_instances_policy block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name AutoscalingGroup#name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name_prefix AutoscalingGroup#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.placementGroup">placementGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#placement_group AutoscalingGroup#placement_group}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.protectFromScaleIn">protectFromScaleIn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.serviceLinkedRoleArn">serviceLinkedRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.suspendedProcesses">suspendedProcesses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#suspended_processes AutoscalingGroup#suspended_processes}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.tag">tag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>[]</code> | tag block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#tags AutoscalingGroup#tags}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.targetGroupArns">targetGroupArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#target_group_arns AutoscalingGroup#target_group_arns}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.terminationPolicies">terminationPolicies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#termination_policies AutoscalingGroup#termination_policies}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.vpcZoneIdentifier">vpcZoneIdentifier</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.waitForCapacityTimeout">waitForCapacityTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.waitForElbCapacity">waitForElbCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.warmPool">warmPool</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a></code> | warm_pool block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#max_size AutoscalingGroup#max_size}.

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_size AutoscalingGroup#min_size}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#availability_zones AutoscalingGroup#availability_zones}.

---

##### `capacityRebalance`<sup>Optional</sup> <a name="capacityRebalance" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.capacityRebalance"></a>

```typescript
public readonly capacityRebalance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#capacity_rebalance AutoscalingGroup#capacity_rebalance}.

---

##### `defaultCooldown`<sup>Optional</sup> <a name="defaultCooldown" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.defaultCooldown"></a>

```typescript
public readonly defaultCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#default_cooldown AutoscalingGroup#default_cooldown}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#desired_capacity AutoscalingGroup#desired_capacity}.

---

##### `enabledMetrics`<sup>Optional</sup> <a name="enabledMetrics" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.enabledMetrics"></a>

```typescript
public readonly enabledMetrics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#enabled_metrics AutoscalingGroup#enabled_metrics}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#force_delete AutoscalingGroup#force_delete}.

---

##### `forceDeleteWarmPool`<sup>Optional</sup> <a name="forceDeleteWarmPool" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.forceDeleteWarmPool"></a>

```typescript
public readonly forceDeleteWarmPool: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}.

---

##### `healthCheckGracePeriod`<sup>Optional</sup> <a name="healthCheckGracePeriod" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.healthCheckGracePeriod"></a>

```typescript
public readonly healthCheckGracePeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#health_check_grace_period AutoscalingGroup#health_check_grace_period}.

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#health_check_type AutoscalingGroup#health_check_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#id AutoscalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialLifecycleHook`<sup>Optional</sup> <a name="initialLifecycleHook" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.initialLifecycleHook"></a>

```typescript
public readonly initialLifecycleHook: IResolvable | AutoscalingGroupInitialLifecycleHook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>[]

initial_lifecycle_hook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#initial_lifecycle_hook AutoscalingGroup#initial_lifecycle_hook}

---

##### `instanceRefresh`<sup>Optional</sup> <a name="instanceRefresh" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.instanceRefresh"></a>

```typescript
public readonly instanceRefresh: AutoscalingGroupInstanceRefresh;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a>

instance_refresh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#instance_refresh AutoscalingGroup#instance_refresh}

---

##### `launchConfiguration`<sup>Optional</sup> <a name="launchConfiguration" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.launchConfiguration"></a>

```typescript
public readonly launchConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_configuration AutoscalingGroup#launch_configuration}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: AutoscalingGroupLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template AutoscalingGroup#launch_template}

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.loadBalancers"></a>

```typescript
public readonly loadBalancers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#load_balancers AutoscalingGroup#load_balancers}.

---

##### `maxInstanceLifetime`<sup>Optional</sup> <a name="maxInstanceLifetime" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.maxInstanceLifetime"></a>

```typescript
public readonly maxInstanceLifetime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}.

---

##### `metricsGranularity`<sup>Optional</sup> <a name="metricsGranularity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.metricsGranularity"></a>

```typescript
public readonly metricsGranularity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#metrics_granularity AutoscalingGroup#metrics_granularity}.

---

##### `minElbCapacity`<sup>Optional</sup> <a name="minElbCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.minElbCapacity"></a>

```typescript
public readonly minElbCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_elb_capacity AutoscalingGroup#min_elb_capacity}.

---

##### `mixedInstancesPolicy`<sup>Optional</sup> <a name="mixedInstancesPolicy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.mixedInstancesPolicy"></a>

```typescript
public readonly mixedInstancesPolicy: AutoscalingGroupMixedInstancesPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a>

mixed_instances_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#mixed_instances_policy AutoscalingGroup#mixed_instances_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name AutoscalingGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name_prefix AutoscalingGroup#name_prefix}.

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#placement_group AutoscalingGroup#placement_group}.

---

##### `protectFromScaleIn`<sup>Optional</sup> <a name="protectFromScaleIn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.protectFromScaleIn"></a>

```typescript
public readonly protectFromScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}.

---

##### `serviceLinkedRoleArn`<sup>Optional</sup> <a name="serviceLinkedRoleArn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.serviceLinkedRoleArn"></a>

```typescript
public readonly serviceLinkedRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}.

---

##### `suspendedProcesses`<sup>Optional</sup> <a name="suspendedProcesses" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.suspendedProcesses"></a>

```typescript
public readonly suspendedProcesses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#suspended_processes AutoscalingGroup#suspended_processes}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.tag"></a>

```typescript
public readonly tag: IResolvable | AutoscalingGroupTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#tag AutoscalingGroup#tag}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#tags AutoscalingGroup#tags}.

---

##### `targetGroupArns`<sup>Optional</sup> <a name="targetGroupArns" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.targetGroupArns"></a>

```typescript
public readonly targetGroupArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#target_group_arns AutoscalingGroup#target_group_arns}.

---

##### `terminationPolicies`<sup>Optional</sup> <a name="terminationPolicies" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.terminationPolicies"></a>

```typescript
public readonly terminationPolicies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#termination_policies AutoscalingGroup#termination_policies}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AutoscalingGroupTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#timeouts AutoscalingGroup#timeouts}

---

##### `vpcZoneIdentifier`<sup>Optional</sup> <a name="vpcZoneIdentifier" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.vpcZoneIdentifier"></a>

```typescript
public readonly vpcZoneIdentifier: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}.

---

##### `waitForCapacityTimeout`<sup>Optional</sup> <a name="waitForCapacityTimeout" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.waitForCapacityTimeout"></a>

```typescript
public readonly waitForCapacityTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}.

---

##### `waitForElbCapacity`<sup>Optional</sup> <a name="waitForElbCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.waitForElbCapacity"></a>

```typescript
public readonly waitForElbCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}.

---

##### `warmPool`<sup>Optional</sup> <a name="warmPool" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupConfig.property.warmPool"></a>

```typescript
public readonly warmPool: AutoscalingGroupWarmPool;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a>

warm_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#warm_pool AutoscalingGroup#warm_pool}

---

### AutoscalingGroupInitialLifecycleHook <a name="AutoscalingGroupInitialLifecycleHook" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupInitialLifecycleHook: autoscalingGroup.AutoscalingGroupInitialLifecycleHook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.lifecycleTransition">lifecycleTransition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#lifecycle_transition AutoscalingGroup#lifecycle_transition}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name AutoscalingGroup#name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.defaultResult">defaultResult</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#default_result AutoscalingGroup#default_result}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#heartbeat_timeout AutoscalingGroup#heartbeat_timeout}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.notificationMetadata">notificationMetadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#notification_metadata AutoscalingGroup#notification_metadata}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.notificationTargetArn">notificationTargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#notification_target_arn AutoscalingGroup#notification_target_arn}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#role_arn AutoscalingGroup#role_arn}. |

---

##### `lifecycleTransition`<sup>Required</sup> <a name="lifecycleTransition" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.lifecycleTransition"></a>

```typescript
public readonly lifecycleTransition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#lifecycle_transition AutoscalingGroup#lifecycle_transition}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name AutoscalingGroup#name}.

---

##### `defaultResult`<sup>Optional</sup> <a name="defaultResult" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.defaultResult"></a>

```typescript
public readonly defaultResult: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#default_result AutoscalingGroup#default_result}.

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="heartbeatTimeout" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.heartbeatTimeout"></a>

```typescript
public readonly heartbeatTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#heartbeat_timeout AutoscalingGroup#heartbeat_timeout}.

---

##### `notificationMetadata`<sup>Optional</sup> <a name="notificationMetadata" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.notificationMetadata"></a>

```typescript
public readonly notificationMetadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#notification_metadata AutoscalingGroup#notification_metadata}.

---

##### `notificationTargetArn`<sup>Optional</sup> <a name="notificationTargetArn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.notificationTargetArn"></a>

```typescript
public readonly notificationTargetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#notification_target_arn AutoscalingGroup#notification_target_arn}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#role_arn AutoscalingGroup#role_arn}.

---

### AutoscalingGroupInstanceRefresh <a name="AutoscalingGroupInstanceRefresh" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupInstanceRefresh: autoscalingGroup.AutoscalingGroupInstanceRefresh = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.strategy">strategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#strategy AutoscalingGroup#strategy}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.preferences">preferences</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a></code> | preferences block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.triggers">triggers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#triggers AutoscalingGroup#triggers}. |

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#strategy AutoscalingGroup#strategy}.

---

##### `preferences`<sup>Optional</sup> <a name="preferences" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.preferences"></a>

```typescript
public readonly preferences: AutoscalingGroupInstanceRefreshPreferences;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a>

preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#preferences AutoscalingGroup#preferences}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh.property.triggers"></a>

```typescript
public readonly triggers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#triggers AutoscalingGroup#triggers}.

---

### AutoscalingGroupInstanceRefreshPreferences <a name="AutoscalingGroupInstanceRefreshPreferences" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupInstanceRefreshPreferences: autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.checkpointDelay">checkpointDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#checkpoint_delay AutoscalingGroup#checkpoint_delay}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.checkpointPercentages">checkpointPercentages</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#checkpoint_percentages AutoscalingGroup#checkpoint_percentages}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.instanceWarmup">instanceWarmup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#instance_warmup AutoscalingGroup#instance_warmup}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.minHealthyPercentage">minHealthyPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_healthy_percentage AutoscalingGroup#min_healthy_percentage}. |

---

##### `checkpointDelay`<sup>Optional</sup> <a name="checkpointDelay" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.checkpointDelay"></a>

```typescript
public readonly checkpointDelay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#checkpoint_delay AutoscalingGroup#checkpoint_delay}.

---

##### `checkpointPercentages`<sup>Optional</sup> <a name="checkpointPercentages" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.checkpointPercentages"></a>

```typescript
public readonly checkpointPercentages: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#checkpoint_percentages AutoscalingGroup#checkpoint_percentages}.

---

##### `instanceWarmup`<sup>Optional</sup> <a name="instanceWarmup" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.instanceWarmup"></a>

```typescript
public readonly instanceWarmup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#instance_warmup AutoscalingGroup#instance_warmup}.

---

##### `minHealthyPercentage`<sup>Optional</sup> <a name="minHealthyPercentage" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences.property.minHealthyPercentage"></a>

```typescript
public readonly minHealthyPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_healthy_percentage AutoscalingGroup#min_healthy_percentage}.

---

### AutoscalingGroupLaunchTemplate <a name="AutoscalingGroupLaunchTemplate" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupLaunchTemplate: autoscalingGroup.AutoscalingGroupLaunchTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#id AutoscalingGroup#id}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name AutoscalingGroup#name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#version AutoscalingGroup#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#id AutoscalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#name AutoscalingGroup#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#version AutoscalingGroup#version}.

---

### AutoscalingGroupMixedInstancesPolicy <a name="AutoscalingGroupMixedInstancesPolicy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupMixedInstancesPolicy: autoscalingGroup.AutoscalingGroupMixedInstancesPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy.property.instancesDistribution">instancesDistribution</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a></code> | instances_distribution block. |

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: AutoscalingGroupMixedInstancesPolicyLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template AutoscalingGroup#launch_template}

---

##### `instancesDistribution`<sup>Optional</sup> <a name="instancesDistribution" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy.property.instancesDistribution"></a>

```typescript
public readonly instancesDistribution: AutoscalingGroupMixedInstancesPolicyInstancesDistribution;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a>

instances_distribution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#instances_distribution AutoscalingGroup#instances_distribution}

---

### AutoscalingGroupMixedInstancesPolicyInstancesDistribution <a name="AutoscalingGroupMixedInstancesPolicyInstancesDistribution" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupMixedInstancesPolicyInstancesDistribution: autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandAllocationStrategy">onDemandAllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#on_demand_allocation_strategy AutoscalingGroup#on_demand_allocation_strategy}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandBaseCapacity">onDemandBaseCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#on_demand_base_capacity AutoscalingGroup#on_demand_base_capacity}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandPercentageAboveBaseCapacity">onDemandPercentageAboveBaseCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#on_demand_percentage_above_base_capacity AutoscalingGroup#on_demand_percentage_above_base_capacity}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotAllocationStrategy">spotAllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#spot_allocation_strategy AutoscalingGroup#spot_allocation_strategy}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotInstancePools">spotInstancePools</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#spot_instance_pools AutoscalingGroup#spot_instance_pools}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotMaxPrice">spotMaxPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#spot_max_price AutoscalingGroup#spot_max_price}. |

---

##### `onDemandAllocationStrategy`<sup>Optional</sup> <a name="onDemandAllocationStrategy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandAllocationStrategy"></a>

```typescript
public readonly onDemandAllocationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#on_demand_allocation_strategy AutoscalingGroup#on_demand_allocation_strategy}.

---

##### `onDemandBaseCapacity`<sup>Optional</sup> <a name="onDemandBaseCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandBaseCapacity"></a>

```typescript
public readonly onDemandBaseCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#on_demand_base_capacity AutoscalingGroup#on_demand_base_capacity}.

---

##### `onDemandPercentageAboveBaseCapacity`<sup>Optional</sup> <a name="onDemandPercentageAboveBaseCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.onDemandPercentageAboveBaseCapacity"></a>

```typescript
public readonly onDemandPercentageAboveBaseCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#on_demand_percentage_above_base_capacity AutoscalingGroup#on_demand_percentage_above_base_capacity}.

---

##### `spotAllocationStrategy`<sup>Optional</sup> <a name="spotAllocationStrategy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotAllocationStrategy"></a>

```typescript
public readonly spotAllocationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#spot_allocation_strategy AutoscalingGroup#spot_allocation_strategy}.

---

##### `spotInstancePools`<sup>Optional</sup> <a name="spotInstancePools" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotInstancePools"></a>

```typescript
public readonly spotInstancePools: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#spot_instance_pools AutoscalingGroup#spot_instance_pools}.

---

##### `spotMaxPrice`<sup>Optional</sup> <a name="spotMaxPrice" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution.property.spotMaxPrice"></a>

```typescript
public readonly spotMaxPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#spot_max_price AutoscalingGroup#spot_max_price}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplate <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplate" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupMixedInstancesPolicyLaunchTemplate: autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a></code> | launch_template_specification block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate.property.override">override</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>[]</code> | override block. |

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate.property.launchTemplateSpecification"></a>

```typescript
public readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_specification AutoscalingGroup#launch_template_specification}

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate.property.override"></a>

```typescript
public readonly override: IResolvable | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>[]

override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#override AutoscalingGroup#override}

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification: autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#version AutoscalingGroup#version}. |

---

##### `launchTemplateId`<sup>Optional</sup> <a name="launchTemplateId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#version AutoscalingGroup#version}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupMixedInstancesPolicyLaunchTemplateOverride: autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#instance_type AutoscalingGroup#instance_type}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a></code> | launch_template_specification block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.weightedCapacity">weightedCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#weighted_capacity AutoscalingGroup#weighted_capacity}. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#instance_type AutoscalingGroup#instance_type}.

---

##### `launchTemplateSpecification`<sup>Optional</sup> <a name="launchTemplateSpecification" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.launchTemplateSpecification"></a>

```typescript
public readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_specification AutoscalingGroup#launch_template_specification}

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#weighted_capacity AutoscalingGroup#weighted_capacity}.

---

### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification: autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#version AutoscalingGroup#version}. |

---

##### `launchTemplateId`<sup>Optional</sup> <a name="launchTemplateId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}.

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#version AutoscalingGroup#version}.

---

### AutoscalingGroupTag <a name="AutoscalingGroupTag" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupTag: autoscalingGroup.AutoscalingGroupTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#key AutoscalingGroup#key}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag.property.propagateAtLaunch">propagateAtLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#propagate_at_launch AutoscalingGroup#propagate_at_launch}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#value AutoscalingGroup#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#key AutoscalingGroup#key}.

---

##### `propagateAtLaunch`<sup>Required</sup> <a name="propagateAtLaunch" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag.property.propagateAtLaunch"></a>

```typescript
public readonly propagateAtLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#propagate_at_launch AutoscalingGroup#propagate_at_launch}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#value AutoscalingGroup#value}.

---

### AutoscalingGroupTimeouts <a name="AutoscalingGroupTimeouts" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeouts.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupTimeouts: autoscalingGroup.AutoscalingGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}.

---

### AutoscalingGroupWarmPool <a name="AutoscalingGroupWarmPool" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

const autoscalingGroupWarmPool: autoscalingGroup.AutoscalingGroupWarmPool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool.property.maxGroupPreparedCapacity">maxGroupPreparedCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#max_group_prepared_capacity AutoscalingGroup#max_group_prepared_capacity}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_size AutoscalingGroup#min_size}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool.property.poolState">poolState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#pool_state AutoscalingGroup#pool_state}. |

---

##### `maxGroupPreparedCapacity`<sup>Optional</sup> <a name="maxGroupPreparedCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool.property.maxGroupPreparedCapacity"></a>

```typescript
public readonly maxGroupPreparedCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#max_group_prepared_capacity AutoscalingGroup#max_group_prepared_capacity}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#min_size AutoscalingGroup#min_size}.

---

##### `poolState`<sup>Optional</sup> <a name="poolState" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool.property.poolState"></a>

```typescript
public readonly poolState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group#pool_state AutoscalingGroup#pool_state}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingGroupInitialLifecycleHookList <a name="AutoscalingGroupInitialLifecycleHookList" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupInitialLifecycleHookList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.get"></a>

```typescript
public get(index: number): AutoscalingGroupInitialLifecycleHookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupInitialLifecycleHook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>[]

---


### AutoscalingGroupInitialLifecycleHookOutputReference <a name="AutoscalingGroupInitialLifecycleHookOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetDefaultResult">resetDefaultResult</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetHeartbeatTimeout">resetHeartbeatTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetNotificationMetadata">resetNotificationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetNotificationTargetArn">resetNotificationTargetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultResult` <a name="resetDefaultResult" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetDefaultResult"></a>

```typescript
public resetDefaultResult(): void
```

##### `resetHeartbeatTimeout` <a name="resetHeartbeatTimeout" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetHeartbeatTimeout"></a>

```typescript
public resetHeartbeatTimeout(): void
```

##### `resetNotificationMetadata` <a name="resetNotificationMetadata" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetNotificationMetadata"></a>

```typescript
public resetNotificationMetadata(): void
```

##### `resetNotificationTargetArn` <a name="resetNotificationTargetArn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetNotificationTargetArn"></a>

```typescript
public resetNotificationTargetArn(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.defaultResultInput">defaultResultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.heartbeatTimeoutInput">heartbeatTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.lifecycleTransitionInput">lifecycleTransitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationMetadataInput">notificationMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationTargetArnInput">notificationTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.defaultResult">defaultResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.lifecycleTransition">lifecycleTransition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationMetadata">notificationMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationTargetArn">notificationTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultResultInput`<sup>Optional</sup> <a name="defaultResultInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.defaultResultInput"></a>

```typescript
public readonly defaultResultInput: string;
```

- *Type:* string

---

##### `heartbeatTimeoutInput`<sup>Optional</sup> <a name="heartbeatTimeoutInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.heartbeatTimeoutInput"></a>

```typescript
public readonly heartbeatTimeoutInput: number;
```

- *Type:* number

---

##### `lifecycleTransitionInput`<sup>Optional</sup> <a name="lifecycleTransitionInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.lifecycleTransitionInput"></a>

```typescript
public readonly lifecycleTransitionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationMetadataInput`<sup>Optional</sup> <a name="notificationMetadataInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationMetadataInput"></a>

```typescript
public readonly notificationMetadataInput: string;
```

- *Type:* string

---

##### `notificationTargetArnInput`<sup>Optional</sup> <a name="notificationTargetArnInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationTargetArnInput"></a>

```typescript
public readonly notificationTargetArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `defaultResult`<sup>Required</sup> <a name="defaultResult" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.defaultResult"></a>

```typescript
public readonly defaultResult: string;
```

- *Type:* string

---

##### `heartbeatTimeout`<sup>Required</sup> <a name="heartbeatTimeout" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.heartbeatTimeout"></a>

```typescript
public readonly heartbeatTimeout: number;
```

- *Type:* number

---

##### `lifecycleTransition`<sup>Required</sup> <a name="lifecycleTransition" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.lifecycleTransition"></a>

```typescript
public readonly lifecycleTransition: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationMetadata`<sup>Required</sup> <a name="notificationMetadata" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationMetadata"></a>

```typescript
public readonly notificationMetadata: string;
```

- *Type:* string

---

##### `notificationTargetArn`<sup>Required</sup> <a name="notificationTargetArn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.notificationTargetArn"></a>

```typescript
public readonly notificationTargetArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupInitialLifecycleHook;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInitialLifecycleHook">AutoscalingGroupInitialLifecycleHook</a>

---


### AutoscalingGroupInstanceRefreshOutputReference <a name="AutoscalingGroupInstanceRefreshOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.putPreferences">putPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resetPreferences">resetPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreferences` <a name="putPreferences" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.putPreferences"></a>

```typescript
public putPreferences(value: AutoscalingGroupInstanceRefreshPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.putPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a>

---

##### `resetPreferences` <a name="resetPreferences" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resetPreferences"></a>

```typescript
public resetPreferences(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.resetTriggers"></a>

```typescript
public resetTriggers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.preferences">preferences</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference">AutoscalingGroupInstanceRefreshPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.preferencesInput">preferencesInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.triggersInput">triggersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.triggers">triggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferences`<sup>Required</sup> <a name="preferences" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.preferences"></a>

```typescript
public readonly preferences: AutoscalingGroupInstanceRefreshPreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference">AutoscalingGroupInstanceRefreshPreferencesOutputReference</a>

---

##### `preferencesInput`<sup>Optional</sup> <a name="preferencesInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.preferencesInput"></a>

```typescript
public readonly preferencesInput: AutoscalingGroupInstanceRefreshPreferences;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a>

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.triggersInput"></a>

```typescript
public readonly triggersInput: string[];
```

- *Type:* string[]

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.triggers"></a>

```typescript
public readonly triggers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupInstanceRefresh;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefresh">AutoscalingGroupInstanceRefresh</a>

---


### AutoscalingGroupInstanceRefreshPreferencesOutputReference <a name="AutoscalingGroupInstanceRefreshPreferencesOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetCheckpointDelay">resetCheckpointDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetCheckpointPercentages">resetCheckpointPercentages</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetInstanceWarmup">resetInstanceWarmup</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetMinHealthyPercentage">resetMinHealthyPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckpointDelay` <a name="resetCheckpointDelay" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetCheckpointDelay"></a>

```typescript
public resetCheckpointDelay(): void
```

##### `resetCheckpointPercentages` <a name="resetCheckpointPercentages" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetCheckpointPercentages"></a>

```typescript
public resetCheckpointPercentages(): void
```

##### `resetInstanceWarmup` <a name="resetInstanceWarmup" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetInstanceWarmup"></a>

```typescript
public resetInstanceWarmup(): void
```

##### `resetMinHealthyPercentage` <a name="resetMinHealthyPercentage" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.resetMinHealthyPercentage"></a>

```typescript
public resetMinHealthyPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointDelayInput">checkpointDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointPercentagesInput">checkpointPercentagesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.instanceWarmupInput">instanceWarmupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.minHealthyPercentageInput">minHealthyPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointDelay">checkpointDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointPercentages">checkpointPercentages</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.instanceWarmup">instanceWarmup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.minHealthyPercentage">minHealthyPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkpointDelayInput`<sup>Optional</sup> <a name="checkpointDelayInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointDelayInput"></a>

```typescript
public readonly checkpointDelayInput: string;
```

- *Type:* string

---

##### `checkpointPercentagesInput`<sup>Optional</sup> <a name="checkpointPercentagesInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointPercentagesInput"></a>

```typescript
public readonly checkpointPercentagesInput: number[];
```

- *Type:* number[]

---

##### `instanceWarmupInput`<sup>Optional</sup> <a name="instanceWarmupInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.instanceWarmupInput"></a>

```typescript
public readonly instanceWarmupInput: string;
```

- *Type:* string

---

##### `minHealthyPercentageInput`<sup>Optional</sup> <a name="minHealthyPercentageInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.minHealthyPercentageInput"></a>

```typescript
public readonly minHealthyPercentageInput: number;
```

- *Type:* number

---

##### `checkpointDelay`<sup>Required</sup> <a name="checkpointDelay" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointDelay"></a>

```typescript
public readonly checkpointDelay: string;
```

- *Type:* string

---

##### `checkpointPercentages`<sup>Required</sup> <a name="checkpointPercentages" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.checkpointPercentages"></a>

```typescript
public readonly checkpointPercentages: number[];
```

- *Type:* number[]

---

##### `instanceWarmup`<sup>Required</sup> <a name="instanceWarmup" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.instanceWarmup"></a>

```typescript
public readonly instanceWarmup: string;
```

- *Type:* string

---

##### `minHealthyPercentage`<sup>Required</sup> <a name="minHealthyPercentage" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.minHealthyPercentage"></a>

```typescript
public readonly minHealthyPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupInstanceRefreshPreferences;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupInstanceRefreshPreferences">AutoscalingGroupInstanceRefreshPreferences</a>

---


### AutoscalingGroupLaunchTemplateOutputReference <a name="AutoscalingGroupLaunchTemplateOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupLaunchTemplate">AutoscalingGroupLaunchTemplate</a>

---


### AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference <a name="AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandAllocationStrategy">resetOnDemandAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandBaseCapacity">resetOnDemandBaseCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandPercentageAboveBaseCapacity">resetOnDemandPercentageAboveBaseCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotAllocationStrategy">resetSpotAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotInstancePools">resetSpotInstancePools</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotMaxPrice">resetSpotMaxPrice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnDemandAllocationStrategy` <a name="resetOnDemandAllocationStrategy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandAllocationStrategy"></a>

```typescript
public resetOnDemandAllocationStrategy(): void
```

##### `resetOnDemandBaseCapacity` <a name="resetOnDemandBaseCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandBaseCapacity"></a>

```typescript
public resetOnDemandBaseCapacity(): void
```

##### `resetOnDemandPercentageAboveBaseCapacity` <a name="resetOnDemandPercentageAboveBaseCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetOnDemandPercentageAboveBaseCapacity"></a>

```typescript
public resetOnDemandPercentageAboveBaseCapacity(): void
```

##### `resetSpotAllocationStrategy` <a name="resetSpotAllocationStrategy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotAllocationStrategy"></a>

```typescript
public resetSpotAllocationStrategy(): void
```

##### `resetSpotInstancePools` <a name="resetSpotInstancePools" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotInstancePools"></a>

```typescript
public resetSpotInstancePools(): void
```

##### `resetSpotMaxPrice` <a name="resetSpotMaxPrice" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.resetSpotMaxPrice"></a>

```typescript
public resetSpotMaxPrice(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategyInput">onDemandAllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacityInput">onDemandBaseCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacityInput">onDemandPercentageAboveBaseCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategyInput">spotAllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePoolsInput">spotInstancePoolsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPriceInput">spotMaxPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategy">onDemandAllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacity">onDemandBaseCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacity">onDemandPercentageAboveBaseCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategy">spotAllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePools">spotInstancePools</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPrice">spotMaxPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onDemandAllocationStrategyInput`<sup>Optional</sup> <a name="onDemandAllocationStrategyInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategyInput"></a>

```typescript
public readonly onDemandAllocationStrategyInput: string;
```

- *Type:* string

---

##### `onDemandBaseCapacityInput`<sup>Optional</sup> <a name="onDemandBaseCapacityInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacityInput"></a>

```typescript
public readonly onDemandBaseCapacityInput: number;
```

- *Type:* number

---

##### `onDemandPercentageAboveBaseCapacityInput`<sup>Optional</sup> <a name="onDemandPercentageAboveBaseCapacityInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacityInput"></a>

```typescript
public readonly onDemandPercentageAboveBaseCapacityInput: number;
```

- *Type:* number

---

##### `spotAllocationStrategyInput`<sup>Optional</sup> <a name="spotAllocationStrategyInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategyInput"></a>

```typescript
public readonly spotAllocationStrategyInput: string;
```

- *Type:* string

---

##### `spotInstancePoolsInput`<sup>Optional</sup> <a name="spotInstancePoolsInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePoolsInput"></a>

```typescript
public readonly spotInstancePoolsInput: number;
```

- *Type:* number

---

##### `spotMaxPriceInput`<sup>Optional</sup> <a name="spotMaxPriceInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPriceInput"></a>

```typescript
public readonly spotMaxPriceInput: string;
```

- *Type:* string

---

##### `onDemandAllocationStrategy`<sup>Required</sup> <a name="onDemandAllocationStrategy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandAllocationStrategy"></a>

```typescript
public readonly onDemandAllocationStrategy: string;
```

- *Type:* string

---

##### `onDemandBaseCapacity`<sup>Required</sup> <a name="onDemandBaseCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandBaseCapacity"></a>

```typescript
public readonly onDemandBaseCapacity: number;
```

- *Type:* number

---

##### `onDemandPercentageAboveBaseCapacity`<sup>Required</sup> <a name="onDemandPercentageAboveBaseCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.onDemandPercentageAboveBaseCapacity"></a>

```typescript
public readonly onDemandPercentageAboveBaseCapacity: number;
```

- *Type:* number

---

##### `spotAllocationStrategy`<sup>Required</sup> <a name="spotAllocationStrategy" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotAllocationStrategy"></a>

```typescript
public readonly spotAllocationStrategy: string;
```

- *Type:* string

---

##### `spotInstancePools`<sup>Required</sup> <a name="spotInstancePools" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotInstancePools"></a>

```typescript
public readonly spotInstancePools: number;
```

- *Type:* number

---

##### `spotMaxPrice`<sup>Required</sup> <a name="spotMaxPrice" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.spotMaxPrice"></a>

```typescript
public readonly spotMaxPrice: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupMixedInstancesPolicyInstancesDistribution;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId">resetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName">resetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLaunchTemplateId` <a name="resetLaunchTemplateId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId"></a>

```typescript
public resetLaunchTemplateId(): void
```

##### `resetLaunchTemplateName` <a name="resetLaunchTemplateName" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName"></a>

```typescript
public resetLaunchTemplateName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput">launchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput">launchTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateIdInput`<sup>Optional</sup> <a name="launchTemplateIdInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput"></a>

```typescript
public readonly launchTemplateIdInput: string;
```

- *Type:* string

---

##### `launchTemplateNameInput`<sup>Optional</sup> <a name="launchTemplateNameInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput"></a>

```typescript
public readonly launchTemplateNameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putLaunchTemplateSpecification">putLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putOverride">putOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resetOverride">resetOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchTemplateSpecification` <a name="putLaunchTemplateSpecification" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putLaunchTemplateSpecification"></a>

```typescript
public putLaunchTemplateSpecification(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putLaunchTemplateSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a>

---

##### `putOverride` <a name="putOverride" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putOverride"></a>

```typescript
public putOverride(value: IResolvable | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.putOverride.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>[]

---

##### `resetOverride` <a name="resetOverride" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.resetOverride"></a>

```typescript
public resetOverride(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.override">override</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecificationInput">launchTemplateSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.overrideInput">overrideInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecification"></a>

```typescript
public readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference</a>

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.override"></a>

```typescript
public readonly override: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList</a>

---

##### `launchTemplateSpecificationInput`<sup>Optional</sup> <a name="launchTemplateSpecificationInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.launchTemplateSpecificationInput"></a>

```typescript
public readonly launchTemplateSpecificationInput: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification</a>

---

##### `overrideInput`<sup>Optional</sup> <a name="overrideInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.overrideInput"></a>

```typescript
public readonly overrideInput: IResolvable | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupMixedInstancesPolicyLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId">resetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName">resetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLaunchTemplateId` <a name="resetLaunchTemplateId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetLaunchTemplateId"></a>

```typescript
public resetLaunchTemplateId(): void
```

##### `resetLaunchTemplateName` <a name="resetLaunchTemplateName" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetLaunchTemplateName"></a>

```typescript
public resetLaunchTemplateName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput">launchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput">launchTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateIdInput`<sup>Optional</sup> <a name="launchTemplateIdInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateIdInput"></a>

```typescript
public readonly launchTemplateIdInput: string;
```

- *Type:* string

---

##### `launchTemplateNameInput`<sup>Optional</sup> <a name="launchTemplateNameInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateNameInput"></a>

```typescript
public readonly launchTemplateNameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a>

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.get"></a>

```typescript
public get(index: number): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>[]

---


### AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference <a name="AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.putLaunchTemplateSpecification">putLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetLaunchTemplateSpecification">resetLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchTemplateSpecification` <a name="putLaunchTemplateSpecification" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.putLaunchTemplateSpecification"></a>

```typescript
public putLaunchTemplateSpecification(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.putLaunchTemplateSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a>

---

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLaunchTemplateSpecification` <a name="resetLaunchTemplateSpecification" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetLaunchTemplateSpecification"></a>

```typescript
public resetLaunchTemplateSpecification(): void
```

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.resetWeightedCapacity"></a>

```typescript
public resetWeightedCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.launchTemplateSpecificationInput">launchTemplateSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.launchTemplateSpecification"></a>

```typescript
public readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference</a>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `launchTemplateSpecificationInput`<sup>Optional</sup> <a name="launchTemplateSpecificationInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.launchTemplateSpecificationInput"></a>

```typescript
public readonly launchTemplateSpecificationInput: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification</a>

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.weightedCapacityInput"></a>

```typescript
public readonly weightedCapacityInput: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride</a>

---


### AutoscalingGroupMixedInstancesPolicyOutputReference <a name="AutoscalingGroupMixedInstancesPolicyOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putInstancesDistribution">putInstancesDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.resetInstancesDistribution">resetInstancesDistribution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstancesDistribution` <a name="putInstancesDistribution" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putInstancesDistribution"></a>

```typescript
public putInstancesDistribution(value: AutoscalingGroupMixedInstancesPolicyInstancesDistribution): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putInstancesDistribution.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a>

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putLaunchTemplate"></a>

```typescript
public putLaunchTemplate(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a>

---

##### `resetInstancesDistribution` <a name="resetInstancesDistribution" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.resetInstancesDistribution"></a>

```typescript
public resetInstancesDistribution(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.instancesDistribution">instancesDistribution</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference">AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.instancesDistributionInput">instancesDistributionInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesDistribution`<sup>Required</sup> <a name="instancesDistribution" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.instancesDistribution"></a>

```typescript
public readonly instancesDistribution: AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference">AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference</a>

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference">AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference</a>

---

##### `instancesDistributionInput`<sup>Optional</sup> <a name="instancesDistributionInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.instancesDistributionInput"></a>

```typescript
public readonly instancesDistributionInput: AutoscalingGroupMixedInstancesPolicyInstancesDistribution;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyInstancesDistribution">AutoscalingGroupMixedInstancesPolicyInstancesDistribution</a>

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.launchTemplateInput"></a>

```typescript
public readonly launchTemplateInput: AutoscalingGroupMixedInstancesPolicyLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyLaunchTemplate">AutoscalingGroupMixedInstancesPolicyLaunchTemplate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupMixedInstancesPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupMixedInstancesPolicy">AutoscalingGroupMixedInstancesPolicy</a>

---


### AutoscalingGroupTagList <a name="AutoscalingGroupTagList" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.get"></a>

```typescript
public get(index: number): AutoscalingGroupTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>[]

---


### AutoscalingGroupTagOutputReference <a name="AutoscalingGroupTagOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.propagateAtLaunchInput">propagateAtLaunchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.propagateAtLaunch">propagateAtLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `propagateAtLaunchInput`<sup>Optional</sup> <a name="propagateAtLaunchInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.propagateAtLaunchInput"></a>

```typescript
public readonly propagateAtLaunchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `propagateAtLaunch`<sup>Required</sup> <a name="propagateAtLaunch" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.propagateAtLaunch"></a>

```typescript
public readonly propagateAtLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTag">AutoscalingGroupTag</a>

---


### AutoscalingGroupTimeoutsOutputReference <a name="AutoscalingGroupTimeoutsOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

---


### AutoscalingGroupWarmPoolOutputReference <a name="AutoscalingGroupWarmPoolOutputReference" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/aws-cdk'

new autoscalingGroup.AutoscalingGroupWarmPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetMaxGroupPreparedCapacity">resetMaxGroupPreparedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetPoolState">resetPoolState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxGroupPreparedCapacity` <a name="resetMaxGroupPreparedCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetMaxGroupPreparedCapacity"></a>

```typescript
public resetMaxGroupPreparedCapacity(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetMinSize"></a>

```typescript
public resetMinSize(): void
```

##### `resetPoolState` <a name="resetPoolState" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.resetPoolState"></a>

```typescript
public resetPoolState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.maxGroupPreparedCapacityInput">maxGroupPreparedCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.poolStateInput">poolStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.maxGroupPreparedCapacity">maxGroupPreparedCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.poolState">poolState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxGroupPreparedCapacityInput`<sup>Optional</sup> <a name="maxGroupPreparedCapacityInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.maxGroupPreparedCapacityInput"></a>

```typescript
public readonly maxGroupPreparedCapacityInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `poolStateInput`<sup>Optional</sup> <a name="poolStateInput" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.poolStateInput"></a>

```typescript
public readonly poolStateInput: string;
```

- *Type:* string

---

##### `maxGroupPreparedCapacity`<sup>Required</sup> <a name="maxGroupPreparedCapacity" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.maxGroupPreparedCapacity"></a>

```typescript
public readonly maxGroupPreparedCapacity: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `poolState`<sup>Required</sup> <a name="poolState" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.poolState"></a>

```typescript
public readonly poolState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupWarmPool;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroup.AutoscalingGroupWarmPool">AutoscalingGroupWarmPool</a>

---



