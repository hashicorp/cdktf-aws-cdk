# `aws_instance`

Refer to the Terraform Registory for docs: [`aws_instance`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance).

# `instance` Submodule <a name="`instance` Submodule" id="@cdktf/aws-cdk.instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Instance <a name="Instance" id="@cdktf/aws-cdk.instance.Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance aws_instance}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.Instance.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.Instance(scope: Construct, id: string, config?: InstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig">InstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.instance.Instance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.instance.Instance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.instance.Instance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceConfig">InstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.putCapacityReservationSpecification">putCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.putCreditSpecification">putCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.putEbsBlockDevice">putEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.putEnclaveOptions">putEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.putEphemeralBlockDevice">putEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.putRootBlockDevice">putRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetAmi">resetAmi</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetCapacityReservationSpecification">resetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetCpuThreadsPerCore">resetCpuThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetCreditSpecification">resetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetDisableApiTermination">resetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetEbsBlockDevice">resetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetEnclaveOptions">resetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetEphemeralBlockDevice">resetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetFetchPasswordData">resetFetchPasswordData</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetHibernation">resetHibernation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetInstanceInitiatedShutdownBehavior">resetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetLaunchTemplate">resetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetPlacementGroup">resetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetPlacementPartitionNumber">resetPlacementPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetRootBlockDevice">resetRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetSecondaryPrivateIps">resetSecondaryPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetSourceDestCheck">resetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetTenancy">resetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetUserDataBase64">resetUserDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetVolumeTags">resetVolumeTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.Instance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.instance.Instance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.instance.Instance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.Instance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.instance.Instance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.instance.Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.instance.Instance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.instance.Instance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.instance.Instance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.Instance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.Instance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.Instance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.Instance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.Instance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.Instance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.Instance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.Instance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.Instance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.Instance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCapacityReservationSpecification` <a name="putCapacityReservationSpecification" id="@cdktf/aws-cdk.instance.Instance.putCapacityReservationSpecification"></a>

```typescript
public putCapacityReservationSpecification(value: InstanceCapacityReservationSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.Instance.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---

##### `putCreditSpecification` <a name="putCreditSpecification" id="@cdktf/aws-cdk.instance.Instance.putCreditSpecification"></a>

```typescript
public putCreditSpecification(value: InstanceCreditSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.Instance.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---

##### `putEbsBlockDevice` <a name="putEbsBlockDevice" id="@cdktf/aws-cdk.instance.Instance.putEbsBlockDevice"></a>

```typescript
public putEbsBlockDevice(value: IResolvable | InstanceEbsBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.Instance.putEbsBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>[]

---

##### `putEnclaveOptions` <a name="putEnclaveOptions" id="@cdktf/aws-cdk.instance.Instance.putEnclaveOptions"></a>

```typescript
public putEnclaveOptions(value: InstanceEnclaveOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.Instance.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---

##### `putEphemeralBlockDevice` <a name="putEphemeralBlockDevice" id="@cdktf/aws-cdk.instance.Instance.putEphemeralBlockDevice"></a>

```typescript
public putEphemeralBlockDevice(value: IResolvable | InstanceEphemeralBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.Instance.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>[]

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/aws-cdk.instance.Instance.putLaunchTemplate"></a>

```typescript
public putLaunchTemplate(value: InstanceLaunchTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.Instance.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktf/aws-cdk.instance.Instance.putMetadataOptions"></a>

```typescript
public putMetadataOptions(value: InstanceMetadataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.Instance.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/aws-cdk.instance.Instance.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | InstanceNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.Instance.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>[]

---

##### `putRootBlockDevice` <a name="putRootBlockDevice" id="@cdktf/aws-cdk.instance.Instance.putRootBlockDevice"></a>

```typescript
public putRootBlockDevice(value: InstanceRootBlockDevice): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.Instance.putRootBlockDevice.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.instance.Instance.putTimeouts"></a>

```typescript
public putTimeouts(value: InstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.Instance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceTimeouts">InstanceTimeouts</a>

---

##### `resetAmi` <a name="resetAmi" id="@cdktf/aws-cdk.instance.Instance.resetAmi"></a>

```typescript
public resetAmi(): void
```

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktf/aws-cdk.instance.Instance.resetAssociatePublicIpAddress"></a>

```typescript
public resetAssociatePublicIpAddress(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/aws-cdk.instance.Instance.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetCapacityReservationSpecification` <a name="resetCapacityReservationSpecification" id="@cdktf/aws-cdk.instance.Instance.resetCapacityReservationSpecification"></a>

```typescript
public resetCapacityReservationSpecification(): void
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktf/aws-cdk.instance.Instance.resetCpuCoreCount"></a>

```typescript
public resetCpuCoreCount(): void
```

##### `resetCpuThreadsPerCore` <a name="resetCpuThreadsPerCore" id="@cdktf/aws-cdk.instance.Instance.resetCpuThreadsPerCore"></a>

```typescript
public resetCpuThreadsPerCore(): void
```

##### `resetCreditSpecification` <a name="resetCreditSpecification" id="@cdktf/aws-cdk.instance.Instance.resetCreditSpecification"></a>

```typescript
public resetCreditSpecification(): void
```

##### `resetDisableApiTermination` <a name="resetDisableApiTermination" id="@cdktf/aws-cdk.instance.Instance.resetDisableApiTermination"></a>

```typescript
public resetDisableApiTermination(): void
```

##### `resetEbsBlockDevice` <a name="resetEbsBlockDevice" id="@cdktf/aws-cdk.instance.Instance.resetEbsBlockDevice"></a>

```typescript
public resetEbsBlockDevice(): void
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/aws-cdk.instance.Instance.resetEbsOptimized"></a>

```typescript
public resetEbsOptimized(): void
```

##### `resetEnclaveOptions` <a name="resetEnclaveOptions" id="@cdktf/aws-cdk.instance.Instance.resetEnclaveOptions"></a>

```typescript
public resetEnclaveOptions(): void
```

##### `resetEphemeralBlockDevice` <a name="resetEphemeralBlockDevice" id="@cdktf/aws-cdk.instance.Instance.resetEphemeralBlockDevice"></a>

```typescript
public resetEphemeralBlockDevice(): void
```

##### `resetFetchPasswordData` <a name="resetFetchPasswordData" id="@cdktf/aws-cdk.instance.Instance.resetFetchPasswordData"></a>

```typescript
public resetFetchPasswordData(): void
```

##### `resetHibernation` <a name="resetHibernation" id="@cdktf/aws-cdk.instance.Instance.resetHibernation"></a>

```typescript
public resetHibernation(): void
```

##### `resetHostId` <a name="resetHostId" id="@cdktf/aws-cdk.instance.Instance.resetHostId"></a>

```typescript
public resetHostId(): void
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/aws-cdk.instance.Instance.resetIamInstanceProfile"></a>

```typescript
public resetIamInstanceProfile(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.instance.Instance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceInitiatedShutdownBehavior` <a name="resetInstanceInitiatedShutdownBehavior" id="@cdktf/aws-cdk.instance.Instance.resetInstanceInitiatedShutdownBehavior"></a>

```typescript
public resetInstanceInitiatedShutdownBehavior(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/aws-cdk.instance.Instance.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktf/aws-cdk.instance.Instance.resetIpv6AddressCount"></a>

```typescript
public resetIpv6AddressCount(): void
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktf/aws-cdk.instance.Instance.resetIpv6Addresses"></a>

```typescript
public resetIpv6Addresses(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/aws-cdk.instance.Instance.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetLaunchTemplate` <a name="resetLaunchTemplate" id="@cdktf/aws-cdk.instance.Instance.resetLaunchTemplate"></a>

```typescript
public resetLaunchTemplate(): void
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktf/aws-cdk.instance.Instance.resetMetadataOptions"></a>

```typescript
public resetMetadataOptions(): void
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/aws-cdk.instance.Instance.resetMonitoring"></a>

```typescript
public resetMonitoring(): void
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/aws-cdk.instance.Instance.resetNetworkInterface"></a>

```typescript
public resetNetworkInterface(): void
```

##### `resetPlacementGroup` <a name="resetPlacementGroup" id="@cdktf/aws-cdk.instance.Instance.resetPlacementGroup"></a>

```typescript
public resetPlacementGroup(): void
```

##### `resetPlacementPartitionNumber` <a name="resetPlacementPartitionNumber" id="@cdktf/aws-cdk.instance.Instance.resetPlacementPartitionNumber"></a>

```typescript
public resetPlacementPartitionNumber(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktf/aws-cdk.instance.Instance.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```

##### `resetRootBlockDevice` <a name="resetRootBlockDevice" id="@cdktf/aws-cdk.instance.Instance.resetRootBlockDevice"></a>

```typescript
public resetRootBlockDevice(): void
```

##### `resetSecondaryPrivateIps` <a name="resetSecondaryPrivateIps" id="@cdktf/aws-cdk.instance.Instance.resetSecondaryPrivateIps"></a>

```typescript
public resetSecondaryPrivateIps(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/aws-cdk.instance.Instance.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSourceDestCheck` <a name="resetSourceDestCheck" id="@cdktf/aws-cdk.instance.Instance.resetSourceDestCheck"></a>

```typescript
public resetSourceDestCheck(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/aws-cdk.instance.Instance.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.instance.Instance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.instance.Instance.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktf/aws-cdk.instance.Instance.resetTenancy"></a>

```typescript
public resetTenancy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.instance.Instance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/aws-cdk.instance.Instance.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetUserDataBase64` <a name="resetUserDataBase64" id="@cdktf/aws-cdk.instance.Instance.resetUserDataBase64"></a>

```typescript
public resetUserDataBase64(): void
```

##### `resetVolumeTags` <a name="resetVolumeTags" id="@cdktf/aws-cdk.instance.Instance.resetVolumeTags"></a>

```typescript
public resetVolumeTags(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/aws-cdk.instance.Instance.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.instance.Instance.isConstruct"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

instance.Instance.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.instance.Instance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.instance.Instance.isTerraformElement"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

instance.Instance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.instance.Instance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.instance.Instance.isTerraformResource"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

instance.Instance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.instance.Instance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference">InstanceCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference">InstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList">InstanceEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference">InstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList">InstanceEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.instanceState">instanceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference">InstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference">InstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList">InstanceNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.passwordData">passwordData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.primaryNetworkInterfaceId">primaryNetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.privateDns">privateDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.publicDns">publicDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference">InstanceRootBlockDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference">InstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.amiInput">amiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.capacityReservationSpecificationInput">capacityReservationSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.cpuThreadsPerCoreInput">cpuThreadsPerCoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.creditSpecificationInput">creditSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.disableApiTerminationInput">disableApiTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.ebsBlockDeviceInput">ebsBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.enclaveOptionsInput">enclaveOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.ephemeralBlockDeviceInput">ephemeralBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.fetchPasswordDataInput">fetchPasswordDataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.hibernationInput">hibernationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.hostIdInput">hostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.instanceInitiatedShutdownBehaviorInput">instanceInitiatedShutdownBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.monitoringInput">monitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.placementGroupInput">placementGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.placementPartitionNumberInput">placementPartitionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.rootBlockDeviceInput">rootBlockDeviceInput</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.secondaryPrivateIpsInput">secondaryPrivateIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.sourceDestCheckInput">sourceDestCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.tenancyInput">tenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceTimeouts">InstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.userDataBase64Input">userDataBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.volumeTagsInput">volumeTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.ami">ami</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.cpuThreadsPerCore">cpuThreadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.fetchPasswordData">fetchPasswordData</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.hibernation">hibernation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.ipv6Addresses">ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.monitoring">monitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.placementGroup">placementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.placementPartitionNumber">placementPartitionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.secondaryPrivateIps">secondaryPrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.sourceDestCheck">sourceDestCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.userDataBase64">userDataBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.volumeTags">volumeTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.instance.Instance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.instance.Instance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.Instance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.instance.Instance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.instance.Instance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.instance.Instance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.instance.Instance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.instance.Instance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.instance.Instance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.instance.Instance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.instance.Instance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.instance.Instance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.instance.Instance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.instance.Instance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.instance.Instance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@cdktf/aws-cdk.instance.Instance.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: InstanceCapacityReservationSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference">InstanceCapacityReservationSpecificationOutputReference</a>

---

##### `creditSpecification`<sup>Required</sup> <a name="creditSpecification" id="@cdktf/aws-cdk.instance.Instance.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: InstanceCreditSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference">InstanceCreditSpecificationOutputReference</a>

---

##### `ebsBlockDevice`<sup>Required</sup> <a name="ebsBlockDevice" id="@cdktf/aws-cdk.instance.Instance.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: InstanceEbsBlockDeviceList;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList">InstanceEbsBlockDeviceList</a>

---

##### `enclaveOptions`<sup>Required</sup> <a name="enclaveOptions" id="@cdktf/aws-cdk.instance.Instance.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: InstanceEnclaveOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference">InstanceEnclaveOptionsOutputReference</a>

---

##### `ephemeralBlockDevice`<sup>Required</sup> <a name="ephemeralBlockDevice" id="@cdktf/aws-cdk.instance.Instance.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: InstanceEphemeralBlockDeviceList;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList">InstanceEphemeralBlockDeviceList</a>

---

##### `instanceState`<sup>Required</sup> <a name="instanceState" id="@cdktf/aws-cdk.instance.Instance.property.instanceState"></a>

```typescript
public readonly instanceState: string;
```

- *Type:* string

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/aws-cdk.instance.Instance.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: InstanceLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference">InstanceLaunchTemplateOutputReference</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktf/aws-cdk.instance.Instance.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: InstanceMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference">InstanceMetadataOptionsOutputReference</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/aws-cdk.instance.Instance.property.networkInterface"></a>

```typescript
public readonly networkInterface: InstanceNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList">InstanceNetworkInterfaceList</a>

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/aws-cdk.instance.Instance.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `passwordData`<sup>Required</sup> <a name="passwordData" id="@cdktf/aws-cdk.instance.Instance.property.passwordData"></a>

```typescript
public readonly passwordData: string;
```

- *Type:* string

---

##### `primaryNetworkInterfaceId`<sup>Required</sup> <a name="primaryNetworkInterfaceId" id="@cdktf/aws-cdk.instance.Instance.property.primaryNetworkInterfaceId"></a>

```typescript
public readonly primaryNetworkInterfaceId: string;
```

- *Type:* string

---

##### `privateDns`<sup>Required</sup> <a name="privateDns" id="@cdktf/aws-cdk.instance.Instance.property.privateDns"></a>

```typescript
public readonly privateDns: string;
```

- *Type:* string

---

##### `publicDns`<sup>Required</sup> <a name="publicDns" id="@cdktf/aws-cdk.instance.Instance.property.publicDns"></a>

```typescript
public readonly publicDns: string;
```

- *Type:* string

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/aws-cdk.instance.Instance.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `rootBlockDevice`<sup>Required</sup> <a name="rootBlockDevice" id="@cdktf/aws-cdk.instance.Instance.property.rootBlockDevice"></a>

```typescript
public readonly rootBlockDevice: InstanceRootBlockDeviceOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference">InstanceRootBlockDeviceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.instance.Instance.property.timeouts"></a>

```typescript
public readonly timeouts: InstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference">InstanceTimeoutsOutputReference</a>

---

##### `amiInput`<sup>Optional</sup> <a name="amiInput" id="@cdktf/aws-cdk.instance.Instance.property.amiInput"></a>

```typescript
public readonly amiInput: string;
```

- *Type:* string

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktf/aws-cdk.instance.Instance.property.associatePublicIpAddressInput"></a>

```typescript
public readonly associatePublicIpAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/aws-cdk.instance.Instance.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `capacityReservationSpecificationInput`<sup>Optional</sup> <a name="capacityReservationSpecificationInput" id="@cdktf/aws-cdk.instance.Instance.property.capacityReservationSpecificationInput"></a>

```typescript
public readonly capacityReservationSpecificationInput: InstanceCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktf/aws-cdk.instance.Instance.property.cpuCoreCountInput"></a>

```typescript
public readonly cpuCoreCountInput: number;
```

- *Type:* number

---

##### `cpuThreadsPerCoreInput`<sup>Optional</sup> <a name="cpuThreadsPerCoreInput" id="@cdktf/aws-cdk.instance.Instance.property.cpuThreadsPerCoreInput"></a>

```typescript
public readonly cpuThreadsPerCoreInput: number;
```

- *Type:* number

---

##### `creditSpecificationInput`<sup>Optional</sup> <a name="creditSpecificationInput" id="@cdktf/aws-cdk.instance.Instance.property.creditSpecificationInput"></a>

```typescript
public readonly creditSpecificationInput: InstanceCreditSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---

##### `disableApiTerminationInput`<sup>Optional</sup> <a name="disableApiTerminationInput" id="@cdktf/aws-cdk.instance.Instance.property.disableApiTerminationInput"></a>

```typescript
public readonly disableApiTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsBlockDeviceInput`<sup>Optional</sup> <a name="ebsBlockDeviceInput" id="@cdktf/aws-cdk.instance.Instance.property.ebsBlockDeviceInput"></a>

```typescript
public readonly ebsBlockDeviceInput: IResolvable | InstanceEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>[]

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/aws-cdk.instance.Instance.property.ebsOptimizedInput"></a>

```typescript
public readonly ebsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enclaveOptionsInput`<sup>Optional</sup> <a name="enclaveOptionsInput" id="@cdktf/aws-cdk.instance.Instance.property.enclaveOptionsInput"></a>

```typescript
public readonly enclaveOptionsInput: InstanceEnclaveOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---

##### `ephemeralBlockDeviceInput`<sup>Optional</sup> <a name="ephemeralBlockDeviceInput" id="@cdktf/aws-cdk.instance.Instance.property.ephemeralBlockDeviceInput"></a>

```typescript
public readonly ephemeralBlockDeviceInput: IResolvable | InstanceEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>[]

---

##### `fetchPasswordDataInput`<sup>Optional</sup> <a name="fetchPasswordDataInput" id="@cdktf/aws-cdk.instance.Instance.property.fetchPasswordDataInput"></a>

```typescript
public readonly fetchPasswordDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hibernationInput`<sup>Optional</sup> <a name="hibernationInput" id="@cdktf/aws-cdk.instance.Instance.property.hibernationInput"></a>

```typescript
public readonly hibernationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktf/aws-cdk.instance.Instance.property.hostIdInput"></a>

```typescript
public readonly hostIdInput: string;
```

- *Type:* string

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/aws-cdk.instance.Instance.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.instance.Instance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehaviorInput" id="@cdktf/aws-cdk.instance.Instance.property.instanceInitiatedShutdownBehaviorInput"></a>

```typescript
public readonly instanceInitiatedShutdownBehaviorInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/aws-cdk.instance.Instance.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktf/aws-cdk.instance.Instance.property.ipv6AddressCountInput"></a>

```typescript
public readonly ipv6AddressCountInput: number;
```

- *Type:* number

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktf/aws-cdk.instance.Instance.property.ipv6AddressesInput"></a>

```typescript
public readonly ipv6AddressesInput: string[];
```

- *Type:* string[]

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/aws-cdk.instance.Instance.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/aws-cdk.instance.Instance.property.launchTemplateInput"></a>

```typescript
public readonly launchTemplateInput: InstanceLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktf/aws-cdk.instance.Instance.property.metadataOptionsInput"></a>

```typescript
public readonly metadataOptionsInput: InstanceMetadataOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/aws-cdk.instance.Instance.property.monitoringInput"></a>

```typescript
public readonly monitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/aws-cdk.instance.Instance.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | InstanceNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>[]

---

##### `placementGroupInput`<sup>Optional</sup> <a name="placementGroupInput" id="@cdktf/aws-cdk.instance.Instance.property.placementGroupInput"></a>

```typescript
public readonly placementGroupInput: string;
```

- *Type:* string

---

##### `placementPartitionNumberInput`<sup>Optional</sup> <a name="placementPartitionNumberInput" id="@cdktf/aws-cdk.instance.Instance.property.placementPartitionNumberInput"></a>

```typescript
public readonly placementPartitionNumberInput: number;
```

- *Type:* number

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktf/aws-cdk.instance.Instance.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `rootBlockDeviceInput`<sup>Optional</sup> <a name="rootBlockDeviceInput" id="@cdktf/aws-cdk.instance.Instance.property.rootBlockDeviceInput"></a>

```typescript
public readonly rootBlockDeviceInput: InstanceRootBlockDevice;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---

##### `secondaryPrivateIpsInput`<sup>Optional</sup> <a name="secondaryPrivateIpsInput" id="@cdktf/aws-cdk.instance.Instance.property.secondaryPrivateIpsInput"></a>

```typescript
public readonly secondaryPrivateIpsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/aws-cdk.instance.Instance.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `sourceDestCheckInput`<sup>Optional</sup> <a name="sourceDestCheckInput" id="@cdktf/aws-cdk.instance.Instance.property.sourceDestCheckInput"></a>

```typescript
public readonly sourceDestCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/aws-cdk.instance.Instance.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.instance.Instance.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.instance.Instance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktf/aws-cdk.instance.Instance.property.tenancyInput"></a>

```typescript
public readonly tenancyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.instance.Instance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | InstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceTimeouts">InstanceTimeouts</a>

---

##### `userDataBase64Input`<sup>Optional</sup> <a name="userDataBase64Input" id="@cdktf/aws-cdk.instance.Instance.property.userDataBase64Input"></a>

```typescript
public readonly userDataBase64Input: string;
```

- *Type:* string

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/aws-cdk.instance.Instance.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `volumeTagsInput`<sup>Optional</sup> <a name="volumeTagsInput" id="@cdktf/aws-cdk.instance.Instance.property.volumeTagsInput"></a>

```typescript
public readonly volumeTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/aws-cdk.instance.Instance.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `ami`<sup>Required</sup> <a name="ami" id="@cdktf/aws-cdk.instance.Instance.property.ami"></a>

```typescript
public readonly ami: string;
```

- *Type:* string

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/aws-cdk.instance.Instance.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.instance.Instance.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/aws-cdk.instance.Instance.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `cpuThreadsPerCore`<sup>Required</sup> <a name="cpuThreadsPerCore" id="@cdktf/aws-cdk.instance.Instance.property.cpuThreadsPerCore"></a>

```typescript
public readonly cpuThreadsPerCore: number;
```

- *Type:* number

---

##### `disableApiTermination`<sup>Required</sup> <a name="disableApiTermination" id="@cdktf/aws-cdk.instance.Instance.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/aws-cdk.instance.Instance.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchPasswordData`<sup>Required</sup> <a name="fetchPasswordData" id="@cdktf/aws-cdk.instance.Instance.property.fetchPasswordData"></a>

```typescript
public readonly fetchPasswordData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hibernation`<sup>Required</sup> <a name="hibernation" id="@cdktf/aws-cdk.instance.Instance.property.hibernation"></a>

```typescript
public readonly hibernation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/aws-cdk.instance.Instance.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/aws-cdk.instance.Instance.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.instance.Instance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/aws-cdk.instance.Instance.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/aws-cdk.instance.Instance.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktf/aws-cdk.instance.Instance.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktf/aws-cdk.instance.Instance.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: string[];
```

- *Type:* string[]

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/aws-cdk.instance.Instance.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/aws-cdk.instance.Instance.property.monitoring"></a>

```typescript
public readonly monitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `placementGroup`<sup>Required</sup> <a name="placementGroup" id="@cdktf/aws-cdk.instance.Instance.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

---

##### `placementPartitionNumber`<sup>Required</sup> <a name="placementPartitionNumber" id="@cdktf/aws-cdk.instance.Instance.property.placementPartitionNumber"></a>

```typescript
public readonly placementPartitionNumber: number;
```

- *Type:* number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/aws-cdk.instance.Instance.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `secondaryPrivateIps`<sup>Required</sup> <a name="secondaryPrivateIps" id="@cdktf/aws-cdk.instance.Instance.property.secondaryPrivateIps"></a>

```typescript
public readonly secondaryPrivateIps: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/aws-cdk.instance.Instance.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `sourceDestCheck`<sup>Required</sup> <a name="sourceDestCheck" id="@cdktf/aws-cdk.instance.Instance.property.sourceDestCheck"></a>

```typescript
public readonly sourceDestCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.instance.Instance.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.instance.Instance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.instance.Instance.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/aws-cdk.instance.Instance.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/aws-cdk.instance.Instance.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `userDataBase64`<sup>Required</sup> <a name="userDataBase64" id="@cdktf/aws-cdk.instance.Instance.property.userDataBase64"></a>

```typescript
public readonly userDataBase64: string;
```

- *Type:* string

---

##### `volumeTags`<sup>Required</sup> <a name="volumeTags" id="@cdktf/aws-cdk.instance.Instance.property.volumeTags"></a>

```typescript
public readonly volumeTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/aws-cdk.instance.Instance.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.Instance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.instance.Instance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InstanceCapacityReservationSpecification <a name="InstanceCapacityReservationSpecification" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceCapacityReservationSpecification: instance.InstanceCapacityReservationSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#capacity_reservation_preference Instance#capacity_reservation_preference}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `capacityReservationPreference`<sup>Optional</sup> <a name="capacityReservationPreference" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#capacity_reservation_preference Instance#capacity_reservation_preference}.

---

##### `capacityReservationTarget`<sup>Optional</sup> <a name="capacityReservationTarget" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: InstanceCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#capacity_reservation_target Instance#capacity_reservation_target}

---

### InstanceCapacityReservationSpecificationCapacityReservationTarget <a name="InstanceCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceCapacityReservationSpecificationCapacityReservationTarget: instance.InstanceCapacityReservationSpecificationCapacityReservationTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#capacity_reservation_id Instance#capacity_reservation_id}. |

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#capacity_reservation_id Instance#capacity_reservation_id}.

---

### InstanceConfig <a name="InstanceConfig" id="@cdktf/aws-cdk.instance.InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceConfig.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceConfig: instance.InstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.ami">ami</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#ami Instance#ami}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#associate_public_ip_address Instance#associate_public_ip_address}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#availability_zone Instance#availability_zone}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#cpu_core_count Instance#cpu_core_count}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.cpuThreadsPerCore">cpuThreadsPerCore</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#cpu_threads_per_core Instance#cpu_threads_per_core}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#disable_api_termination Instance#disable_api_termination}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>[]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#ebs_optimized Instance#ebs_optimized}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>[]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.fetchPasswordData">fetchPasswordData</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#get_password_data Instance#get_password_data}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.hibernation">hibernation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#hibernation Instance#hibernation}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.hostId">hostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#host_id Instance#host_id}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#iam_instance_profile Instance#iam_instance_profile}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#id Instance#id}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#instance_type Instance#instance_type}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#ipv6_address_count Instance#ipv6_address_count}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.ipv6Addresses">ipv6Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#ipv6_addresses Instance#ipv6_addresses}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#key_name Instance#key_name}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.monitoring">monitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#monitoring Instance#monitoring}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.placementGroup">placementGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#placement_group Instance#placement_group}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.placementPartitionNumber">placementPartitionNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#placement_partition_number Instance#placement_partition_number}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#private_ip Instance#private_ip}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.secondaryPrivateIps">secondaryPrivateIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#secondary_private_ips Instance#secondary_private_ips}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#security_groups Instance#security_groups}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.sourceDestCheck">sourceDestCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#source_dest_check Instance#source_dest_check}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#subnet_id Instance#subnet_id}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#tags_all Instance#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.tenancy">tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#tenancy Instance#tenancy}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeouts">InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#user_data Instance#user_data}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.userDataBase64">userDataBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#user_data_base64 Instance#user_data_base64}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.volumeTags">volumeTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#volume_tags Instance#volume_tags}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#vpc_security_group_ids Instance#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.instance.InstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.instance.InstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.instance.InstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.instance.InstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.instance.InstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.instance.InstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.instance.InstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ami`<sup>Optional</sup> <a name="ami" id="@cdktf/aws-cdk.instance.InstanceConfig.property.ami"></a>

```typescript
public readonly ami: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#ami Instance#ami}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/aws-cdk.instance.InstanceConfig.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#associate_public_ip_address Instance#associate_public_ip_address}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.instance.InstanceConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#availability_zone Instance#availability_zone}.

---

##### `capacityReservationSpecification`<sup>Optional</sup> <a name="capacityReservationSpecification" id="@cdktf/aws-cdk.instance.InstanceConfig.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: InstanceCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#capacity_reservation_specification Instance#capacity_reservation_specification}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktf/aws-cdk.instance.InstanceConfig.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#cpu_core_count Instance#cpu_core_count}.

---

##### `cpuThreadsPerCore`<sup>Optional</sup> <a name="cpuThreadsPerCore" id="@cdktf/aws-cdk.instance.InstanceConfig.property.cpuThreadsPerCore"></a>

```typescript
public readonly cpuThreadsPerCore: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#cpu_threads_per_core Instance#cpu_threads_per_core}.

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@cdktf/aws-cdk.instance.InstanceConfig.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: InstanceCreditSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#credit_specification Instance#credit_specification}

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@cdktf/aws-cdk.instance.InstanceConfig.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#disable_api_termination Instance#disable_api_termination}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/aws-cdk.instance.InstanceConfig.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: IResolvable | InstanceEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>[]

ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#ebs_block_device Instance#ebs_block_device}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/aws-cdk.instance.InstanceConfig.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#ebs_optimized Instance#ebs_optimized}.

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@cdktf/aws-cdk.instance.InstanceConfig.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: InstanceEnclaveOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#enclave_options Instance#enclave_options}

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/aws-cdk.instance.InstanceConfig.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: IResolvable | InstanceEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>[]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#ephemeral_block_device Instance#ephemeral_block_device}

---

##### `fetchPasswordData`<sup>Optional</sup> <a name="fetchPasswordData" id="@cdktf/aws-cdk.instance.InstanceConfig.property.fetchPasswordData"></a>

```typescript
public readonly fetchPasswordData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#get_password_data Instance#get_password_data}.

---

##### `hibernation`<sup>Optional</sup> <a name="hibernation" id="@cdktf/aws-cdk.instance.InstanceConfig.property.hibernation"></a>

```typescript
public readonly hibernation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#hibernation Instance#hibernation}.

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktf/aws-cdk.instance.InstanceConfig.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#host_id Instance#host_id}.

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/aws-cdk.instance.InstanceConfig.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#iam_instance_profile Instance#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.instance.InstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/aws-cdk.instance.InstanceConfig.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/aws-cdk.instance.InstanceConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#instance_type Instance#instance_type}.

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktf/aws-cdk.instance.InstanceConfig.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#ipv6_address_count Instance#ipv6_address_count}.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktf/aws-cdk.instance.InstanceConfig.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#ipv6_addresses Instance#ipv6_addresses}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/aws-cdk.instance.InstanceConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#key_name Instance#key_name}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktf/aws-cdk.instance.InstanceConfig.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: InstanceLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#launch_template Instance#launch_template}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktf/aws-cdk.instance.InstanceConfig.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: InstanceMetadataOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#metadata_options Instance#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/aws-cdk.instance.InstanceConfig.property.monitoring"></a>

```typescript
public readonly monitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#monitoring Instance#monitoring}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/aws-cdk.instance.InstanceConfig.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | InstanceNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#network_interface Instance#network_interface}

---

##### `placementGroup`<sup>Optional</sup> <a name="placementGroup" id="@cdktf/aws-cdk.instance.InstanceConfig.property.placementGroup"></a>

```typescript
public readonly placementGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#placement_group Instance#placement_group}.

---

##### `placementPartitionNumber`<sup>Optional</sup> <a name="placementPartitionNumber" id="@cdktf/aws-cdk.instance.InstanceConfig.property.placementPartitionNumber"></a>

```typescript
public readonly placementPartitionNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#placement_partition_number Instance#placement_partition_number}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/aws-cdk.instance.InstanceConfig.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#private_ip Instance#private_ip}.

---

##### `rootBlockDevice`<sup>Optional</sup> <a name="rootBlockDevice" id="@cdktf/aws-cdk.instance.InstanceConfig.property.rootBlockDevice"></a>

```typescript
public readonly rootBlockDevice: InstanceRootBlockDevice;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#root_block_device Instance#root_block_device}

---

##### `secondaryPrivateIps`<sup>Optional</sup> <a name="secondaryPrivateIps" id="@cdktf/aws-cdk.instance.InstanceConfig.property.secondaryPrivateIps"></a>

```typescript
public readonly secondaryPrivateIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#secondary_private_ips Instance#secondary_private_ips}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/aws-cdk.instance.InstanceConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#security_groups Instance#security_groups}.

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktf/aws-cdk.instance.InstanceConfig.property.sourceDestCheck"></a>

```typescript
public readonly sourceDestCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#source_dest_check Instance#source_dest_check}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/aws-cdk.instance.InstanceConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#subnet_id Instance#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.instance.InstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#tags Instance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.instance.InstanceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#tags_all Instance#tags_all}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/aws-cdk.instance.InstanceConfig.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#tenancy Instance#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.instance.InstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: InstanceTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceTimeouts">InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#timeouts Instance#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/aws-cdk.instance.InstanceConfig.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#user_data Instance#user_data}.

---

##### `userDataBase64`<sup>Optional</sup> <a name="userDataBase64" id="@cdktf/aws-cdk.instance.InstanceConfig.property.userDataBase64"></a>

```typescript
public readonly userDataBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#user_data_base64 Instance#user_data_base64}.

---

##### `volumeTags`<sup>Optional</sup> <a name="volumeTags" id="@cdktf/aws-cdk.instance.InstanceConfig.property.volumeTags"></a>

```typescript
public readonly volumeTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#volume_tags Instance#volume_tags}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/aws-cdk.instance.InstanceConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#vpc_security_group_ids Instance#vpc_security_group_ids}.

---

### InstanceCreditSpecification <a name="InstanceCreditSpecification" id="@cdktf/aws-cdk.instance.InstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceCreditSpecification.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceCreditSpecification: instance.InstanceCreditSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecification.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#cpu_credits Instance#cpu_credits}. |

---

##### `cpuCredits`<sup>Optional</sup> <a name="cpuCredits" id="@cdktf/aws-cdk.instance.InstanceCreditSpecification.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#cpu_credits Instance#cpu_credits}.

---

### InstanceEbsBlockDevice <a name="InstanceEbsBlockDevice" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceEbsBlockDevice: instance.InstanceEbsBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#device_name Instance#device_name}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#encrypted Instance#encrypted}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#iops Instance#iops}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#kms_key_id Instance#kms_key_id}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#snapshot_id Instance#snapshot_id}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#throughput Instance#throughput}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#volume_size Instance#volume_size}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#volume_type Instance#volume_type}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#device_name Instance#device_name}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#encrypted Instance#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#iops Instance#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#kms_key_id Instance#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#snapshot_id Instance#snapshot_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#tags Instance#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#throughput Instance#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#volume_size Instance#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#volume_type Instance#volume_type}.

---

### InstanceEnclaveOptions <a name="InstanceEnclaveOptions" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptions.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceEnclaveOptions: instance.InstanceEnclaveOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#enabled Instance#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#enabled Instance#enabled}.

---

### InstanceEphemeralBlockDevice <a name="InstanceEphemeralBlockDevice" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceEphemeralBlockDevice: instance.InstanceEphemeralBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#device_name Instance#device_name}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice.property.noDevice">noDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#no_device Instance#no_device}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice.property.virtualName">virtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#virtual_name Instance#virtual_name}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#device_name Instance#device_name}.

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice.property.noDevice"></a>

```typescript
public readonly noDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#no_device Instance#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#virtual_name Instance#virtual_name}.

---

### InstanceLaunchTemplate <a name="InstanceLaunchTemplate" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplate.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceLaunchTemplate: instance.InstanceLaunchTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplate.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#id Instance#id}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplate.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#name Instance#name}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplate.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#version Instance#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#id Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#name Instance#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplate.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#version Instance#version}.

---

### InstanceMetadataOptions <a name="InstanceMetadataOptions" id="@cdktf/aws-cdk.instance.InstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceMetadataOptions.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceMetadataOptions: instance.InstanceMetadataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptions.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#http_endpoint Instance#http_endpoint}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#http_tokens Instance#http_tokens}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptions.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#instance_metadata_tags Instance#instance_metadata_tags}. |

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktf/aws-cdk.instance.InstanceMetadataOptions.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#http_endpoint Instance#http_endpoint}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktf/aws-cdk.instance.InstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}.

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktf/aws-cdk.instance.InstanceMetadataOptions.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#http_tokens Instance#http_tokens}.

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="@cdktf/aws-cdk.instance.InstanceMetadataOptions.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#instance_metadata_tags Instance#instance_metadata_tags}.

---

### InstanceNetworkInterface <a name="InstanceNetworkInterface" id="@cdktf/aws-cdk.instance.InstanceNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceNetworkInterface.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceNetworkInterface: instance.InstanceNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#device_index Instance#device_index}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#network_interface_id Instance#network_interface_id}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#delete_on_termination Instance#delete_on_termination}. |

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktf/aws-cdk.instance.InstanceNetworkInterface.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#device_index Instance#device_index}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/aws-cdk.instance.InstanceNetworkInterface.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#network_interface_id Instance#network_interface_id}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.instance.InstanceNetworkInterface.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#delete_on_termination Instance#delete_on_termination}.

---

### InstanceRootBlockDevice <a name="InstanceRootBlockDevice" id="@cdktf/aws-cdk.instance.InstanceRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceRootBlockDevice.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceRootBlockDevice: instance.InstanceRootBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#delete_on_termination Instance#delete_on_termination}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#encrypted Instance#encrypted}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#iops Instance#iops}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#kms_key_id Instance#kms_key_id}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#tags Instance#tags}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#throughput Instance#throughput}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#volume_size Instance#volume_size}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#volume_type Instance#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#delete_on_termination Instance#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#encrypted Instance#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#iops Instance#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#kms_key_id Instance#kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#tags Instance#tags}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#throughput Instance#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#volume_size Instance#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/aws-cdk.instance.InstanceRootBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#volume_type Instance#volume_type}.

---

### InstanceTimeouts <a name="InstanceTimeouts" id="@cdktf/aws-cdk.instance.InstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.instance.InstanceTimeouts.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

const instanceTimeouts: instance.InstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#create Instance#create}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#delete Instance#delete}. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#update Instance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.instance.InstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#create Instance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.instance.InstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#delete Instance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.instance.InstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/instance#update Instance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```typescript
public resetCapacityReservationId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```typescript
public readonly capacityReservationIdInput: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstanceCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---


### InstanceCapacityReservationSpecificationOutputReference <a name="InstanceCapacityReservationSpecificationOutputReference" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceCapacityReservationSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">putCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">resetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">resetCapacityReservationTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityReservationTarget` <a name="putCapacityReservationTarget" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```typescript
public putCapacityReservationTarget(value: InstanceCapacityReservationSpecificationCapacityReservationTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `resetCapacityReservationPreference` <a name="resetCapacityReservationPreference" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```typescript
public resetCapacityReservationPreference(): void
```

##### `resetCapacityReservationTarget` <a name="resetCapacityReservationTarget" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```typescript
public resetCapacityReservationTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">capacityReservationPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">capacityReservationTargetInput</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `capacityReservationPreferenceInput`<sup>Optional</sup> <a name="capacityReservationPreferenceInput" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```typescript
public readonly capacityReservationPreferenceInput: string;
```

- *Type:* string

---

##### `capacityReservationTargetInput`<sup>Optional</sup> <a name="capacityReservationTargetInput" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```typescript
public readonly capacityReservationTargetInput: InstanceCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationCapacityReservationTarget">InstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstanceCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCapacityReservationSpecification">InstanceCapacityReservationSpecification</a>

---


### InstanceCreditSpecificationOutputReference <a name="InstanceCreditSpecificationOutputReference" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceCreditSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.resetCpuCredits">resetCpuCredits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCredits` <a name="resetCpuCredits" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```typescript
public resetCpuCredits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.property.cpuCreditsInput">cpuCreditsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecification">InstanceCreditSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCreditsInput`<sup>Optional</sup> <a name="cpuCreditsInput" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```typescript
public readonly cpuCreditsInput: string;
```

- *Type:* string

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceCreditSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstanceCreditSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceCreditSpecification">InstanceCreditSpecification</a>

---


### InstanceEbsBlockDeviceList <a name="InstanceEbsBlockDeviceList" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceEbsBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.get"></a>

```typescript
public get(index: number): InstanceEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InstanceEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>[]

---


### InstanceEbsBlockDeviceOutputReference <a name="InstanceEbsBlockDeviceOutputReference" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceEbsBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceEbsBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InstanceEbsBlockDevice;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceEbsBlockDevice">InstanceEbsBlockDevice</a>

---


### InstanceEnclaveOptionsOutputReference <a name="InstanceEnclaveOptionsOutputReference" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceEnclaveOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstanceEnclaveOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceEnclaveOptions">InstanceEnclaveOptions</a>

---


### InstanceEphemeralBlockDeviceList <a name="InstanceEphemeralBlockDeviceList" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceEphemeralBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.get"></a>

```typescript
public get(index: number): InstanceEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InstanceEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>[]

---


### InstanceEphemeralBlockDeviceOutputReference <a name="InstanceEphemeralBlockDeviceOutputReference" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceEphemeralBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.resetNoDevice"></a>

```typescript
public resetNoDevice(): void
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.resetVirtualName"></a>

```typescript
public resetVirtualName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDevice">noDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDeviceInput"></a>

```typescript
public readonly noDeviceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```typescript
public readonly virtualNameInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InstanceEphemeralBlockDevice;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceEphemeralBlockDevice">InstanceEphemeralBlockDevice</a>

---


### InstanceLaunchTemplateOutputReference <a name="InstanceLaunchTemplateOutputReference" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstanceLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceLaunchTemplate">InstanceLaunchTemplate</a>

---


### InstanceMetadataOptionsOutputReference <a name="InstanceMetadataOptionsOutputReference" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags">resetInstanceMetadataTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```typescript
public resetHttpEndpoint(): void
```

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```typescript
public resetHttpPutResponseHopLimit(): void
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```typescript
public resetHttpTokens(): void
```

##### `resetInstanceMetadataTags` <a name="resetInstanceMetadataTags" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```typescript
public resetInstanceMetadataTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instanceMetadataTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptions">InstanceMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```typescript
public readonly httpEndpointInput: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```typescript
public readonly httpPutResponseHopLimitInput: number;
```

- *Type:* number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```typescript
public readonly httpTokensInput: string;
```

- *Type:* string

---

##### `instanceMetadataTagsInput`<sup>Optional</sup> <a name="instanceMetadataTagsInput" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```typescript
public readonly instanceMetadataTagsInput: string;
```

- *Type:* string

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstanceMetadataOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceMetadataOptions">InstanceMetadataOptions</a>

---


### InstanceNetworkInterfaceList <a name="InstanceNetworkInterfaceList" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.get"></a>

```typescript
public get(index: number): InstanceNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InstanceNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>[]

---


### InstanceNetworkInterfaceOutputReference <a name="InstanceNetworkInterfaceOutputReference" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndexInput">deviceIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface">InstanceNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndexInput"></a>

```typescript
public readonly deviceIndexInput: number;
```

- *Type:* number

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InstanceNetworkInterface;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceNetworkInterface">InstanceNetworkInterface</a>

---


### InstanceRootBlockDeviceOutputReference <a name="InstanceRootBlockDeviceOutputReference" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceRootBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceRootBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstanceRootBlockDevice;
```

- *Type:* <a href="#@cdktf/aws-cdk.instance.InstanceRootBlockDevice">InstanceRootBlockDevice</a>

---


### InstanceTimeoutsOutputReference <a name="InstanceTimeoutsOutputReference" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { instance } from '@cdktf/aws-cdk'

new instance.InstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.instance.InstanceTimeouts">InstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.instance.InstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.instance.InstanceTimeouts">InstanceTimeouts</a>

---



