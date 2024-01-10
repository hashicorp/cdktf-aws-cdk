# `spotFleetRequest` Submodule <a name="`spotFleetRequest` Submodule" id="@cdktf/aws-cdk.spotFleetRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotFleetRequest <a name="SpotFleetRequest" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request aws_spot_fleet_request}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequest(scope: Construct, id: string, config: SpotFleetRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig">SpotFleetRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig">SpotFleetRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putLaunchSpecification">putLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig">putLaunchTemplateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies">putSpotMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetAllocationStrategy">resetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetExcessCapacityTerminationPolicy">resetExcessCapacityTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetFleetType">resetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetInstanceInterruptionBehaviour">resetInstanceInterruptionBehaviour</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetInstancePoolsToUseCount">resetInstancePoolsToUseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetLaunchSpecification">resetLaunchSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetLaunchTemplateConfig">resetLaunchTemplateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetLoadBalancers">resetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetOnDemandAllocationStrategy">resetOnDemandAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetOnDemandMaxTotalPrice">resetOnDemandMaxTotalPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetOnDemandTargetCapacity">resetOnDemandTargetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetReplaceUnhealthyInstances">resetReplaceUnhealthyInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetSpotMaintenanceStrategies">resetSpotMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetSpotPrice">resetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetTargetGroupArns">resetTargetGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesWithExpiration">resetTerminateInstancesWithExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetValidFrom">resetValidFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetValidUntil">resetValidUntil</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetWaitForFulfillment">resetWaitForFulfillment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLaunchSpecification` <a name="putLaunchSpecification" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putLaunchSpecification"></a>

```typescript
public putLaunchSpecification(value: IResolvable | SpotFleetRequestLaunchSpecification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putLaunchSpecification.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>[]

---

##### `putLaunchTemplateConfig` <a name="putLaunchTemplateConfig" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig"></a>

```typescript
public putLaunchTemplateConfig(value: IResolvable | SpotFleetRequestLaunchTemplateConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putLaunchTemplateConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>[]

---

##### `putSpotMaintenanceStrategies` <a name="putSpotMaintenanceStrategies" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies"></a>

```typescript
public putSpotMaintenanceStrategies(value: SpotFleetRequestSpotMaintenanceStrategies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putSpotMaintenanceStrategies.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putTimeouts"></a>

```typescript
public putTimeouts(value: SpotFleetRequestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>

---

##### `resetAllocationStrategy` <a name="resetAllocationStrategy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetAllocationStrategy"></a>

```typescript
public resetAllocationStrategy(): void
```

##### `resetExcessCapacityTerminationPolicy` <a name="resetExcessCapacityTerminationPolicy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetExcessCapacityTerminationPolicy"></a>

```typescript
public resetExcessCapacityTerminationPolicy(): void
```

##### `resetFleetType` <a name="resetFleetType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetFleetType"></a>

```typescript
public resetFleetType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceInterruptionBehaviour` <a name="resetInstanceInterruptionBehaviour" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetInstanceInterruptionBehaviour"></a>

```typescript
public resetInstanceInterruptionBehaviour(): void
```

##### `resetInstancePoolsToUseCount` <a name="resetInstancePoolsToUseCount" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetInstancePoolsToUseCount"></a>

```typescript
public resetInstancePoolsToUseCount(): void
```

##### `resetLaunchSpecification` <a name="resetLaunchSpecification" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetLaunchSpecification"></a>

```typescript
public resetLaunchSpecification(): void
```

##### `resetLaunchTemplateConfig` <a name="resetLaunchTemplateConfig" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetLaunchTemplateConfig"></a>

```typescript
public resetLaunchTemplateConfig(): void
```

##### `resetLoadBalancers` <a name="resetLoadBalancers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetLoadBalancers"></a>

```typescript
public resetLoadBalancers(): void
```

##### `resetOnDemandAllocationStrategy` <a name="resetOnDemandAllocationStrategy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetOnDemandAllocationStrategy"></a>

```typescript
public resetOnDemandAllocationStrategy(): void
```

##### `resetOnDemandMaxTotalPrice` <a name="resetOnDemandMaxTotalPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetOnDemandMaxTotalPrice"></a>

```typescript
public resetOnDemandMaxTotalPrice(): void
```

##### `resetOnDemandTargetCapacity` <a name="resetOnDemandTargetCapacity" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetOnDemandTargetCapacity"></a>

```typescript
public resetOnDemandTargetCapacity(): void
```

##### `resetReplaceUnhealthyInstances` <a name="resetReplaceUnhealthyInstances" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetReplaceUnhealthyInstances"></a>

```typescript
public resetReplaceUnhealthyInstances(): void
```

##### `resetSpotMaintenanceStrategies` <a name="resetSpotMaintenanceStrategies" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetSpotMaintenanceStrategies"></a>

```typescript
public resetSpotMaintenanceStrategies(): void
```

##### `resetSpotPrice` <a name="resetSpotPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetSpotPrice"></a>

```typescript
public resetSpotPrice(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTargetGroupArns` <a name="resetTargetGroupArns" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetTargetGroupArns"></a>

```typescript
public resetTargetGroupArns(): void
```

##### `resetTerminateInstancesWithExpiration` <a name="resetTerminateInstancesWithExpiration" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetTerminateInstancesWithExpiration"></a>

```typescript
public resetTerminateInstancesWithExpiration(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidFrom` <a name="resetValidFrom" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetValidFrom"></a>

```typescript
public resetValidFrom(): void
```

##### `resetValidUntil` <a name="resetValidUntil" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetValidUntil"></a>

```typescript
public resetValidUntil(): void
```

##### `resetWaitForFulfillment` <a name="resetWaitForFulfillment" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.resetWaitForFulfillment"></a>

```typescript
public resetWaitForFulfillment(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpotFleetRequest resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.isConstruct"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

spotFleetRequest.SpotFleetRequest.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.isTerraformElement"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

spotFleetRequest.SpotFleetRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.isTerraformResource"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

spotFleetRequest.SpotFleetRequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.generateConfigForImport"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

spotFleetRequest.SpotFleetRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpotFleetRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpotFleetRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpotFleetRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpotFleetRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.launchSpecification">launchSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList">SpotFleetRequestLaunchSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfig">launchTemplateConfig</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList">SpotFleetRequestLaunchTemplateConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategies">spotMaintenanceStrategies</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference">SpotFleetRequestSpotMaintenanceStrategiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.spotRequestState">spotRequestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference">SpotFleetRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicyInput">excessCapacityTerminationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.fleetTypeInput">fleetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.iamFleetRoleInput">iamFleetRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviourInput">instanceInterruptionBehaviourInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCountInput">instancePoolsToUseCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.launchSpecificationInput">launchSpecificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfigInput">launchTemplateConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.loadBalancersInput">loadBalancersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategyInput">onDemandAllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPriceInput">onDemandMaxTotalPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacityInput">onDemandTargetCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstancesInput">replaceUnhealthyInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategiesInput">spotMaintenanceStrategiesInput</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.spotPriceInput">spotPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.targetCapacityInput">targetCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.targetGroupArnsInput">targetGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpirationInput">terminateInstancesWithExpirationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.validFromInput">validFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.validUntilInput">validUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.waitForFulfillmentInput">waitForFulfillmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicy">excessCapacityTerminationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.fleetType">fleetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.iamFleetRole">iamFleetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviour">instanceInterruptionBehaviour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.loadBalancers">loadBalancers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategy">onDemandAllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPrice">onDemandMaxTotalPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacity">onDemandTargetCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstances">replaceUnhealthyInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.spotPrice">spotPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.targetCapacity">targetCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.targetGroupArns">targetGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpiration">terminateInstancesWithExpiration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.validFrom">validFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.validUntil">validUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.waitForFulfillment">waitForFulfillment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `launchSpecification`<sup>Required</sup> <a name="launchSpecification" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.launchSpecification"></a>

```typescript
public readonly launchSpecification: SpotFleetRequestLaunchSpecificationList;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList">SpotFleetRequestLaunchSpecificationList</a>

---

##### `launchTemplateConfig`<sup>Required</sup> <a name="launchTemplateConfig" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfig"></a>

```typescript
public readonly launchTemplateConfig: SpotFleetRequestLaunchTemplateConfigList;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList">SpotFleetRequestLaunchTemplateConfigList</a>

---

##### `spotMaintenanceStrategies`<sup>Required</sup> <a name="spotMaintenanceStrategies" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategies"></a>

```typescript
public readonly spotMaintenanceStrategies: SpotFleetRequestSpotMaintenanceStrategiesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference">SpotFleetRequestSpotMaintenanceStrategiesOutputReference</a>

---

##### `spotRequestState`<sup>Required</sup> <a name="spotRequestState" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.spotRequestState"></a>

```typescript
public readonly spotRequestState: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.timeouts"></a>

```typescript
public readonly timeouts: SpotFleetRequestTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference">SpotFleetRequestTimeoutsOutputReference</a>

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.allocationStrategyInput"></a>

```typescript
public readonly allocationStrategyInput: string;
```

- *Type:* string

---

##### `excessCapacityTerminationPolicyInput`<sup>Optional</sup> <a name="excessCapacityTerminationPolicyInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicyInput"></a>

```typescript
public readonly excessCapacityTerminationPolicyInput: string;
```

- *Type:* string

---

##### `fleetTypeInput`<sup>Optional</sup> <a name="fleetTypeInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.fleetTypeInput"></a>

```typescript
public readonly fleetTypeInput: string;
```

- *Type:* string

---

##### `iamFleetRoleInput`<sup>Optional</sup> <a name="iamFleetRoleInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.iamFleetRoleInput"></a>

```typescript
public readonly iamFleetRoleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInterruptionBehaviourInput`<sup>Optional</sup> <a name="instanceInterruptionBehaviourInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviourInput"></a>

```typescript
public readonly instanceInterruptionBehaviourInput: string;
```

- *Type:* string

---

##### `instancePoolsToUseCountInput`<sup>Optional</sup> <a name="instancePoolsToUseCountInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCountInput"></a>

```typescript
public readonly instancePoolsToUseCountInput: number;
```

- *Type:* number

---

##### `launchSpecificationInput`<sup>Optional</sup> <a name="launchSpecificationInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.launchSpecificationInput"></a>

```typescript
public readonly launchSpecificationInput: IResolvable | SpotFleetRequestLaunchSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>[]

---

##### `launchTemplateConfigInput`<sup>Optional</sup> <a name="launchTemplateConfigInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.launchTemplateConfigInput"></a>

```typescript
public readonly launchTemplateConfigInput: IResolvable | SpotFleetRequestLaunchTemplateConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>[]

---

##### `loadBalancersInput`<sup>Optional</sup> <a name="loadBalancersInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.loadBalancersInput"></a>

```typescript
public readonly loadBalancersInput: string[];
```

- *Type:* string[]

---

##### `onDemandAllocationStrategyInput`<sup>Optional</sup> <a name="onDemandAllocationStrategyInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategyInput"></a>

```typescript
public readonly onDemandAllocationStrategyInput: string;
```

- *Type:* string

---

##### `onDemandMaxTotalPriceInput`<sup>Optional</sup> <a name="onDemandMaxTotalPriceInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPriceInput"></a>

```typescript
public readonly onDemandMaxTotalPriceInput: string;
```

- *Type:* string

---

##### `onDemandTargetCapacityInput`<sup>Optional</sup> <a name="onDemandTargetCapacityInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacityInput"></a>

```typescript
public readonly onDemandTargetCapacityInput: number;
```

- *Type:* number

---

##### `replaceUnhealthyInstancesInput`<sup>Optional</sup> <a name="replaceUnhealthyInstancesInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstancesInput"></a>

```typescript
public readonly replaceUnhealthyInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `spotMaintenanceStrategiesInput`<sup>Optional</sup> <a name="spotMaintenanceStrategiesInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.spotMaintenanceStrategiesInput"></a>

```typescript
public readonly spotMaintenanceStrategiesInput: SpotFleetRequestSpotMaintenanceStrategies;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

---

##### `spotPriceInput`<sup>Optional</sup> <a name="spotPriceInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.spotPriceInput"></a>

```typescript
public readonly spotPriceInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetCapacityInput`<sup>Optional</sup> <a name="targetCapacityInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.targetCapacityInput"></a>

```typescript
public readonly targetCapacityInput: number;
```

- *Type:* number

---

##### `targetGroupArnsInput`<sup>Optional</sup> <a name="targetGroupArnsInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.targetGroupArnsInput"></a>

```typescript
public readonly targetGroupArnsInput: string[];
```

- *Type:* string[]

---

##### `terminateInstancesWithExpirationInput`<sup>Optional</sup> <a name="terminateInstancesWithExpirationInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpirationInput"></a>

```typescript
public readonly terminateInstancesWithExpirationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpotFleetRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>

---

##### `validFromInput`<sup>Optional</sup> <a name="validFromInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.validFromInput"></a>

```typescript
public readonly validFromInput: string;
```

- *Type:* string

---

##### `validUntilInput`<sup>Optional</sup> <a name="validUntilInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.validUntilInput"></a>

```typescript
public readonly validUntilInput: string;
```

- *Type:* string

---

##### `waitForFulfillmentInput`<sup>Optional</sup> <a name="waitForFulfillmentInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.waitForFulfillmentInput"></a>

```typescript
public readonly waitForFulfillmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `excessCapacityTerminationPolicy`<sup>Required</sup> <a name="excessCapacityTerminationPolicy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.excessCapacityTerminationPolicy"></a>

```typescript
public readonly excessCapacityTerminationPolicy: string;
```

- *Type:* string

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

---

##### `iamFleetRole`<sup>Required</sup> <a name="iamFleetRole" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.iamFleetRole"></a>

```typescript
public readonly iamFleetRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceInterruptionBehaviour`<sup>Required</sup> <a name="instanceInterruptionBehaviour" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.instanceInterruptionBehaviour"></a>

```typescript
public readonly instanceInterruptionBehaviour: string;
```

- *Type:* string

---

##### `instancePoolsToUseCount`<sup>Required</sup> <a name="instancePoolsToUseCount" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.instancePoolsToUseCount"></a>

```typescript
public readonly instancePoolsToUseCount: number;
```

- *Type:* number

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.loadBalancers"></a>

```typescript
public readonly loadBalancers: string[];
```

- *Type:* string[]

---

##### `onDemandAllocationStrategy`<sup>Required</sup> <a name="onDemandAllocationStrategy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandAllocationStrategy"></a>

```typescript
public readonly onDemandAllocationStrategy: string;
```

- *Type:* string

---

##### `onDemandMaxTotalPrice`<sup>Required</sup> <a name="onDemandMaxTotalPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandMaxTotalPrice"></a>

```typescript
public readonly onDemandMaxTotalPrice: string;
```

- *Type:* string

---

##### `onDemandTargetCapacity`<sup>Required</sup> <a name="onDemandTargetCapacity" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.onDemandTargetCapacity"></a>

```typescript
public readonly onDemandTargetCapacity: number;
```

- *Type:* number

---

##### `replaceUnhealthyInstances`<sup>Required</sup> <a name="replaceUnhealthyInstances" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.replaceUnhealthyInstances"></a>

```typescript
public readonly replaceUnhealthyInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetCapacity`<sup>Required</sup> <a name="targetCapacity" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.targetCapacity"></a>

```typescript
public readonly targetCapacity: number;
```

- *Type:* number

---

##### `targetGroupArns`<sup>Required</sup> <a name="targetGroupArns" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.targetGroupArns"></a>

```typescript
public readonly targetGroupArns: string[];
```

- *Type:* string[]

---

##### `terminateInstancesWithExpiration`<sup>Required</sup> <a name="terminateInstancesWithExpiration" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.terminateInstancesWithExpiration"></a>

```typescript
public readonly terminateInstancesWithExpiration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validFrom`<sup>Required</sup> <a name="validFrom" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.validFrom"></a>

```typescript
public readonly validFrom: string;
```

- *Type:* string

---

##### `validUntil`<sup>Required</sup> <a name="validUntil" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* string

---

##### `waitForFulfillment`<sup>Required</sup> <a name="waitForFulfillment" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.waitForFulfillment"></a>

```typescript
public readonly waitForFulfillment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpotFleetRequestConfig <a name="SpotFleetRequestConfig" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

const spotFleetRequestConfig: spotFleetRequest.SpotFleetRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.iamFleetRole">iamFleetRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacity">targetCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.excessCapacityTerminationPolicy">excessCapacityTerminationPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.fleetType">fleetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#id SpotFleetRequest#id}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.instanceInterruptionBehaviour">instanceInterruptionBehaviour</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.instancePoolsToUseCount">instancePoolsToUseCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.launchSpecification">launchSpecification</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>[]</code> | launch_specification block. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.launchTemplateConfig">launchTemplateConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>[]</code> | launch_template_config block. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.loadBalancers">loadBalancers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.onDemandAllocationStrategy">onDemandAllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.onDemandMaxTotalPrice">onDemandMaxTotalPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.onDemandTargetCapacity">onDemandTargetCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.replaceUnhealthyInstances">replaceUnhealthyInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.spotMaintenanceStrategies">spotMaintenanceStrategies</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | spot_maintenance_strategies block. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.spotPrice">spotPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#tags SpotFleetRequest#tags}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#tags_all SpotFleetRequest#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.targetGroupArns">targetGroupArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesWithExpiration">terminateInstancesWithExpiration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.validFrom">validFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#valid_from SpotFleetRequest#valid_from}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.validUntil">validUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#valid_until SpotFleetRequest#valid_until}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.waitForFulfillment">waitForFulfillment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iamFleetRole`<sup>Required</sup> <a name="iamFleetRole" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.iamFleetRole"></a>

```typescript
public readonly iamFleetRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}.

---

##### `targetCapacity`<sup>Required</sup> <a name="targetCapacity" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.targetCapacity"></a>

```typescript
public readonly targetCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}.

---

##### `allocationStrategy`<sup>Optional</sup> <a name="allocationStrategy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}.

---

##### `excessCapacityTerminationPolicy`<sup>Optional</sup> <a name="excessCapacityTerminationPolicy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.excessCapacityTerminationPolicy"></a>

```typescript
public readonly excessCapacityTerminationPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}.

---

##### `fleetType`<sup>Optional</sup> <a name="fleetType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#id SpotFleetRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceInterruptionBehaviour`<sup>Optional</sup> <a name="instanceInterruptionBehaviour" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.instanceInterruptionBehaviour"></a>

```typescript
public readonly instanceInterruptionBehaviour: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}.

---

##### `instancePoolsToUseCount`<sup>Optional</sup> <a name="instancePoolsToUseCount" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.instancePoolsToUseCount"></a>

```typescript
public readonly instancePoolsToUseCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}.

---

##### `launchSpecification`<sup>Optional</sup> <a name="launchSpecification" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.launchSpecification"></a>

```typescript
public readonly launchSpecification: IResolvable | SpotFleetRequestLaunchSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>[]

launch_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#launch_specification SpotFleetRequest#launch_specification}

---

##### `launchTemplateConfig`<sup>Optional</sup> <a name="launchTemplateConfig" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.launchTemplateConfig"></a>

```typescript
public readonly launchTemplateConfig: IResolvable | SpotFleetRequestLaunchTemplateConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>[]

launch_template_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#launch_template_config SpotFleetRequest#launch_template_config}

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.loadBalancers"></a>

```typescript
public readonly loadBalancers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}.

---

##### `onDemandAllocationStrategy`<sup>Optional</sup> <a name="onDemandAllocationStrategy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.onDemandAllocationStrategy"></a>

```typescript
public readonly onDemandAllocationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}.

---

##### `onDemandMaxTotalPrice`<sup>Optional</sup> <a name="onDemandMaxTotalPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.onDemandMaxTotalPrice"></a>

```typescript
public readonly onDemandMaxTotalPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}.

---

##### `onDemandTargetCapacity`<sup>Optional</sup> <a name="onDemandTargetCapacity" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.onDemandTargetCapacity"></a>

```typescript
public readonly onDemandTargetCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}.

---

##### `replaceUnhealthyInstances`<sup>Optional</sup> <a name="replaceUnhealthyInstances" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.replaceUnhealthyInstances"></a>

```typescript
public readonly replaceUnhealthyInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}.

---

##### `spotMaintenanceStrategies`<sup>Optional</sup> <a name="spotMaintenanceStrategies" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.spotMaintenanceStrategies"></a>

```typescript
public readonly spotMaintenanceStrategies: SpotFleetRequestSpotMaintenanceStrategies;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

spot_maintenance_strategies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#tags SpotFleetRequest#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#tags_all SpotFleetRequest#tags_all}.

---

##### `targetGroupArns`<sup>Optional</sup> <a name="targetGroupArns" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.targetGroupArns"></a>

```typescript
public readonly targetGroupArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}.

---

##### `terminateInstancesWithExpiration`<sup>Optional</sup> <a name="terminateInstancesWithExpiration" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.terminateInstancesWithExpiration"></a>

```typescript
public readonly terminateInstancesWithExpiration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpotFleetRequestTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#timeouts SpotFleetRequest#timeouts}

---

##### `validFrom`<sup>Optional</sup> <a name="validFrom" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.validFrom"></a>

```typescript
public readonly validFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#valid_from SpotFleetRequest#valid_from}.

---

##### `validUntil`<sup>Optional</sup> <a name="validUntil" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#valid_until SpotFleetRequest#valid_until}.

---

##### `waitForFulfillment`<sup>Optional</sup> <a name="waitForFulfillment" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestConfig.property.waitForFulfillment"></a>

```typescript
public readonly waitForFulfillment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}.

---

### SpotFleetRequestLaunchSpecification <a name="SpotFleetRequestLaunchSpecification" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

const spotFleetRequestLaunchSpecification: spotFleetRequest.SpotFleetRequestLaunchSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ami">ami</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#ami SpotFleetRequest#ami}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_type SpotFleetRequest#instance_type}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>[]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#ebs_optimized SpotFleetRequest#ebs_optimized}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>[]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iam_instance_profile SpotFleetRequest#iam_instance_profile}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#key_name SpotFleetRequest#key_name}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.monitoring">monitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#monitoring SpotFleetRequest#monitoring}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementGroup">placementGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#placement_group SpotFleetRequest#placement_group}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementTenancy">placementTenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#placement_tenancy SpotFleetRequest#placement_tenancy}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.rootBlockDevice">rootBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>[]</code> | root_block_device block. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.spotPrice">spotPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#tags SpotFleetRequest#tags}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#user_data SpotFleetRequest#user_data}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.weightedCapacity">weightedCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}. |

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ami"></a>

```typescript
public readonly ami: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#ami SpotFleetRequest#ami}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_type SpotFleetRequest#instance_type}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: IResolvable | SpotFleetRequestLaunchSpecificationEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>[]

ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#ebs_block_device SpotFleetRequest#ebs_block_device}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#ebs_optimized SpotFleetRequest#ebs_optimized}.

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: IResolvable | SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>[]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#ephemeral_block_device SpotFleetRequest#ephemeral_block_device}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iam_instance_profile SpotFleetRequest#iam_instance_profile}.

---

##### `iamInstanceProfileArn`<sup>Optional</sup> <a name="iamInstanceProfileArn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.iamInstanceProfileArn"></a>

```typescript
public readonly iamInstanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#key_name SpotFleetRequest#key_name}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.monitoring"></a>

```typescript
public readonly monitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#monitoring SpotFleetRequest#monitoring}.

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#placement_group SpotFleetRequest#placement_group}.

---

##### `placementTenancy`<sup>Optional</sup> <a name="placementTenancy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.placementTenancy"></a>

```typescript
public readonly placementTenancy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#placement_tenancy SpotFleetRequest#placement_tenancy}.

---

##### `rootBlockDevice`<sup>Optional</sup> <a name="rootBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.rootBlockDevice"></a>

```typescript
public readonly rootBlockDevice: IResolvable | SpotFleetRequestLaunchSpecificationRootBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>[]

root_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#root_block_device SpotFleetRequest#root_block_device}

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#tags SpotFleetRequest#tags}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#user_data SpotFleetRequest#user_data}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}.

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}.

---

### SpotFleetRequestLaunchSpecificationEbsBlockDevice <a name="SpotFleetRequestLaunchSpecificationEbsBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

const spotFleetRequestLaunchSpecificationEbsBlockDevice: spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#device_name SpotFleetRequest#device_name}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#encrypted SpotFleetRequest#encrypted}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iops SpotFleetRequest#iops}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#snapshot_id SpotFleetRequest#snapshot_id}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#throughput SpotFleetRequest#throughput}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_size SpotFleetRequest#volume_size}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_type SpotFleetRequest#volume_type}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#device_name SpotFleetRequest#device_name}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#encrypted SpotFleetRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iops SpotFleetRequest#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#snapshot_id SpotFleetRequest#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#throughput SpotFleetRequest#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_size SpotFleetRequest#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_type SpotFleetRequest#volume_type}.

---

### SpotFleetRequestLaunchSpecificationEphemeralBlockDevice <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

const spotFleetRequestLaunchSpecificationEphemeralBlockDevice: spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#device_name SpotFleetRequest#device_name}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.virtualName">virtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#virtual_name SpotFleetRequest#virtual_name}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#device_name SpotFleetRequest#device_name}.

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#virtual_name SpotFleetRequest#virtual_name}.

---

### SpotFleetRequestLaunchSpecificationRootBlockDevice <a name="SpotFleetRequestLaunchSpecificationRootBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

const spotFleetRequestLaunchSpecificationRootBlockDevice: spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#encrypted SpotFleetRequest#encrypted}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iops SpotFleetRequest#iops}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#throughput SpotFleetRequest#throughput}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_size SpotFleetRequest#volume_size}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_type SpotFleetRequest#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#encrypted SpotFleetRequest#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#iops SpotFleetRequest#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#throughput SpotFleetRequest#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_size SpotFleetRequest#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#volume_type SpotFleetRequest#volume_type}.

---

### SpotFleetRequestLaunchTemplateConfig <a name="SpotFleetRequestLaunchTemplateConfig" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

const spotFleetRequestLaunchTemplateConfig: spotFleetRequest.SpotFleetRequestLaunchTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | launch_template_specification block. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.overrides">overrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>[]</code> | overrides block. |

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.launchTemplateSpecification"></a>

```typescript
public readonly launchTemplateSpecification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

launch_template_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#launch_template_specification SpotFleetRequest#launch_template_specification}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig.property.overrides"></a>

```typescript
public readonly overrides: IResolvable | SpotFleetRequestLaunchTemplateConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>[]

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#overrides SpotFleetRequest#overrides}

---

### SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification <a name="SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

const spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification: spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#id SpotFleetRequest#id}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#name SpotFleetRequest#name}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#version SpotFleetRequest#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#id SpotFleetRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#name SpotFleetRequest#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#version SpotFleetRequest#version}.

---

### SpotFleetRequestLaunchTemplateConfigOverrides <a name="SpotFleetRequestLaunchTemplateConfigOverrides" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

const spotFleetRequestLaunchTemplateConfigOverrides: spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_type SpotFleetRequest#instance_type}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#priority SpotFleetRequest#priority}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.spotPrice">spotPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.weightedCapacity">weightedCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#instance_type SpotFleetRequest#instance_type}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#priority SpotFleetRequest#priority}.

---

##### `spotPrice`<sup>Optional</sup> <a name="spotPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}.

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}.

---

### SpotFleetRequestSpotMaintenanceStrategies <a name="SpotFleetRequestSpotMaintenanceStrategies" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

const spotFleetRequestSpotMaintenanceStrategies: spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.property.capacityRebalance">capacityRebalance</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | capacity_rebalance block. |

---

##### `capacityRebalance`<sup>Optional</sup> <a name="capacityRebalance" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies.property.capacityRebalance"></a>

```typescript
public readonly capacityRebalance: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

capacity_rebalance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#capacity_rebalance SpotFleetRequest#capacity_rebalance}

---

### SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance <a name="SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

const spotFleetRequestSpotMaintenanceStrategiesCapacityRebalance: spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.property.replacementStrategy">replacementStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#replacement_strategy SpotFleetRequest#replacement_strategy}. |

---

##### `replacementStrategy`<sup>Optional</sup> <a name="replacementStrategy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance.property.replacementStrategy"></a>

```typescript
public readonly replacementStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#replacement_strategy SpotFleetRequest#replacement_strategy}.

---

### SpotFleetRequestTimeouts <a name="SpotFleetRequestTimeouts" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

const spotFleetRequestTimeouts: spotFleetRequest.SpotFleetRequestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#create SpotFleetRequest#create}. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#delete SpotFleetRequest#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#create SpotFleetRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/spot_fleet_request#delete SpotFleetRequest#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpotFleetRequestLaunchSpecificationEbsBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationEbsBlockDeviceList" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get"></a>

```typescript
public get(index: number): SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchSpecificationEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>[]

---


### SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchSpecificationEbsBlockDevice;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>

---


### SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get"></a>

```typescript
public get(index: number): SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>[]

---


### SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```typescript
public readonly virtualNameInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchSpecificationEphemeralBlockDevice;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>

---


### SpotFleetRequestLaunchSpecificationList <a name="SpotFleetRequestLaunchSpecificationList" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get"></a>

```typescript
public get(index: number): SpotFleetRequestLaunchSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>[]

---


### SpotFleetRequestLaunchSpecificationOutputReference <a name="SpotFleetRequestLaunchSpecificationOutputReference" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice">putEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice">putEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice">putRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsBlockDevice">resetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEphemeralBlockDevice">resetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfileArn">resetIamInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementGroup">resetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementTenancy">resetPlacementTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetRootBlockDevice">resetRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSpotPrice">resetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsBlockDevice` <a name="putEbsBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice"></a>

```typescript
public putEbsBlockDevice(value: IResolvable | SpotFleetRequestLaunchSpecificationEbsBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEbsBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>[]

---

##### `putEphemeralBlockDevice` <a name="putEphemeralBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice"></a>

```typescript
public putEphemeralBlockDevice(value: IResolvable | SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>[]

---

##### `putRootBlockDevice` <a name="putRootBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice"></a>

```typescript
public putRootBlockDevice(value: IResolvable | SpotFleetRequestLaunchSpecificationRootBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.putRootBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>[]

---

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAssociatePublicIpAddress"></a>

```typescript
public resetAssociatePublicIpAddress(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetEbsBlockDevice` <a name="resetEbsBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsBlockDevice"></a>

```typescript
public resetEbsBlockDevice(): void
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEbsOptimized"></a>

```typescript
public resetEbsOptimized(): void
```

##### `resetEphemeralBlockDevice` <a name="resetEphemeralBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetEphemeralBlockDevice"></a>

```typescript
public resetEphemeralBlockDevice(): void
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfile"></a>

```typescript
public resetIamInstanceProfile(): void
```

##### `resetIamInstanceProfileArn` <a name="resetIamInstanceProfileArn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetIamInstanceProfileArn"></a>

```typescript
public resetIamInstanceProfileArn(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetMonitoring"></a>

```typescript
public resetMonitoring(): void
```

##### `resetPlacementGroup` <a name="resetPlacementGroup" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementGroup"></a>

```typescript
public resetPlacementGroup(): void
```

##### `resetPlacementTenancy` <a name="resetPlacementTenancy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetPlacementTenancy"></a>

```typescript
public resetPlacementTenancy(): void
```

##### `resetRootBlockDevice` <a name="resetRootBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetRootBlockDevice"></a>

```typescript
public resetRootBlockDevice(): void
```

##### `resetSpotPrice` <a name="resetSpotPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSpotPrice"></a>

```typescript
public resetSpotPrice(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.resetWeightedCapacity"></a>

```typescript
public resetWeightedCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList">SpotFleetRequestLaunchSpecificationEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList">SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList">SpotFleetRequestLaunchSpecificationRootBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.amiInput">amiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDeviceInput">ebsBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDeviceInput">ephemeralBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArnInput">iamInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoringInput">monitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroupInput">placementGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancyInput">placementTenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDeviceInput">rootBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPriceInput">spotPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ami">ami</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoring">monitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroup">placementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancy">placementTenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPrice">spotPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsBlockDevice`<sup>Required</sup> <a name="ebsBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: SpotFleetRequestLaunchSpecificationEbsBlockDeviceList;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDeviceList">SpotFleetRequestLaunchSpecificationEbsBlockDeviceList</a>

---

##### `ephemeralBlockDevice`<sup>Required</sup> <a name="ephemeralBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList">SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList</a>

---

##### `rootBlockDevice`<sup>Required</sup> <a name="rootBlockDevice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDevice"></a>

```typescript
public readonly rootBlockDevice: SpotFleetRequestLaunchSpecificationRootBlockDeviceList;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList">SpotFleetRequestLaunchSpecificationRootBlockDeviceList</a>

---

##### `amiInput`<sup>Optional</sup> <a name="amiInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.amiInput"></a>

```typescript
public readonly amiInput: string;
```

- *Type:* string

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddressInput"></a>

```typescript
public readonly associatePublicIpAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `ebsBlockDeviceInput`<sup>Optional</sup> <a name="ebsBlockDeviceInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsBlockDeviceInput"></a>

```typescript
public readonly ebsBlockDeviceInput: IResolvable | SpotFleetRequestLaunchSpecificationEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEbsBlockDevice">SpotFleetRequestLaunchSpecificationEbsBlockDevice</a>[]

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimizedInput"></a>

```typescript
public readonly ebsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ephemeralBlockDeviceInput`<sup>Optional</sup> <a name="ephemeralBlockDeviceInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ephemeralBlockDeviceInput"></a>

```typescript
public readonly ephemeralBlockDeviceInput: IResolvable | SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationEphemeralBlockDevice">SpotFleetRequestLaunchSpecificationEphemeralBlockDevice</a>[]

---

##### `iamInstanceProfileArnInput`<sup>Optional</sup> <a name="iamInstanceProfileArnInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArnInput"></a>

```typescript
public readonly iamInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoringInput"></a>

```typescript
public readonly monitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `placementGroupInput`<sup>Optional</sup> <a name="placementGroupInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroupInput"></a>

```typescript
public readonly placementGroupInput: string;
```

- *Type:* string

---

##### `placementTenancyInput`<sup>Optional</sup> <a name="placementTenancyInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancyInput"></a>

```typescript
public readonly placementTenancyInput: string;
```

- *Type:* string

---

##### `rootBlockDeviceInput`<sup>Optional</sup> <a name="rootBlockDeviceInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.rootBlockDeviceInput"></a>

```typescript
public readonly rootBlockDeviceInput: IResolvable | SpotFleetRequestLaunchSpecificationRootBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>[]

---

##### `spotPriceInput`<sup>Optional</sup> <a name="spotPriceInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPriceInput"></a>

```typescript
public readonly spotPriceInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacityInput"></a>

```typescript
public readonly weightedCapacityInput: string;
```

- *Type:* string

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ami"></a>

```typescript
public readonly ami: string;
```

- *Type:* string

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `iamInstanceProfileArn`<sup>Required</sup> <a name="iamInstanceProfileArn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.iamInstanceProfileArn"></a>

```typescript
public readonly iamInstanceProfileArn: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.monitoring"></a>

```typescript
public readonly monitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

---

##### `placementTenancy`<sup>Required</sup> <a name="placementTenancy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.placementTenancy"></a>

```typescript
public readonly placementTenancy: string;
```

- *Type:* string

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchSpecification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecification">SpotFleetRequestLaunchSpecification</a>

---


### SpotFleetRequestLaunchSpecificationRootBlockDeviceList <a name="SpotFleetRequestLaunchSpecificationRootBlockDeviceList" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get"></a>

```typescript
public get(index: number): SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchSpecificationRootBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>[]

---


### SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference <a name="SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchSpecificationRootBlockDevice;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchSpecificationRootBlockDevice">SpotFleetRequestLaunchSpecificationRootBlockDevice</a>

---


### SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference <a name="SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

---


### SpotFleetRequestLaunchTemplateConfigList <a name="SpotFleetRequestLaunchTemplateConfigList" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get"></a>

```typescript
public get(index: number): SpotFleetRequestLaunchTemplateConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchTemplateConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>[]

---


### SpotFleetRequestLaunchTemplateConfigOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOutputReference" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification">putLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchTemplateSpecification` <a name="putLaunchTemplateSpecification" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification"></a>

```typescript
public putLaunchTemplateSpecification(value: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putLaunchTemplateSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `putOverrides` <a name="putOverrides" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides"></a>

```typescript
public putOverrides(value: IResolvable | SpotFleetRequestLaunchTemplateConfigOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.putOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>[]

---

##### `resetOverrides` <a name="resetOverrides" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.resetOverrides"></a>

```typescript
public resetOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecification">launchTemplateSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList">SpotFleetRequestLaunchTemplateConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput">launchTemplateSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overridesInput">overridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateSpecification`<sup>Required</sup> <a name="launchTemplateSpecification" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecification"></a>

```typescript
public readonly launchTemplateSpecification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overrides"></a>

```typescript
public readonly overrides: SpotFleetRequestLaunchTemplateConfigOverridesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList">SpotFleetRequestLaunchTemplateConfigOverridesList</a>

---

##### `launchTemplateSpecificationInput`<sup>Optional</sup> <a name="launchTemplateSpecificationInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.launchTemplateSpecificationInput"></a>

```typescript
public readonly launchTemplateSpecificationInput: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification">SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification</a>

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.overridesInput"></a>

```typescript
public readonly overridesInput: IResolvable | SpotFleetRequestLaunchTemplateConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchTemplateConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfig">SpotFleetRequestLaunchTemplateConfig</a>

---


### SpotFleetRequestLaunchTemplateConfigOverridesList <a name="SpotFleetRequestLaunchTemplateConfigOverridesList" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get"></a>

```typescript
public get(index: number): SpotFleetRequestLaunchTemplateConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchTemplateConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>[]

---


### SpotFleetRequestLaunchTemplateConfigOverridesOutputReference <a name="SpotFleetRequestLaunchTemplateConfigOverridesOutputReference" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSpotPrice">resetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetSpotPrice` <a name="resetSpotPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSpotPrice"></a>

```typescript
public resetSpotPrice(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.resetWeightedCapacity"></a>

```typescript
public resetWeightedCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPriceInput">spotPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPrice">spotPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `spotPriceInput`<sup>Optional</sup> <a name="spotPriceInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPriceInput"></a>

```typescript
public readonly spotPriceInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacityInput"></a>

```typescript
public readonly weightedCapacityInput: number;
```

- *Type:* number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `spotPrice`<sup>Required</sup> <a name="spotPrice" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.spotPrice"></a>

```typescript
public readonly spotPrice: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.weightedCapacity"></a>

```typescript
public readonly weightedCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestLaunchTemplateConfigOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestLaunchTemplateConfigOverrides">SpotFleetRequestLaunchTemplateConfigOverrides</a>

---


### SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference <a name="SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy">resetReplacementStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplacementStrategy` <a name="resetReplacementStrategy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.resetReplacementStrategy"></a>

```typescript
public resetReplacementStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput">replacementStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy">replacementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replacementStrategyInput`<sup>Optional</sup> <a name="replacementStrategyInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategyInput"></a>

```typescript
public readonly replacementStrategyInput: string;
```

- *Type:* string

---

##### `replacementStrategy`<sup>Required</sup> <a name="replacementStrategy" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.replacementStrategy"></a>

```typescript
public readonly replacementStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

---


### SpotFleetRequestSpotMaintenanceStrategiesOutputReference <a name="SpotFleetRequestSpotMaintenanceStrategiesOutputReference" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance">putCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resetCapacityRebalance">resetCapacityRebalance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityRebalance` <a name="putCapacityRebalance" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance"></a>

```typescript
public putCapacityRebalance(value: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.putCapacityRebalance.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

---

##### `resetCapacityRebalance` <a name="resetCapacityRebalance" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.resetCapacityRebalance"></a>

```typescript
public resetCapacityRebalance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalance">capacityRebalance</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalanceInput">capacityRebalanceInput</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityRebalance`<sup>Required</sup> <a name="capacityRebalance" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalance"></a>

```typescript
public readonly capacityRebalance: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference</a>

---

##### `capacityRebalanceInput`<sup>Optional</sup> <a name="capacityRebalanceInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.capacityRebalanceInput"></a>

```typescript
public readonly capacityRebalanceInput: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance">SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpotFleetRequestSpotMaintenanceStrategies;
```

- *Type:* <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestSpotMaintenanceStrategies">SpotFleetRequestSpotMaintenanceStrategies</a>

---


### SpotFleetRequestTimeoutsOutputReference <a name="SpotFleetRequestTimeoutsOutputReference" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer"></a>

```typescript
import { spotFleetRequest } from '@cdktf/aws-cdk'

new spotFleetRequest.SpotFleetRequestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpotFleetRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.spotFleetRequest.SpotFleetRequestTimeouts">SpotFleetRequestTimeouts</a>

---



