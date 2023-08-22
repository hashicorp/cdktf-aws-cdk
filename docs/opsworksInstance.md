# `aws_opsworks_instance`

Refer to the Terraform Registory for docs: [`aws_opsworks_instance`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance).

# `opsworksInstance` Submodule <a name="`opsworksInstance` Submodule" id="@cdktf/aws-cdk.opsworksInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksInstance <a name="OpsworksInstance" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance aws_opsworks_instance}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

new opsworksInstance.OpsworksInstance(scope: Construct, id: string, config: OpsworksInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig">OpsworksInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig">OpsworksInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putEbsBlockDevice">putEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putEphemeralBlockDevice">putEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putRootBlockDevice">putRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetAgentVersion">resetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetAmiId">resetAmiId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetArchitecture">resetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetAutoScalingType">resetAutoScalingType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetDeleteEbs">resetDeleteEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetDeleteEip">resetDeleteEip</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetEbsBlockDevice">resetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetEcsClusterArn">resetEcsClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetElasticIp">resetElasticIp</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetEphemeralBlockDevice">resetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetInfrastructureClass">resetInfrastructureClass</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetLastServiceErrorId">resetLastServiceErrorId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetOs">resetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetPrivateDns">resetPrivateDns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetPublicDns">resetPublicDns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetPublicIp">resetPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetRegisteredBy">resetRegisteredBy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetReportedAgentVersion">resetReportedAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetReportedOsFamily">resetReportedOsFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetReportedOsName">resetReportedOsName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetReportedOsVersion">resetReportedOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetRootBlockDevice">resetRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetRootDeviceType">resetRootDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetRootDeviceVolumeId">resetRootDeviceVolumeId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetSshHostDsaKeyFingerprint">resetSshHostDsaKeyFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetSshHostRsaKeyFingerprint">resetSshHostRsaKeyFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetSshKeyName">resetSshKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetTenancy">resetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetVirtualizationType">resetVirtualizationType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEbsBlockDevice` <a name="putEbsBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putEbsBlockDevice"></a>

```typescript
public putEbsBlockDevice(value: IResolvable | OpsworksInstanceEbsBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putEbsBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>[]

---

##### `putEphemeralBlockDevice` <a name="putEphemeralBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putEphemeralBlockDevice"></a>

```typescript
public putEphemeralBlockDevice(value: IResolvable | OpsworksInstanceEphemeralBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>[]

---

##### `putRootBlockDevice` <a name="putRootBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putRootBlockDevice"></a>

```typescript
public putRootBlockDevice(value: IResolvable | OpsworksInstanceRootBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putRootBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: OpsworksInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a>

---

##### `resetAgentVersion` <a name="resetAgentVersion" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetAgentVersion"></a>

```typescript
public resetAgentVersion(): void
```

##### `resetAmiId` <a name="resetAmiId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetAmiId"></a>

```typescript
public resetAmiId(): void
```

##### `resetArchitecture` <a name="resetArchitecture" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetArchitecture"></a>

```typescript
public resetArchitecture(): void
```

##### `resetAutoScalingType` <a name="resetAutoScalingType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetAutoScalingType"></a>

```typescript
public resetAutoScalingType(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetDeleteEbs` <a name="resetDeleteEbs" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetDeleteEbs"></a>

```typescript
public resetDeleteEbs(): void
```

##### `resetDeleteEip` <a name="resetDeleteEip" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetDeleteEip"></a>

```typescript
public resetDeleteEip(): void
```

##### `resetEbsBlockDevice` <a name="resetEbsBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetEbsBlockDevice"></a>

```typescript
public resetEbsBlockDevice(): void
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetEbsOptimized"></a>

```typescript
public resetEbsOptimized(): void
```

##### `resetEcsClusterArn` <a name="resetEcsClusterArn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetEcsClusterArn"></a>

```typescript
public resetEcsClusterArn(): void
```

##### `resetElasticIp` <a name="resetElasticIp" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetElasticIp"></a>

```typescript
public resetElasticIp(): void
```

##### `resetEphemeralBlockDevice` <a name="resetEphemeralBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetEphemeralBlockDevice"></a>

```typescript
public resetEphemeralBlockDevice(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInfrastructureClass` <a name="resetInfrastructureClass" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetInfrastructureClass"></a>

```typescript
public resetInfrastructureClass(): void
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetInstallUpdatesOnBoot"></a>

```typescript
public resetInstallUpdatesOnBoot(): void
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetInstanceProfileArn"></a>

```typescript
public resetInstanceProfileArn(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLastServiceErrorId` <a name="resetLastServiceErrorId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetLastServiceErrorId"></a>

```typescript
public resetLastServiceErrorId(): void
```

##### `resetOs` <a name="resetOs" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetOs"></a>

```typescript
public resetOs(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetPrivateDns` <a name="resetPrivateDns" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetPrivateDns"></a>

```typescript
public resetPrivateDns(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```

##### `resetPublicDns` <a name="resetPublicDns" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetPublicDns"></a>

```typescript
public resetPublicDns(): void
```

##### `resetPublicIp` <a name="resetPublicIp" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetPublicIp"></a>

```typescript
public resetPublicIp(): void
```

##### `resetRegisteredBy` <a name="resetRegisteredBy" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetRegisteredBy"></a>

```typescript
public resetRegisteredBy(): void
```

##### `resetReportedAgentVersion` <a name="resetReportedAgentVersion" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetReportedAgentVersion"></a>

```typescript
public resetReportedAgentVersion(): void
```

##### `resetReportedOsFamily` <a name="resetReportedOsFamily" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetReportedOsFamily"></a>

```typescript
public resetReportedOsFamily(): void
```

##### `resetReportedOsName` <a name="resetReportedOsName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetReportedOsName"></a>

```typescript
public resetReportedOsName(): void
```

##### `resetReportedOsVersion` <a name="resetReportedOsVersion" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetReportedOsVersion"></a>

```typescript
public resetReportedOsVersion(): void
```

##### `resetRootBlockDevice` <a name="resetRootBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetRootBlockDevice"></a>

```typescript
public resetRootBlockDevice(): void
```

##### `resetRootDeviceType` <a name="resetRootDeviceType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetRootDeviceType"></a>

```typescript
public resetRootDeviceType(): void
```

##### `resetRootDeviceVolumeId` <a name="resetRootDeviceVolumeId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetRootDeviceVolumeId"></a>

```typescript
public resetRootDeviceVolumeId(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSshHostDsaKeyFingerprint` <a name="resetSshHostDsaKeyFingerprint" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetSshHostDsaKeyFingerprint"></a>

```typescript
public resetSshHostDsaKeyFingerprint(): void
```

##### `resetSshHostRsaKeyFingerprint` <a name="resetSshHostRsaKeyFingerprint" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetSshHostRsaKeyFingerprint"></a>

```typescript
public resetSshHostRsaKeyFingerprint(): void
```

##### `resetSshKeyName` <a name="resetSshKeyName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetSshKeyName"></a>

```typescript
public resetSshKeyName(): void
```

##### `resetState` <a name="resetState" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetTenancy"></a>

```typescript
public resetTenancy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualizationType` <a name="resetVirtualizationType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.resetVirtualizationType"></a>

```typescript
public resetVirtualizationType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.isConstruct"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

opsworksInstance.OpsworksInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.isTerraformElement"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

opsworksInstance.OpsworksInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.isTerraformResource"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

opsworksInstance.OpsworksInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList">OpsworksInstanceEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ec2InstanceId">ec2InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList">OpsworksInstanceEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootBlockDevice">rootBlockDevice</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList">OpsworksInstanceRootBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference">OpsworksInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.agentVersionInput">agentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.amiIdInput">amiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.architectureInput">architectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.autoScalingTypeInput">autoScalingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.createdAtInput">createdAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.deleteEbsInput">deleteEbsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.deleteEipInput">deleteEipInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ebsBlockDeviceInput">ebsBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ecsClusterArnInput">ecsClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.elasticIpInput">elasticIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ephemeralBlockDeviceInput">ephemeralBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.infrastructureClassInput">infrastructureClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.lastServiceErrorIdInput">lastServiceErrorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.layerIdsInput">layerIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.osInput">osInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.privateDnsInput">privateDnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.publicDnsInput">publicDnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.publicIpInput">publicIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.registeredByInput">registeredByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedAgentVersionInput">reportedAgentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsFamilyInput">reportedOsFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsNameInput">reportedOsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsVersionInput">reportedOsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootBlockDeviceInput">rootBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootDeviceTypeInput">rootDeviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootDeviceVolumeIdInput">rootDeviceVolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshHostDsaKeyFingerprintInput">sshHostDsaKeyFingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshHostRsaKeyFingerprintInput">sshHostRsaKeyFingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshKeyNameInput">sshKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.tenancyInput">tenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.virtualizationTypeInput">virtualizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.amiId">amiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.autoScalingType">autoScalingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.deleteEbs">deleteEbs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.deleteEip">deleteEip</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ecsClusterArn">ecsClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.elasticIp">elasticIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.infrastructureClass">infrastructureClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.lastServiceErrorId">lastServiceErrorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.layerIds">layerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.privateDns">privateDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.publicDns">publicDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.registeredBy">registeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedAgentVersion">reportedAgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsFamily">reportedOsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsName">reportedOsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsVersion">reportedOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootDeviceType">rootDeviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootDeviceVolumeId">rootDeviceVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshHostDsaKeyFingerprint">sshHostDsaKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshHostRsaKeyFingerprint">sshHostRsaKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshKeyName">sshKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.virtualizationType">virtualizationType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ebsBlockDevice`<sup>Required</sup> <a name="ebsBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: OpsworksInstanceEbsBlockDeviceList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList">OpsworksInstanceEbsBlockDeviceList</a>

---

##### `ec2InstanceId`<sup>Required</sup> <a name="ec2InstanceId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ec2InstanceId"></a>

```typescript
public readonly ec2InstanceId: string;
```

- *Type:* string

---

##### `ephemeralBlockDevice`<sup>Required</sup> <a name="ephemeralBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: OpsworksInstanceEphemeralBlockDeviceList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList">OpsworksInstanceEphemeralBlockDeviceList</a>

---

##### `rootBlockDevice`<sup>Required</sup> <a name="rootBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootBlockDevice"></a>

```typescript
public readonly rootBlockDevice: OpsworksInstanceRootBlockDeviceList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList">OpsworksInstanceRootBlockDeviceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.timeouts"></a>

```typescript
public readonly timeouts: OpsworksInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference">OpsworksInstanceTimeoutsOutputReference</a>

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.agentVersionInput"></a>

```typescript
public readonly agentVersionInput: string;
```

- *Type:* string

---

##### `amiIdInput`<sup>Optional</sup> <a name="amiIdInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.amiIdInput"></a>

```typescript
public readonly amiIdInput: string;
```

- *Type:* string

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.architectureInput"></a>

```typescript
public readonly architectureInput: string;
```

- *Type:* string

---

##### `autoScalingTypeInput`<sup>Optional</sup> <a name="autoScalingTypeInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.autoScalingTypeInput"></a>

```typescript
public readonly autoScalingTypeInput: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: string;
```

- *Type:* string

---

##### `deleteEbsInput`<sup>Optional</sup> <a name="deleteEbsInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.deleteEbsInput"></a>

```typescript
public readonly deleteEbsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteEipInput`<sup>Optional</sup> <a name="deleteEipInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.deleteEipInput"></a>

```typescript
public readonly deleteEipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsBlockDeviceInput`<sup>Optional</sup> <a name="ebsBlockDeviceInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ebsBlockDeviceInput"></a>

```typescript
public readonly ebsBlockDeviceInput: IResolvable | OpsworksInstanceEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>[]

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ebsOptimizedInput"></a>

```typescript
public readonly ebsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ecsClusterArnInput`<sup>Optional</sup> <a name="ecsClusterArnInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ecsClusterArnInput"></a>

```typescript
public readonly ecsClusterArnInput: string;
```

- *Type:* string

---

##### `elasticIpInput`<sup>Optional</sup> <a name="elasticIpInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.elasticIpInput"></a>

```typescript
public readonly elasticIpInput: string;
```

- *Type:* string

---

##### `ephemeralBlockDeviceInput`<sup>Optional</sup> <a name="ephemeralBlockDeviceInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ephemeralBlockDeviceInput"></a>

```typescript
public readonly ephemeralBlockDeviceInput: IResolvable | OpsworksInstanceEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>[]

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `infrastructureClassInput`<sup>Optional</sup> <a name="infrastructureClassInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.infrastructureClassInput"></a>

```typescript
public readonly infrastructureClassInput: string;
```

- *Type:* string

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.installUpdatesOnBootInput"></a>

```typescript
public readonly installUpdatesOnBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.instanceProfileArnInput"></a>

```typescript
public readonly instanceProfileArnInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `lastServiceErrorIdInput`<sup>Optional</sup> <a name="lastServiceErrorIdInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.lastServiceErrorIdInput"></a>

```typescript
public readonly lastServiceErrorIdInput: string;
```

- *Type:* string

---

##### `layerIdsInput`<sup>Optional</sup> <a name="layerIdsInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.layerIdsInput"></a>

```typescript
public readonly layerIdsInput: string[];
```

- *Type:* string[]

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.osInput"></a>

```typescript
public readonly osInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `privateDnsInput`<sup>Optional</sup> <a name="privateDnsInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.privateDnsInput"></a>

```typescript
public readonly privateDnsInput: string;
```

- *Type:* string

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `publicDnsInput`<sup>Optional</sup> <a name="publicDnsInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.publicDnsInput"></a>

```typescript
public readonly publicDnsInput: string;
```

- *Type:* string

---

##### `publicIpInput`<sup>Optional</sup> <a name="publicIpInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.publicIpInput"></a>

```typescript
public readonly publicIpInput: string;
```

- *Type:* string

---

##### `registeredByInput`<sup>Optional</sup> <a name="registeredByInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.registeredByInput"></a>

```typescript
public readonly registeredByInput: string;
```

- *Type:* string

---

##### `reportedAgentVersionInput`<sup>Optional</sup> <a name="reportedAgentVersionInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedAgentVersionInput"></a>

```typescript
public readonly reportedAgentVersionInput: string;
```

- *Type:* string

---

##### `reportedOsFamilyInput`<sup>Optional</sup> <a name="reportedOsFamilyInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsFamilyInput"></a>

```typescript
public readonly reportedOsFamilyInput: string;
```

- *Type:* string

---

##### `reportedOsNameInput`<sup>Optional</sup> <a name="reportedOsNameInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsNameInput"></a>

```typescript
public readonly reportedOsNameInput: string;
```

- *Type:* string

---

##### `reportedOsVersionInput`<sup>Optional</sup> <a name="reportedOsVersionInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsVersionInput"></a>

```typescript
public readonly reportedOsVersionInput: string;
```

- *Type:* string

---

##### `rootBlockDeviceInput`<sup>Optional</sup> <a name="rootBlockDeviceInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootBlockDeviceInput"></a>

```typescript
public readonly rootBlockDeviceInput: IResolvable | OpsworksInstanceRootBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>[]

---

##### `rootDeviceTypeInput`<sup>Optional</sup> <a name="rootDeviceTypeInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootDeviceTypeInput"></a>

```typescript
public readonly rootDeviceTypeInput: string;
```

- *Type:* string

---

##### `rootDeviceVolumeIdInput`<sup>Optional</sup> <a name="rootDeviceVolumeIdInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootDeviceVolumeIdInput"></a>

```typescript
public readonly rootDeviceVolumeIdInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `sshHostDsaKeyFingerprintInput`<sup>Optional</sup> <a name="sshHostDsaKeyFingerprintInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshHostDsaKeyFingerprintInput"></a>

```typescript
public readonly sshHostDsaKeyFingerprintInput: string;
```

- *Type:* string

---

##### `sshHostRsaKeyFingerprintInput`<sup>Optional</sup> <a name="sshHostRsaKeyFingerprintInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshHostRsaKeyFingerprintInput"></a>

```typescript
public readonly sshHostRsaKeyFingerprintInput: string;
```

- *Type:* string

---

##### `sshKeyNameInput`<sup>Optional</sup> <a name="sshKeyNameInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshKeyNameInput"></a>

```typescript
public readonly sshKeyNameInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.tenancyInput"></a>

```typescript
public readonly tenancyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpsworksInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a>

---

##### `virtualizationTypeInput`<sup>Optional</sup> <a name="virtualizationTypeInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.virtualizationTypeInput"></a>

```typescript
public readonly virtualizationTypeInput: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `amiId`<sup>Required</sup> <a name="amiId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.amiId"></a>

```typescript
public readonly amiId: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `autoScalingType`<sup>Required</sup> <a name="autoScalingType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.autoScalingType"></a>

```typescript
public readonly autoScalingType: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deleteEbs`<sup>Required</sup> <a name="deleteEbs" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.deleteEbs"></a>

```typescript
public readonly deleteEbs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteEip`<sup>Required</sup> <a name="deleteEip" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.deleteEip"></a>

```typescript
public readonly deleteEip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ecsClusterArn`<sup>Required</sup> <a name="ecsClusterArn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.ecsClusterArn"></a>

```typescript
public readonly ecsClusterArn: string;
```

- *Type:* string

---

##### `elasticIp`<sup>Required</sup> <a name="elasticIp" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.elasticIp"></a>

```typescript
public readonly elasticIp: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infrastructureClass`<sup>Required</sup> <a name="infrastructureClass" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.infrastructureClass"></a>

```typescript
public readonly infrastructureClass: string;
```

- *Type:* string

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lastServiceErrorId`<sup>Required</sup> <a name="lastServiceErrorId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.lastServiceErrorId"></a>

```typescript
public readonly lastServiceErrorId: string;
```

- *Type:* string

---

##### `layerIds`<sup>Required</sup> <a name="layerIds" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.layerIds"></a>

```typescript
public readonly layerIds: string[];
```

- *Type:* string[]

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `privateDns`<sup>Required</sup> <a name="privateDns" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.privateDns"></a>

```typescript
public readonly privateDns: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `publicDns`<sup>Required</sup> <a name="publicDns" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.publicDns"></a>

```typescript
public readonly publicDns: string;
```

- *Type:* string

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `registeredBy`<sup>Required</sup> <a name="registeredBy" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.registeredBy"></a>

```typescript
public readonly registeredBy: string;
```

- *Type:* string

---

##### `reportedAgentVersion`<sup>Required</sup> <a name="reportedAgentVersion" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedAgentVersion"></a>

```typescript
public readonly reportedAgentVersion: string;
```

- *Type:* string

---

##### `reportedOsFamily`<sup>Required</sup> <a name="reportedOsFamily" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsFamily"></a>

```typescript
public readonly reportedOsFamily: string;
```

- *Type:* string

---

##### `reportedOsName`<sup>Required</sup> <a name="reportedOsName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsName"></a>

```typescript
public readonly reportedOsName: string;
```

- *Type:* string

---

##### `reportedOsVersion`<sup>Required</sup> <a name="reportedOsVersion" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.reportedOsVersion"></a>

```typescript
public readonly reportedOsVersion: string;
```

- *Type:* string

---

##### `rootDeviceType`<sup>Required</sup> <a name="rootDeviceType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootDeviceType"></a>

```typescript
public readonly rootDeviceType: string;
```

- *Type:* string

---

##### `rootDeviceVolumeId`<sup>Required</sup> <a name="rootDeviceVolumeId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.rootDeviceVolumeId"></a>

```typescript
public readonly rootDeviceVolumeId: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `sshHostDsaKeyFingerprint`<sup>Required</sup> <a name="sshHostDsaKeyFingerprint" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshHostDsaKeyFingerprint"></a>

```typescript
public readonly sshHostDsaKeyFingerprint: string;
```

- *Type:* string

---

##### `sshHostRsaKeyFingerprint`<sup>Required</sup> <a name="sshHostRsaKeyFingerprint" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshHostRsaKeyFingerprint"></a>

```typescript
public readonly sshHostRsaKeyFingerprint: string;
```

- *Type:* string

---

##### `sshKeyName`<sup>Required</sup> <a name="sshKeyName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.sshKeyName"></a>

```typescript
public readonly sshKeyName: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `virtualizationType`<sup>Required</sup> <a name="virtualizationType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.virtualizationType"></a>

```typescript
public readonly virtualizationType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksInstanceConfig <a name="OpsworksInstanceConfig" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

const opsworksInstanceConfig: opsworksInstance.OpsworksInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.layerIds">layerIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#layer_ids OpsworksInstance#layer_ids}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.stackId">stackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#stack_id OpsworksInstance#stack_id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.agentVersion">agentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#agent_version OpsworksInstance#agent_version}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.amiId">amiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ami_id OpsworksInstance#ami_id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.architecture">architecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#architecture OpsworksInstance#architecture}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.autoScalingType">autoScalingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#auto_scaling_type OpsworksInstance#auto_scaling_type}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#availability_zone OpsworksInstance#availability_zone}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.createdAt">createdAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#created_at OpsworksInstance#created_at}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.deleteEbs">deleteEbs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#delete_ebs OpsworksInstance#delete_ebs}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.deleteEip">deleteEip</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#delete_eip OpsworksInstance#delete_eip}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>[]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ebs_optimized OpsworksInstance#ebs_optimized}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.ecsClusterArn">ecsClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ecs_cluster_arn OpsworksInstance#ecs_cluster_arn}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.elasticIp">elasticIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#elastic_ip OpsworksInstance#elastic_ip}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>[]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#hostname OpsworksInstance#hostname}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#id OpsworksInstance#id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.infrastructureClass">infrastructureClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#infrastructure_class OpsworksInstance#infrastructure_class}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#install_updates_on_boot OpsworksInstance#install_updates_on_boot}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#instance_profile_arn OpsworksInstance#instance_profile_arn}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#instance_type OpsworksInstance#instance_type}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.lastServiceErrorId">lastServiceErrorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#last_service_error_id OpsworksInstance#last_service_error_id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.os">os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#os OpsworksInstance#os}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#platform OpsworksInstance#platform}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.privateDns">privateDns</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#private_dns OpsworksInstance#private_dns}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#private_ip OpsworksInstance#private_ip}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.publicDns">publicDns</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#public_dns OpsworksInstance#public_dns}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.publicIp">publicIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#public_ip OpsworksInstance#public_ip}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.registeredBy">registeredBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#registered_by OpsworksInstance#registered_by}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.reportedAgentVersion">reportedAgentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#reported_agent_version OpsworksInstance#reported_agent_version}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.reportedOsFamily">reportedOsFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#reported_os_family OpsworksInstance#reported_os_family}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.reportedOsName">reportedOsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#reported_os_name OpsworksInstance#reported_os_name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.reportedOsVersion">reportedOsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#reported_os_version OpsworksInstance#reported_os_version}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.rootBlockDevice">rootBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>[]</code> | root_block_device block. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.rootDeviceType">rootDeviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#root_device_type OpsworksInstance#root_device_type}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.rootDeviceVolumeId">rootDeviceVolumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#root_device_volume_id OpsworksInstance#root_device_volume_id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#security_group_ids OpsworksInstance#security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.sshHostDsaKeyFingerprint">sshHostDsaKeyFingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ssh_host_dsa_key_fingerprint OpsworksInstance#ssh_host_dsa_key_fingerprint}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.sshHostRsaKeyFingerprint">sshHostRsaKeyFingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ssh_host_rsa_key_fingerprint OpsworksInstance#ssh_host_rsa_key_fingerprint}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.sshKeyName">sshKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ssh_key_name OpsworksInstance#ssh_key_name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#state OpsworksInstance#state}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#status OpsworksInstance#status}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#subnet_id OpsworksInstance#subnet_id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.tenancy">tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#tenancy OpsworksInstance#tenancy}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.virtualizationType">virtualizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#virtualization_type OpsworksInstance#virtualization_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `layerIds`<sup>Required</sup> <a name="layerIds" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.layerIds"></a>

```typescript
public readonly layerIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#layer_ids OpsworksInstance#layer_ids}.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#stack_id OpsworksInstance#stack_id}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#agent_version OpsworksInstance#agent_version}.

---

##### `amiId`<sup>Optional</sup> <a name="amiId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.amiId"></a>

```typescript
public readonly amiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ami_id OpsworksInstance#ami_id}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#architecture OpsworksInstance#architecture}.

---

##### `autoScalingType`<sup>Optional</sup> <a name="autoScalingType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.autoScalingType"></a>

```typescript
public readonly autoScalingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#auto_scaling_type OpsworksInstance#auto_scaling_type}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#availability_zone OpsworksInstance#availability_zone}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#created_at OpsworksInstance#created_at}.

---

##### `deleteEbs`<sup>Optional</sup> <a name="deleteEbs" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.deleteEbs"></a>

```typescript
public readonly deleteEbs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#delete_ebs OpsworksInstance#delete_ebs}.

---

##### `deleteEip`<sup>Optional</sup> <a name="deleteEip" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.deleteEip"></a>

```typescript
public readonly deleteEip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#delete_eip OpsworksInstance#delete_eip}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: IResolvable | OpsworksInstanceEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>[]

ebs_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ebs_block_device OpsworksInstance#ebs_block_device}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ebs_optimized OpsworksInstance#ebs_optimized}.

---

##### `ecsClusterArn`<sup>Optional</sup> <a name="ecsClusterArn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.ecsClusterArn"></a>

```typescript
public readonly ecsClusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ecs_cluster_arn OpsworksInstance#ecs_cluster_arn}.

---

##### `elasticIp`<sup>Optional</sup> <a name="elasticIp" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.elasticIp"></a>

```typescript
public readonly elasticIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#elastic_ip OpsworksInstance#elastic_ip}.

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: IResolvable | OpsworksInstanceEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>[]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ephemeral_block_device OpsworksInstance#ephemeral_block_device}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#hostname OpsworksInstance#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#id OpsworksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructureClass`<sup>Optional</sup> <a name="infrastructureClass" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.infrastructureClass"></a>

```typescript
public readonly infrastructureClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#infrastructure_class OpsworksInstance#infrastructure_class}.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#install_updates_on_boot OpsworksInstance#install_updates_on_boot}.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#instance_profile_arn OpsworksInstance#instance_profile_arn}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#instance_type OpsworksInstance#instance_type}.

---

##### `lastServiceErrorId`<sup>Optional</sup> <a name="lastServiceErrorId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.lastServiceErrorId"></a>

```typescript
public readonly lastServiceErrorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#last_service_error_id OpsworksInstance#last_service_error_id}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#os OpsworksInstance#os}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#platform OpsworksInstance#platform}.

---

##### `privateDns`<sup>Optional</sup> <a name="privateDns" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.privateDns"></a>

```typescript
public readonly privateDns: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#private_dns OpsworksInstance#private_dns}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#private_ip OpsworksInstance#private_ip}.

---

##### `publicDns`<sup>Optional</sup> <a name="publicDns" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.publicDns"></a>

```typescript
public readonly publicDns: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#public_dns OpsworksInstance#public_dns}.

---

##### `publicIp`<sup>Optional</sup> <a name="publicIp" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#public_ip OpsworksInstance#public_ip}.

---

##### `registeredBy`<sup>Optional</sup> <a name="registeredBy" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.registeredBy"></a>

```typescript
public readonly registeredBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#registered_by OpsworksInstance#registered_by}.

---

##### `reportedAgentVersion`<sup>Optional</sup> <a name="reportedAgentVersion" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.reportedAgentVersion"></a>

```typescript
public readonly reportedAgentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#reported_agent_version OpsworksInstance#reported_agent_version}.

---

##### `reportedOsFamily`<sup>Optional</sup> <a name="reportedOsFamily" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.reportedOsFamily"></a>

```typescript
public readonly reportedOsFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#reported_os_family OpsworksInstance#reported_os_family}.

---

##### `reportedOsName`<sup>Optional</sup> <a name="reportedOsName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.reportedOsName"></a>

```typescript
public readonly reportedOsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#reported_os_name OpsworksInstance#reported_os_name}.

---

##### `reportedOsVersion`<sup>Optional</sup> <a name="reportedOsVersion" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.reportedOsVersion"></a>

```typescript
public readonly reportedOsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#reported_os_version OpsworksInstance#reported_os_version}.

---

##### `rootBlockDevice`<sup>Optional</sup> <a name="rootBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.rootBlockDevice"></a>

```typescript
public readonly rootBlockDevice: IResolvable | OpsworksInstanceRootBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>[]

root_block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#root_block_device OpsworksInstance#root_block_device}

---

##### `rootDeviceType`<sup>Optional</sup> <a name="rootDeviceType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.rootDeviceType"></a>

```typescript
public readonly rootDeviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#root_device_type OpsworksInstance#root_device_type}.

---

##### `rootDeviceVolumeId`<sup>Optional</sup> <a name="rootDeviceVolumeId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.rootDeviceVolumeId"></a>

```typescript
public readonly rootDeviceVolumeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#root_device_volume_id OpsworksInstance#root_device_volume_id}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#security_group_ids OpsworksInstance#security_group_ids}.

---

##### `sshHostDsaKeyFingerprint`<sup>Optional</sup> <a name="sshHostDsaKeyFingerprint" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.sshHostDsaKeyFingerprint"></a>

```typescript
public readonly sshHostDsaKeyFingerprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ssh_host_dsa_key_fingerprint OpsworksInstance#ssh_host_dsa_key_fingerprint}.

---

##### `sshHostRsaKeyFingerprint`<sup>Optional</sup> <a name="sshHostRsaKeyFingerprint" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.sshHostRsaKeyFingerprint"></a>

```typescript
public readonly sshHostRsaKeyFingerprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ssh_host_rsa_key_fingerprint OpsworksInstance#ssh_host_rsa_key_fingerprint}.

---

##### `sshKeyName`<sup>Optional</sup> <a name="sshKeyName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.sshKeyName"></a>

```typescript
public readonly sshKeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#ssh_key_name OpsworksInstance#ssh_key_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#state OpsworksInstance#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#status OpsworksInstance#status}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#subnet_id OpsworksInstance#subnet_id}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#tenancy OpsworksInstance#tenancy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpsworksInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#timeouts OpsworksInstance#timeouts}

---

##### `virtualizationType`<sup>Optional</sup> <a name="virtualizationType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceConfig.property.virtualizationType"></a>

```typescript
public readonly virtualizationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#virtualization_type OpsworksInstance#virtualization_type}.

---

### OpsworksInstanceEbsBlockDevice <a name="OpsworksInstanceEbsBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

const opsworksInstanceEbsBlockDevice: opsworksInstance.OpsworksInstanceEbsBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#device_name OpsworksInstance#device_name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#iops OpsworksInstance#iops}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#snapshot_id OpsworksInstance#snapshot_id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#volume_size OpsworksInstance#volume_size}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#volume_type OpsworksInstance#volume_type}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#device_name OpsworksInstance#device_name}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#iops OpsworksInstance#iops}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#snapshot_id OpsworksInstance#snapshot_id}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#volume_size OpsworksInstance#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#volume_type OpsworksInstance#volume_type}.

---

### OpsworksInstanceEphemeralBlockDevice <a name="OpsworksInstanceEphemeralBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

const opsworksInstanceEphemeralBlockDevice: opsworksInstance.OpsworksInstanceEphemeralBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#device_name OpsworksInstance#device_name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice.property.virtualName">virtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#virtual_name OpsworksInstance#virtual_name}. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#device_name OpsworksInstance#device_name}.

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#virtual_name OpsworksInstance#virtual_name}.

---

### OpsworksInstanceRootBlockDevice <a name="OpsworksInstanceRootBlockDevice" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

const opsworksInstanceRootBlockDevice: opsworksInstance.OpsworksInstanceRootBlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#iops OpsworksInstance#iops}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#volume_size OpsworksInstance#volume_size}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#volume_type OpsworksInstance#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#delete_on_termination OpsworksInstance#delete_on_termination}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#iops OpsworksInstance#iops}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#volume_size OpsworksInstance#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#volume_type OpsworksInstance#volume_type}.

---

### OpsworksInstanceTimeouts <a name="OpsworksInstanceTimeouts" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

const opsworksInstanceTimeouts: opsworksInstance.OpsworksInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#create OpsworksInstance#create}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#delete OpsworksInstance#delete}. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#update OpsworksInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#create OpsworksInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#delete OpsworksInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_instance#update OpsworksInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksInstanceEbsBlockDeviceList <a name="OpsworksInstanceEbsBlockDeviceList" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

new opsworksInstance.OpsworksInstanceEbsBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.get"></a>

```typescript
public get(index: number): OpsworksInstanceEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksInstanceEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>[]

---


### OpsworksInstanceEbsBlockDeviceOutputReference <a name="OpsworksInstanceEbsBlockDeviceOutputReference" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

new opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksInstanceEbsBlockDevice;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEbsBlockDevice">OpsworksInstanceEbsBlockDevice</a>

---


### OpsworksInstanceEphemeralBlockDeviceList <a name="OpsworksInstanceEphemeralBlockDeviceList" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

new opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.get"></a>

```typescript
public get(index: number): OpsworksInstanceEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksInstanceEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>[]

---


### OpsworksInstanceEphemeralBlockDeviceOutputReference <a name="OpsworksInstanceEphemeralBlockDeviceOutputReference" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

new opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```typescript
public readonly virtualNameInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksInstanceEphemeralBlockDevice;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceEphemeralBlockDevice">OpsworksInstanceEphemeralBlockDevice</a>

---


### OpsworksInstanceRootBlockDeviceList <a name="OpsworksInstanceRootBlockDeviceList" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

new opsworksInstance.OpsworksInstanceRootBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.get"></a>

```typescript
public get(index: number): OpsworksInstanceRootBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksInstanceRootBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>[]

---


### OpsworksInstanceRootBlockDeviceOutputReference <a name="OpsworksInstanceRootBlockDeviceOutputReference" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

new opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksInstanceRootBlockDevice;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceRootBlockDevice">OpsworksInstanceRootBlockDevice</a>

---


### OpsworksInstanceTimeoutsOutputReference <a name="OpsworksInstanceTimeoutsOutputReference" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { opsworksInstance } from '@cdktf/aws-cdk'

new opsworksInstance.OpsworksInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksInstance.OpsworksInstanceTimeouts">OpsworksInstanceTimeouts</a>

---



