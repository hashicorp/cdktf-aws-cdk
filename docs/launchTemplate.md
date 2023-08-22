# `aws_launch_template`

Refer to the Terraform Registory for docs: [`aws_launch_template`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template).

# `launchTemplate` Submodule <a name="`launchTemplate` Submodule" id="@cdktf/aws-cdk.launchTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchTemplate <a name="LaunchTemplate" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template aws_launch_template}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplate(scope: Construct, id: string, config?: LaunchTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig">LaunchTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig">LaunchTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putCapacityReservationSpecification">putCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putCpuOptions">putCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putCreditSpecification">putCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putElasticGpuSpecifications">putElasticGpuSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putElasticInferenceAccelerator">putElasticInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putEnclaveOptions">putEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putHibernationOptions">putHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putIamInstanceProfile">putIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putInstanceMarketOptions">putInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putLicenseSpecification">putLicenseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putMonitoring">putMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putTagSpecifications">putTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetCapacityReservationSpecification">resetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetCpuOptions">resetCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetCreditSpecification">resetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetDefaultVersion">resetDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetDisableApiTermination">resetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetElasticGpuSpecifications">resetElasticGpuSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetElasticInferenceAccelerator">resetElasticInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetEnclaveOptions">resetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetHibernationOptions">resetHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetInstanceInitiatedShutdownBehavior">resetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetInstanceMarketOptions">resetInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetKernelId">resetKernelId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetLicenseSpecification">resetLicenseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetRamDiskId">resetRamDiskId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetSecurityGroupNames">resetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetTagSpecifications">resetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetUpdateDefaultVersion">resetUpdateDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putBlockDeviceMappings"></a>

```typescript
public putBlockDeviceMappings(value: IResolvable | LaunchTemplateBlockDeviceMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putBlockDeviceMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>[]

---

##### `putCapacityReservationSpecification` <a name="putCapacityReservationSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putCapacityReservationSpecification"></a>

```typescript
public putCapacityReservationSpecification(value: LaunchTemplateCapacityReservationSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

---

##### `putCpuOptions` <a name="putCpuOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putCpuOptions"></a>

```typescript
public putCpuOptions(value: LaunchTemplateCpuOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putCpuOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

---

##### `putCreditSpecification` <a name="putCreditSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putCreditSpecification"></a>

```typescript
public putCreditSpecification(value: LaunchTemplateCreditSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

---

##### `putElasticGpuSpecifications` <a name="putElasticGpuSpecifications" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putElasticGpuSpecifications"></a>

```typescript
public putElasticGpuSpecifications(value: IResolvable | LaunchTemplateElasticGpuSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putElasticGpuSpecifications.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>[]

---

##### `putElasticInferenceAccelerator` <a name="putElasticInferenceAccelerator" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putElasticInferenceAccelerator"></a>

```typescript
public putElasticInferenceAccelerator(value: LaunchTemplateElasticInferenceAccelerator): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putElasticInferenceAccelerator.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

---

##### `putEnclaveOptions` <a name="putEnclaveOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putEnclaveOptions"></a>

```typescript
public putEnclaveOptions(value: LaunchTemplateEnclaveOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

---

##### `putHibernationOptions` <a name="putHibernationOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putHibernationOptions"></a>

```typescript
public putHibernationOptions(value: LaunchTemplateHibernationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putHibernationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

---

##### `putIamInstanceProfile` <a name="putIamInstanceProfile" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putIamInstanceProfile"></a>

```typescript
public putIamInstanceProfile(value: LaunchTemplateIamInstanceProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putIamInstanceProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

---

##### `putInstanceMarketOptions` <a name="putInstanceMarketOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putInstanceMarketOptions"></a>

```typescript
public putInstanceMarketOptions(value: LaunchTemplateInstanceMarketOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putInstanceMarketOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

---

##### `putLicenseSpecification` <a name="putLicenseSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putLicenseSpecification"></a>

```typescript
public putLicenseSpecification(value: IResolvable | LaunchTemplateLicenseSpecification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putLicenseSpecification.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>[]

---

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putMetadataOptions"></a>

```typescript
public putMetadataOptions(value: LaunchTemplateMetadataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

---

##### `putMonitoring` <a name="putMonitoring" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putMonitoring"></a>

```typescript
public putMonitoring(value: LaunchTemplateMonitoring): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

---

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putNetworkInterfaces"></a>

```typescript
public putNetworkInterfaces(value: IResolvable | LaunchTemplateNetworkInterfaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putNetworkInterfaces.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>[]

---

##### `putPlacement` <a name="putPlacement" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putPlacement"></a>

```typescript
public putPlacement(value: LaunchTemplatePlacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

---

##### `putTagSpecifications` <a name="putTagSpecifications" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putTagSpecifications"></a>

```typescript
public putTagSpecifications(value: IResolvable | LaunchTemplateTagSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.putTagSpecifications.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>[]

---

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetBlockDeviceMappings"></a>

```typescript
public resetBlockDeviceMappings(): void
```

##### `resetCapacityReservationSpecification` <a name="resetCapacityReservationSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetCapacityReservationSpecification"></a>

```typescript
public resetCapacityReservationSpecification(): void
```

##### `resetCpuOptions` <a name="resetCpuOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetCpuOptions"></a>

```typescript
public resetCpuOptions(): void
```

##### `resetCreditSpecification` <a name="resetCreditSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetCreditSpecification"></a>

```typescript
public resetCreditSpecification(): void
```

##### `resetDefaultVersion` <a name="resetDefaultVersion" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetDefaultVersion"></a>

```typescript
public resetDefaultVersion(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableApiTermination` <a name="resetDisableApiTermination" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetDisableApiTermination"></a>

```typescript
public resetDisableApiTermination(): void
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetEbsOptimized"></a>

```typescript
public resetEbsOptimized(): void
```

##### `resetElasticGpuSpecifications` <a name="resetElasticGpuSpecifications" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetElasticGpuSpecifications"></a>

```typescript
public resetElasticGpuSpecifications(): void
```

##### `resetElasticInferenceAccelerator` <a name="resetElasticInferenceAccelerator" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetElasticInferenceAccelerator"></a>

```typescript
public resetElasticInferenceAccelerator(): void
```

##### `resetEnclaveOptions` <a name="resetEnclaveOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetEnclaveOptions"></a>

```typescript
public resetEnclaveOptions(): void
```

##### `resetHibernationOptions` <a name="resetHibernationOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetHibernationOptions"></a>

```typescript
public resetHibernationOptions(): void
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetIamInstanceProfile"></a>

```typescript
public resetIamInstanceProfile(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageId` <a name="resetImageId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetInstanceInitiatedShutdownBehavior` <a name="resetInstanceInitiatedShutdownBehavior" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetInstanceInitiatedShutdownBehavior"></a>

```typescript
public resetInstanceInitiatedShutdownBehavior(): void
```

##### `resetInstanceMarketOptions` <a name="resetInstanceMarketOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetInstanceMarketOptions"></a>

```typescript
public resetInstanceMarketOptions(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetKernelId` <a name="resetKernelId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetKernelId"></a>

```typescript
public resetKernelId(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetLicenseSpecification` <a name="resetLicenseSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetLicenseSpecification"></a>

```typescript
public resetLicenseSpecification(): void
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetMetadataOptions"></a>

```typescript
public resetMetadataOptions(): void
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetMonitoring"></a>

```typescript
public resetMonitoring(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetNetworkInterfaces"></a>

```typescript
public resetNetworkInterfaces(): void
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetPlacement"></a>

```typescript
public resetPlacement(): void
```

##### `resetRamDiskId` <a name="resetRamDiskId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetRamDiskId"></a>

```typescript
public resetRamDiskId(): void
```

##### `resetSecurityGroupNames` <a name="resetSecurityGroupNames" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetSecurityGroupNames"></a>

```typescript
public resetSecurityGroupNames(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTagSpecifications` <a name="resetTagSpecifications" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetTagSpecifications"></a>

```typescript
public resetTagSpecifications(): void
```

##### `resetUpdateDefaultVersion` <a name="resetUpdateDefaultVersion" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetUpdateDefaultVersion"></a>

```typescript
public resetUpdateDefaultVersion(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.isConstruct"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

launchTemplate.LaunchTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.isTerraformElement"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

launchTemplate.LaunchTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.isTerraformResource"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

launchTemplate.LaunchTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList">LaunchTemplateBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference">LaunchTemplateCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference">LaunchTemplateCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference">LaunchTemplateCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList">LaunchTemplateElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.elasticInferenceAccelerator">elasticInferenceAccelerator</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference">LaunchTemplateElasticInferenceAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference">LaunchTemplateEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference">LaunchTemplateHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference">LaunchTemplateIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceMarketOptions">instanceMarketOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference">LaunchTemplateInstanceMarketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.latestVersion">latestVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.licenseSpecification">licenseSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList">LaunchTemplateLicenseSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference">LaunchTemplateMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference">LaunchTemplateMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList">LaunchTemplateNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.placement">placement</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference">LaunchTemplatePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList">LaunchTemplateTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.capacityReservationSpecificationInput">capacityReservationSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.cpuOptionsInput">cpuOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.creditSpecificationInput">creditSpecificationInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.defaultVersionInput">defaultVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.disableApiTerminationInput">disableApiTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.elasticGpuSpecificationsInput">elasticGpuSpecificationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.elasticInferenceAcceleratorInput">elasticInferenceAcceleratorInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.enclaveOptionsInput">enclaveOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.hibernationOptionsInput">hibernationOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehaviorInput">instanceInitiatedShutdownBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceMarketOptionsInput">instanceMarketOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.kernelIdInput">kernelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.licenseSpecificationInput">licenseSpecificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.monitoringInput">monitoringInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.placementInput">placementInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.ramDiskIdInput">ramDiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.securityGroupNamesInput">securityGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tagSpecificationsInput">tagSpecificationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.updateDefaultVersionInput">updateDefaultVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.defaultVersion">defaultVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.ebsOptimized">ebsOptimized</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.kernelId">kernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.ramDiskId">ramDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.securityGroupNames">securityGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.updateDefaultVersion">updateDefaultVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: LaunchTemplateBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList">LaunchTemplateBlockDeviceMappingsList</a>

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: LaunchTemplateCapacityReservationSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference">LaunchTemplateCapacityReservationSpecificationOutputReference</a>

---

##### `cpuOptions`<sup>Required</sup> <a name="cpuOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: LaunchTemplateCpuOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference">LaunchTemplateCpuOptionsOutputReference</a>

---

##### `creditSpecification`<sup>Required</sup> <a name="creditSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: LaunchTemplateCreditSpecificationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference">LaunchTemplateCreditSpecificationOutputReference</a>

---

##### `elasticGpuSpecifications`<sup>Required</sup> <a name="elasticGpuSpecifications" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: LaunchTemplateElasticGpuSpecificationsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList">LaunchTemplateElasticGpuSpecificationsList</a>

---

##### `elasticInferenceAccelerator`<sup>Required</sup> <a name="elasticInferenceAccelerator" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.elasticInferenceAccelerator"></a>

```typescript
public readonly elasticInferenceAccelerator: LaunchTemplateElasticInferenceAcceleratorOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference">LaunchTemplateElasticInferenceAcceleratorOutputReference</a>

---

##### `enclaveOptions`<sup>Required</sup> <a name="enclaveOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: LaunchTemplateEnclaveOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference">LaunchTemplateEnclaveOptionsOutputReference</a>

---

##### `hibernationOptions`<sup>Required</sup> <a name="hibernationOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.hibernationOptions"></a>

```typescript
public readonly hibernationOptions: LaunchTemplateHibernationOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference">LaunchTemplateHibernationOptionsOutputReference</a>

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: LaunchTemplateIamInstanceProfileOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference">LaunchTemplateIamInstanceProfileOutputReference</a>

---

##### `instanceMarketOptions`<sup>Required</sup> <a name="instanceMarketOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceMarketOptions"></a>

```typescript
public readonly instanceMarketOptions: LaunchTemplateInstanceMarketOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference">LaunchTemplateInstanceMarketOptionsOutputReference</a>

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.latestVersion"></a>

```typescript
public readonly latestVersion: number;
```

- *Type:* number

---

##### `licenseSpecification`<sup>Required</sup> <a name="licenseSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.licenseSpecification"></a>

```typescript
public readonly licenseSpecification: LaunchTemplateLicenseSpecificationList;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList">LaunchTemplateLicenseSpecificationList</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: LaunchTemplateMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference">LaunchTemplateMetadataOptionsOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.monitoring"></a>

```typescript
public readonly monitoring: LaunchTemplateMonitoringOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference">LaunchTemplateMonitoringOutputReference</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: LaunchTemplateNetworkInterfacesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList">LaunchTemplateNetworkInterfacesList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.placement"></a>

```typescript
public readonly placement: LaunchTemplatePlacementOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference">LaunchTemplatePlacementOutputReference</a>

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: LaunchTemplateTagSpecificationsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList">LaunchTemplateTagSpecificationsList</a>

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.blockDeviceMappingsInput"></a>

```typescript
public readonly blockDeviceMappingsInput: IResolvable | LaunchTemplateBlockDeviceMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>[]

---

##### `capacityReservationSpecificationInput`<sup>Optional</sup> <a name="capacityReservationSpecificationInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.capacityReservationSpecificationInput"></a>

```typescript
public readonly capacityReservationSpecificationInput: LaunchTemplateCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

---

##### `cpuOptionsInput`<sup>Optional</sup> <a name="cpuOptionsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.cpuOptionsInput"></a>

```typescript
public readonly cpuOptionsInput: LaunchTemplateCpuOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

---

##### `creditSpecificationInput`<sup>Optional</sup> <a name="creditSpecificationInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.creditSpecificationInput"></a>

```typescript
public readonly creditSpecificationInput: LaunchTemplateCreditSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

---

##### `defaultVersionInput`<sup>Optional</sup> <a name="defaultVersionInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.defaultVersionInput"></a>

```typescript
public readonly defaultVersionInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableApiTerminationInput`<sup>Optional</sup> <a name="disableApiTerminationInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.disableApiTerminationInput"></a>

```typescript
public readonly disableApiTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.ebsOptimizedInput"></a>

```typescript
public readonly ebsOptimizedInput: string;
```

- *Type:* string

---

##### `elasticGpuSpecificationsInput`<sup>Optional</sup> <a name="elasticGpuSpecificationsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.elasticGpuSpecificationsInput"></a>

```typescript
public readonly elasticGpuSpecificationsInput: IResolvable | LaunchTemplateElasticGpuSpecifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>[]

---

##### `elasticInferenceAcceleratorInput`<sup>Optional</sup> <a name="elasticInferenceAcceleratorInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.elasticInferenceAcceleratorInput"></a>

```typescript
public readonly elasticInferenceAcceleratorInput: LaunchTemplateElasticInferenceAccelerator;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

---

##### `enclaveOptionsInput`<sup>Optional</sup> <a name="enclaveOptionsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.enclaveOptionsInput"></a>

```typescript
public readonly enclaveOptionsInput: LaunchTemplateEnclaveOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

---

##### `hibernationOptionsInput`<sup>Optional</sup> <a name="hibernationOptionsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.hibernationOptionsInput"></a>

```typescript
public readonly hibernationOptionsInput: LaunchTemplateHibernationOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: LaunchTemplateIamInstanceProfile;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `instanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehaviorInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehaviorInput"></a>

```typescript
public readonly instanceInitiatedShutdownBehaviorInput: string;
```

- *Type:* string

---

##### `instanceMarketOptionsInput`<sup>Optional</sup> <a name="instanceMarketOptionsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceMarketOptionsInput"></a>

```typescript
public readonly instanceMarketOptionsInput: LaunchTemplateInstanceMarketOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `kernelIdInput`<sup>Optional</sup> <a name="kernelIdInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.kernelIdInput"></a>

```typescript
public readonly kernelIdInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `licenseSpecificationInput`<sup>Optional</sup> <a name="licenseSpecificationInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.licenseSpecificationInput"></a>

```typescript
public readonly licenseSpecificationInput: IResolvable | LaunchTemplateLicenseSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>[]

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.metadataOptionsInput"></a>

```typescript
public readonly metadataOptionsInput: LaunchTemplateMetadataOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.monitoringInput"></a>

```typescript
public readonly monitoringInput: LaunchTemplateMonitoring;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.networkInterfacesInput"></a>

```typescript
public readonly networkInterfacesInput: IResolvable | LaunchTemplateNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>[]

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.placementInput"></a>

```typescript
public readonly placementInput: LaunchTemplatePlacement;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

---

##### `ramDiskIdInput`<sup>Optional</sup> <a name="ramDiskIdInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.ramDiskIdInput"></a>

```typescript
public readonly ramDiskIdInput: string;
```

- *Type:* string

---

##### `securityGroupNamesInput`<sup>Optional</sup> <a name="securityGroupNamesInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.securityGroupNamesInput"></a>

```typescript
public readonly securityGroupNamesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagSpecificationsInput`<sup>Optional</sup> <a name="tagSpecificationsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tagSpecificationsInput"></a>

```typescript
public readonly tagSpecificationsInput: IResolvable | LaunchTemplateTagSpecifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>[]

---

##### `updateDefaultVersionInput`<sup>Optional</sup> <a name="updateDefaultVersionInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.updateDefaultVersionInput"></a>

```typescript
public readonly updateDefaultVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableApiTermination`<sup>Required</sup> <a name="disableApiTermination" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `ramDiskId`<sup>Required</sup> <a name="ramDiskId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.ramDiskId"></a>

```typescript
public readonly ramDiskId: string;
```

- *Type:* string

---

##### `securityGroupNames`<sup>Required</sup> <a name="securityGroupNames" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.securityGroupNames"></a>

```typescript
public readonly securityGroupNames: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateDefaultVersion`<sup>Required</sup> <a name="updateDefaultVersion" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.updateDefaultVersion"></a>

```typescript
public readonly updateDefaultVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchTemplateBlockDeviceMappings <a name="LaunchTemplateBlockDeviceMappings" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateBlockDeviceMappings: launchTemplate.LaunchTemplateBlockDeviceMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#device_name LaunchTemplate#device_name}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings.property.noDevice">noDevice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#no_device LaunchTemplate#no_device}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings.property.virtualName">virtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#virtual_name LaunchTemplate#virtual_name}. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#device_name LaunchTemplate#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings.property.ebs"></a>

```typescript
public readonly ebs: LaunchTemplateBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ebs LaunchTemplate#ebs}

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#no_device LaunchTemplate#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#virtual_name LaunchTemplate#virtual_name}.

---

### LaunchTemplateBlockDeviceMappingsEbs <a name="LaunchTemplateBlockDeviceMappingsEbs" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateBlockDeviceMappingsEbs: launchTemplate.LaunchTemplateBlockDeviceMappingsEbs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#encrypted LaunchTemplate#encrypted}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#iops LaunchTemplate#iops}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#kms_key_id LaunchTemplate#kms_key_id}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#snapshot_id LaunchTemplate#snapshot_id}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#throughput LaunchTemplate#throughput}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#volume_size LaunchTemplate#volume_size}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#volume_type LaunchTemplate#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.encrypted"></a>

```typescript
public readonly encrypted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#encrypted LaunchTemplate#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#iops LaunchTemplate#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#kms_key_id LaunchTemplate#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#snapshot_id LaunchTemplate#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#throughput LaunchTemplate#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#volume_size LaunchTemplate#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#volume_type LaunchTemplate#volume_type}.

---

### LaunchTemplateCapacityReservationSpecification <a name="LaunchTemplateCapacityReservationSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateCapacityReservationSpecification: launchTemplate.LaunchTemplateCapacityReservationSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `capacityReservationPreference`<sup>Optional</sup> <a name="capacityReservationPreference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}.

---

##### `capacityReservationTarget`<sup>Optional</sup> <a name="capacityReservationTarget" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#capacity_reservation_target LaunchTemplate#capacity_reservation_target}

---

### LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget <a name="LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateCapacityReservationSpecificationCapacityReservationTarget: launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#capacity_reservation_id LaunchTemplate#capacity_reservation_id}. |

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#capacity_reservation_id LaunchTemplate#capacity_reservation_id}.

---

### LaunchTemplateConfig <a name="LaunchTemplateConfig" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateConfig: launchTemplate.LaunchTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>[]</code> | block_device_mappings block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | cpu_options block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.defaultVersion">defaultVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#default_version LaunchTemplate#default_version}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#description LaunchTemplate#description}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>[]</code> | elastic_gpu_specifications block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.elasticInferenceAccelerator">elasticInferenceAccelerator</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a></code> | elastic_inference_accelerator block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | hibernation_options block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | iam_instance_profile block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#id LaunchTemplate#id}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#image_id LaunchTemplate#image_id}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.instanceMarketOptions">instanceMarketOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | instance_market_options block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#instance_type LaunchTemplate#instance_type}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.kernelId">kernelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#kernel_id LaunchTemplate#kernel_id}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#key_name LaunchTemplate#key_name}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.licenseSpecification">licenseSpecification</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>[]</code> | license_specification block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#name LaunchTemplate#name}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#name_prefix LaunchTemplate#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.networkInterfaces">networkInterfaces</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>[]</code> | network_interfaces block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.placement">placement</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | placement block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.ramDiskId">ramDiskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.securityGroupNames">securityGroupNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#security_group_names LaunchTemplate#security_group_names}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#tags LaunchTemplate#tags}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#tags_all LaunchTemplate#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.tagSpecifications">tagSpecifications</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>[]</code> | tag_specifications block. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.updateDefaultVersion">updateDefaultVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#update_default_version LaunchTemplate#update_default_version}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#user_data LaunchTemplate#user_data}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IResolvable | LaunchTemplateBlockDeviceMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>[]

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#block_device_mappings LaunchTemplate#block_device_mappings}

---

##### `capacityReservationSpecification`<sup>Optional</sup> <a name="capacityReservationSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: LaunchTemplateCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#capacity_reservation_specification LaunchTemplate#capacity_reservation_specification}

---

##### `cpuOptions`<sup>Optional</sup> <a name="cpuOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: LaunchTemplateCpuOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

cpu_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#cpu_options LaunchTemplate#cpu_options}

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: LaunchTemplateCreditSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#credit_specification LaunchTemplate#credit_specification}

---

##### `defaultVersion`<sup>Optional</sup> <a name="defaultVersion" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#default_version LaunchTemplate#default_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#description LaunchTemplate#description}.

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}.

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}.

---

##### `elasticGpuSpecifications`<sup>Optional</sup> <a name="elasticGpuSpecifications" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: IResolvable | LaunchTemplateElasticGpuSpecifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>[]

elastic_gpu_specifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#elastic_gpu_specifications LaunchTemplate#elastic_gpu_specifications}

---

##### `elasticInferenceAccelerator`<sup>Optional</sup> <a name="elasticInferenceAccelerator" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.elasticInferenceAccelerator"></a>

```typescript
public readonly elasticInferenceAccelerator: LaunchTemplateElasticInferenceAccelerator;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

elastic_inference_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#elastic_inference_accelerator LaunchTemplate#elastic_inference_accelerator}

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: LaunchTemplateEnclaveOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#enclave_options LaunchTemplate#enclave_options}

---

##### `hibernationOptions`<sup>Optional</sup> <a name="hibernationOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.hibernationOptions"></a>

```typescript
public readonly hibernationOptions: LaunchTemplateHibernationOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

hibernation_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#hibernation_options LaunchTemplate#hibernation_options}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: LaunchTemplateIamInstanceProfile;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

iam_instance_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#iam_instance_profile LaunchTemplate#iam_instance_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#id LaunchTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#image_id LaunchTemplate#image_id}.

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}.

---

##### `instanceMarketOptions`<sup>Optional</sup> <a name="instanceMarketOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.instanceMarketOptions"></a>

```typescript
public readonly instanceMarketOptions: LaunchTemplateInstanceMarketOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

instance_market_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#instance_market_options LaunchTemplate#instance_market_options}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#instance_type LaunchTemplate#instance_type}.

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#kernel_id LaunchTemplate#kernel_id}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#key_name LaunchTemplate#key_name}.

---

##### `licenseSpecification`<sup>Optional</sup> <a name="licenseSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.licenseSpecification"></a>

```typescript
public readonly licenseSpecification: IResolvable | LaunchTemplateLicenseSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>[]

license_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#license_specification LaunchTemplate#license_specification}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: LaunchTemplateMetadataOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#metadata_options LaunchTemplate#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.monitoring"></a>

```typescript
public readonly monitoring: LaunchTemplateMonitoring;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#monitoring LaunchTemplate#monitoring}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#name LaunchTemplate#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#name_prefix LaunchTemplate#name_prefix}.

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IResolvable | LaunchTemplateNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>[]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#network_interfaces LaunchTemplate#network_interfaces}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.placement"></a>

```typescript
public readonly placement: LaunchTemplatePlacement;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#placement LaunchTemplate#placement}

---

##### `ramDiskId`<sup>Optional</sup> <a name="ramDiskId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.ramDiskId"></a>

```typescript
public readonly ramDiskId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}.

---

##### `securityGroupNames`<sup>Optional</sup> <a name="securityGroupNames" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.securityGroupNames"></a>

```typescript
public readonly securityGroupNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#security_group_names LaunchTemplate#security_group_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#tags LaunchTemplate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#tags_all LaunchTemplate#tags_all}.

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: IResolvable | LaunchTemplateTagSpecifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>[]

tag_specifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#tag_specifications LaunchTemplate#tag_specifications}

---

##### `updateDefaultVersion`<sup>Optional</sup> <a name="updateDefaultVersion" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.updateDefaultVersion"></a>

```typescript
public readonly updateDefaultVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#update_default_version LaunchTemplate#update_default_version}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#user_data LaunchTemplate#user_data}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}.

---

### LaunchTemplateCpuOptions <a name="LaunchTemplateCpuOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateCpuOptions: launchTemplate.LaunchTemplateCpuOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions.property.coreCount">coreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#core_count LaunchTemplate#core_count}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#threads_per_core LaunchTemplate#threads_per_core}. |

---

##### `coreCount`<sup>Optional</sup> <a name="coreCount" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#core_count LaunchTemplate#core_count}.

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#threads_per_core LaunchTemplate#threads_per_core}.

---

### LaunchTemplateCreditSpecification <a name="LaunchTemplateCreditSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecification.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateCreditSpecification: launchTemplate.LaunchTemplateCreditSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecification.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#cpu_credits LaunchTemplate#cpu_credits}. |

---

##### `cpuCredits`<sup>Optional</sup> <a name="cpuCredits" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecification.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#cpu_credits LaunchTemplate#cpu_credits}.

---

### LaunchTemplateElasticGpuSpecifications <a name="LaunchTemplateElasticGpuSpecifications" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateElasticGpuSpecifications: launchTemplate.LaunchTemplateElasticGpuSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#type LaunchTemplate#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#type LaunchTemplate#type}.

---

### LaunchTemplateElasticInferenceAccelerator <a name="LaunchTemplateElasticInferenceAccelerator" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAccelerator.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateElasticInferenceAccelerator: launchTemplate.LaunchTemplateElasticInferenceAccelerator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAccelerator.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#type LaunchTemplate#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAccelerator.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#type LaunchTemplate#type}.

---

### LaunchTemplateEnclaveOptions <a name="LaunchTemplateEnclaveOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptions.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateEnclaveOptions: launchTemplate.LaunchTemplateEnclaveOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#enabled LaunchTemplate#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#enabled LaunchTemplate#enabled}.

---

### LaunchTemplateHibernationOptions <a name="LaunchTemplateHibernationOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptions.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateHibernationOptions: launchTemplate.LaunchTemplateHibernationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptions.property.configured">configured</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#configured LaunchTemplate#configured}. |

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptions.property.configured"></a>

```typescript
public readonly configured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#configured LaunchTemplate#configured}.

---

### LaunchTemplateIamInstanceProfile <a name="LaunchTemplateIamInstanceProfile" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateIamInstanceProfile: launchTemplate.LaunchTemplateIamInstanceProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#arn LaunchTemplate#arn}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#name LaunchTemplate#name}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#arn LaunchTemplate#arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#name LaunchTemplate#name}.

---

### LaunchTemplateInstanceMarketOptions <a name="LaunchTemplateInstanceMarketOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateInstanceMarketOptions: launchTemplate.LaunchTemplateInstanceMarketOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions.property.marketType">marketType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#market_type LaunchTemplate#market_type}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | spot_options block. |

---

##### `marketType`<sup>Optional</sup> <a name="marketType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions.property.marketType"></a>

```typescript
public readonly marketType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#market_type LaunchTemplate#market_type}.

---

##### `spotOptions`<sup>Optional</sup> <a name="spotOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions.property.spotOptions"></a>

```typescript
public readonly spotOptions: LaunchTemplateInstanceMarketOptionsSpotOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

spot_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#spot_options LaunchTemplate#spot_options}

---

### LaunchTemplateInstanceMarketOptionsSpotOptions <a name="LaunchTemplateInstanceMarketOptionsSpotOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateInstanceMarketOptionsSpotOptions: launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#block_duration_minutes LaunchTemplate#block_duration_minutes}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.maxPrice">maxPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#max_price LaunchTemplate#max_price}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.spotInstanceType">spotInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#spot_instance_type LaunchTemplate#spot_instance_type}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.validUntil">validUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#valid_until LaunchTemplate#valid_until}. |

---

##### `blockDurationMinutes`<sup>Optional</sup> <a name="blockDurationMinutes" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.blockDurationMinutes"></a>

```typescript
public readonly blockDurationMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#block_duration_minutes LaunchTemplate#block_duration_minutes}.

---

##### `instanceInterruptionBehavior`<sup>Optional</sup> <a name="instanceInterruptionBehavior" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.instanceInterruptionBehavior"></a>

```typescript
public readonly instanceInterruptionBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}.

---

##### `maxPrice`<sup>Optional</sup> <a name="maxPrice" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.maxPrice"></a>

```typescript
public readonly maxPrice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#max_price LaunchTemplate#max_price}.

---

##### `spotInstanceType`<sup>Optional</sup> <a name="spotInstanceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.spotInstanceType"></a>

```typescript
public readonly spotInstanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#spot_instance_type LaunchTemplate#spot_instance_type}.

---

##### `validUntil`<sup>Optional</sup> <a name="validUntil" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#valid_until LaunchTemplate#valid_until}.

---

### LaunchTemplateLicenseSpecification <a name="LaunchTemplateLicenseSpecification" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateLicenseSpecification: launchTemplate.LaunchTemplateLicenseSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#license_configuration_arn LaunchTemplate#license_configuration_arn}. |

---

##### `licenseConfigurationArn`<sup>Required</sup> <a name="licenseConfigurationArn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification.property.licenseConfigurationArn"></a>

```typescript
public readonly licenseConfigurationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#license_configuration_arn LaunchTemplate#license_configuration_arn}.

---

### LaunchTemplateMetadataOptions <a name="LaunchTemplateMetadataOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateMetadataOptions: launchTemplate.LaunchTemplateMetadataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#http_endpoint LaunchTemplate#http_endpoint}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#http_tokens LaunchTemplate#http_tokens}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#instance_metadata_tags LaunchTemplate#instance_metadata_tags}. |

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#http_endpoint LaunchTemplate#http_endpoint}.

---

##### `httpProtocolIpv6`<sup>Optional</sup> <a name="httpProtocolIpv6" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions.property.httpProtocolIpv6"></a>

```typescript
public readonly httpProtocolIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}.

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#http_tokens LaunchTemplate#http_tokens}.

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#instance_metadata_tags LaunchTemplate#instance_metadata_tags}.

---

### LaunchTemplateMonitoring <a name="LaunchTemplateMonitoring" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoring.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateMonitoring: launchTemplate.LaunchTemplateMonitoring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoring.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#enabled LaunchTemplate#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoring.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#enabled LaunchTemplate#enabled}.

---

### LaunchTemplateNetworkInterfaces <a name="LaunchTemplateNetworkInterfaces" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateNetworkInterfaces: launchTemplate.LaunchTemplateNetworkInterfaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.associateCarrierIpAddress">associateCarrierIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#associate_public_ip_address LaunchTemplate#associate_public_ip_address}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.deleteOnTermination">deleteOnTermination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#description LaunchTemplate#description}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#device_index LaunchTemplate#device_index}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.interfaceType">interfaceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#interface_type LaunchTemplate#interface_type}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4AddressCount">ipv4AddressCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ipv4_address_count LaunchTemplate#ipv4_address_count}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ipv4_addresses LaunchTemplate#ipv4_addresses}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ipv6_address_count LaunchTemplate#ipv6_address_count}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Addresses">ipv6Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ipv6_addresses LaunchTemplate#ipv6_addresses}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkCardIndex">networkCardIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#network_card_index LaunchTemplate#network_card_index}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#network_interface_id LaunchTemplate#network_interface_id}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#private_ip_address LaunchTemplate#private_ip_address}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#security_groups LaunchTemplate#security_groups}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#subnet_id LaunchTemplate#subnet_id}. |

---

##### `associateCarrierIpAddress`<sup>Optional</sup> <a name="associateCarrierIpAddress" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.associateCarrierIpAddress"></a>

```typescript
public readonly associateCarrierIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#associate_public_ip_address LaunchTemplate#associate_public_ip_address}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#description LaunchTemplate#description}.

---

##### `deviceIndex`<sup>Optional</sup> <a name="deviceIndex" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#device_index LaunchTemplate#device_index}.

---

##### `interfaceType`<sup>Optional</sup> <a name="interfaceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.interfaceType"></a>

```typescript
public readonly interfaceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#interface_type LaunchTemplate#interface_type}.

---

##### `ipv4AddressCount`<sup>Optional</sup> <a name="ipv4AddressCount" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4AddressCount"></a>

```typescript
public readonly ipv4AddressCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ipv4_address_count LaunchTemplate#ipv4_address_count}.

---

##### `ipv4Addresses`<sup>Optional</sup> <a name="ipv4Addresses" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ipv4_addresses LaunchTemplate#ipv4_addresses}.

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ipv6_address_count LaunchTemplate#ipv6_address_count}.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#ipv6_addresses LaunchTemplate#ipv6_addresses}.

---

##### `networkCardIndex`<sup>Optional</sup> <a name="networkCardIndex" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkCardIndex"></a>

```typescript
public readonly networkCardIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#network_card_index LaunchTemplate#network_card_index}.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#network_interface_id LaunchTemplate#network_interface_id}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#private_ip_address LaunchTemplate#private_ip_address}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#security_groups LaunchTemplate#security_groups}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#subnet_id LaunchTemplate#subnet_id}.

---

### LaunchTemplatePlacement <a name="LaunchTemplatePlacement" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplatePlacement: launchTemplate.LaunchTemplatePlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.affinity">affinity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#affinity LaunchTemplate#affinity}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#availability_zone LaunchTemplate#availability_zone}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#group_name LaunchTemplate#group_name}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.hostId">hostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#host_id LaunchTemplate#host_id}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#host_resource_group_arn LaunchTemplate#host_resource_group_arn}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.partitionNumber">partitionNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#partition_number LaunchTemplate#partition_number}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.spreadDomain">spreadDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#spread_domain LaunchTemplate#spread_domain}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.tenancy">tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#tenancy LaunchTemplate#tenancy}. |

---

##### `affinity`<sup>Optional</sup> <a name="affinity" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.affinity"></a>

```typescript
public readonly affinity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#affinity LaunchTemplate#affinity}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#availability_zone LaunchTemplate#availability_zone}.

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#group_name LaunchTemplate#group_name}.

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#host_id LaunchTemplate#host_id}.

---

##### `hostResourceGroupArn`<sup>Optional</sup> <a name="hostResourceGroupArn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.hostResourceGroupArn"></a>

```typescript
public readonly hostResourceGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#host_resource_group_arn LaunchTemplate#host_resource_group_arn}.

---

##### `partitionNumber`<sup>Optional</sup> <a name="partitionNumber" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.partitionNumber"></a>

```typescript
public readonly partitionNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#partition_number LaunchTemplate#partition_number}.

---

##### `spreadDomain`<sup>Optional</sup> <a name="spreadDomain" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.spreadDomain"></a>

```typescript
public readonly spreadDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#spread_domain LaunchTemplate#spread_domain}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#tenancy LaunchTemplate#tenancy}.

---

### LaunchTemplateTagSpecifications <a name="LaunchTemplateTagSpecifications" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

const launchTemplateTagSpecifications: launchTemplate.LaunchTemplateTagSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#resource_type LaunchTemplate#resource_type}. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#tags LaunchTemplate#tags}. |

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#resource_type LaunchTemplate#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/launch_template#tags LaunchTemplate#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LaunchTemplateBlockDeviceMappingsEbsOutputReference <a name="LaunchTemplateBlockDeviceMappingsEbsOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

---


### LaunchTemplateBlockDeviceMappingsList <a name="LaunchTemplateBlockDeviceMappingsList" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): LaunchTemplateBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchTemplateBlockDeviceMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>[]

---


### LaunchTemplateBlockDeviceMappingsOutputReference <a name="LaunchTemplateBlockDeviceMappingsOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs"></a>

```typescript
public putEbs(value: LaunchTemplateBlockDeviceMappingsEbs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetEbs` <a name="resetEbs" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetEbs"></a>

```typescript
public resetEbs(): void
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```typescript
public resetNoDevice(): void
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```typescript
public resetVirtualName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference">LaunchTemplateBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: LaunchTemplateBlockDeviceMappingsEbsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference">LaunchTemplateBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```typescript
public readonly ebsInput: LaunchTemplateBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```typescript
public readonly noDeviceInput: string;
```

- *Type:* string

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```typescript
public readonly virtualNameInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchTemplateBlockDeviceMappings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateBlockDeviceMappings">LaunchTemplateBlockDeviceMappings</a>

---


### LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```typescript
public resetCapacityReservationId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```typescript
public readonly capacityReservationIdInput: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---


### LaunchTemplateCapacityReservationSpecificationOutputReference <a name="LaunchTemplateCapacityReservationSpecificationOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">putCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">resetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">resetCapacityReservationTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityReservationTarget` <a name="putCapacityReservationTarget" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```typescript
public putCapacityReservationTarget(value: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `resetCapacityReservationPreference` <a name="resetCapacityReservationPreference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```typescript
public resetCapacityReservationPreference(): void
```

##### `resetCapacityReservationTarget` <a name="resetCapacityReservationTarget" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```typescript
public resetCapacityReservationTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference">LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">capacityReservationPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">capacityReservationTargetInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference">LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `capacityReservationPreferenceInput`<sup>Optional</sup> <a name="capacityReservationPreferenceInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```typescript
public readonly capacityReservationPreferenceInput: string;
```

- *Type:* string

---

##### `capacityReservationTargetInput`<sup>Optional</sup> <a name="capacityReservationTargetInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```typescript
public readonly capacityReservationTargetInput: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

---


### LaunchTemplateCpuOptionsOutputReference <a name="LaunchTemplateCpuOptionsOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateCpuOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetCoreCount">resetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoreCount` <a name="resetCoreCount" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetCoreCount"></a>

```typescript
public resetCoreCount(): void
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetThreadsPerCore"></a>

```typescript
public resetThreadsPerCore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCountInput">coreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCount">coreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCountInput"></a>

```typescript
public readonly coreCountInput: number;
```

- *Type:* number

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCoreInput"></a>

```typescript
public readonly threadsPerCoreInput: number;
```

- *Type:* number

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateCpuOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

---


### LaunchTemplateCreditSpecificationOutputReference <a name="LaunchTemplateCreditSpecificationOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateCreditSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resetCpuCredits">resetCpuCredits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCredits` <a name="resetCpuCredits" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resetCpuCredits"></a>

```typescript
public resetCpuCredits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCreditsInput">cpuCreditsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCreditsInput`<sup>Optional</sup> <a name="cpuCreditsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```typescript
public readonly cpuCreditsInput: string;
```

- *Type:* string

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateCreditSpecification;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

---


### LaunchTemplateElasticGpuSpecificationsList <a name="LaunchTemplateElasticGpuSpecificationsList" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateElasticGpuSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.get"></a>

```typescript
public get(index: number): LaunchTemplateElasticGpuSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchTemplateElasticGpuSpecifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>[]

---


### LaunchTemplateElasticGpuSpecificationsOutputReference <a name="LaunchTemplateElasticGpuSpecificationsOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchTemplateElasticGpuSpecifications;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticGpuSpecifications">LaunchTemplateElasticGpuSpecifications</a>

---


### LaunchTemplateElasticInferenceAcceleratorOutputReference <a name="LaunchTemplateElasticInferenceAcceleratorOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAcceleratorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateElasticInferenceAccelerator;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateElasticInferenceAccelerator">LaunchTemplateElasticInferenceAccelerator</a>

---


### LaunchTemplateEnclaveOptionsOutputReference <a name="LaunchTemplateEnclaveOptionsOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateEnclaveOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateEnclaveOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

---


### LaunchTemplateHibernationOptionsOutputReference <a name="LaunchTemplateHibernationOptionsOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateHibernationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configuredInput">configuredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configuredInput`<sup>Optional</sup> <a name="configuredInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configuredInput"></a>

```typescript
public readonly configuredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configured"></a>

```typescript
public readonly configured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateHibernationOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

---


### LaunchTemplateIamInstanceProfileOutputReference <a name="LaunchTemplateIamInstanceProfileOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateIamInstanceProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateIamInstanceProfile;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

---


### LaunchTemplateInstanceMarketOptionsOutputReference <a name="LaunchTemplateInstanceMarketOptionsOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions">putSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetMarketType">resetMarketType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetSpotOptions">resetSpotOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpotOptions` <a name="putSpotOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions"></a>

```typescript
public putSpotOptions(value: LaunchTemplateInstanceMarketOptionsSpotOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

---

##### `resetMarketType` <a name="resetMarketType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetMarketType"></a>

```typescript
public resetMarketType(): void
```

##### `resetSpotOptions` <a name="resetSpotOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetSpotOptions"></a>

```typescript
public resetSpotOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference">LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketTypeInput">marketTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptionsInput">spotOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketType">marketType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spotOptions`<sup>Required</sup> <a name="spotOptions" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions"></a>

```typescript
public readonly spotOptions: LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference">LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference</a>

---

##### `marketTypeInput`<sup>Optional</sup> <a name="marketTypeInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketTypeInput"></a>

```typescript
public readonly marketTypeInput: string;
```

- *Type:* string

---

##### `spotOptionsInput`<sup>Optional</sup> <a name="spotOptionsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptionsInput"></a>

```typescript
public readonly spotOptionsInput: LaunchTemplateInstanceMarketOptionsSpotOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

---

##### `marketType`<sup>Required</sup> <a name="marketType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketType"></a>

```typescript
public readonly marketType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateInstanceMarketOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

---


### LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference <a name="LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetBlockDurationMinutes">resetBlockDurationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetInstanceInterruptionBehavior">resetInstanceInterruptionBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetMaxPrice">resetMaxPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetSpotInstanceType">resetSpotInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetValidUntil">resetValidUntil</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockDurationMinutes` <a name="resetBlockDurationMinutes" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetBlockDurationMinutes"></a>

```typescript
public resetBlockDurationMinutes(): void
```

##### `resetInstanceInterruptionBehavior` <a name="resetInstanceInterruptionBehavior" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetInstanceInterruptionBehavior"></a>

```typescript
public resetInstanceInterruptionBehavior(): void
```

##### `resetMaxPrice` <a name="resetMaxPrice" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetMaxPrice"></a>

```typescript
public resetMaxPrice(): void
```

##### `resetSpotInstanceType` <a name="resetSpotInstanceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetSpotInstanceType"></a>

```typescript
public resetSpotInstanceType(): void
```

##### `resetValidUntil` <a name="resetValidUntil" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetValidUntil"></a>

```typescript
public resetValidUntil(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutesInput">blockDurationMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput">instanceInterruptionBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPriceInput">maxPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceTypeInput">spotInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntilInput">validUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice">maxPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType">spotInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil">validUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockDurationMinutesInput`<sup>Optional</sup> <a name="blockDurationMinutesInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutesInput"></a>

```typescript
public readonly blockDurationMinutesInput: number;
```

- *Type:* number

---

##### `instanceInterruptionBehaviorInput`<sup>Optional</sup> <a name="instanceInterruptionBehaviorInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput"></a>

```typescript
public readonly instanceInterruptionBehaviorInput: string;
```

- *Type:* string

---

##### `maxPriceInput`<sup>Optional</sup> <a name="maxPriceInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPriceInput"></a>

```typescript
public readonly maxPriceInput: string;
```

- *Type:* string

---

##### `spotInstanceTypeInput`<sup>Optional</sup> <a name="spotInstanceTypeInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceTypeInput"></a>

```typescript
public readonly spotInstanceTypeInput: string;
```

- *Type:* string

---

##### `validUntilInput`<sup>Optional</sup> <a name="validUntilInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntilInput"></a>

```typescript
public readonly validUntilInput: string;
```

- *Type:* string

---

##### `blockDurationMinutes`<sup>Required</sup> <a name="blockDurationMinutes" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes"></a>

```typescript
public readonly blockDurationMinutes: number;
```

- *Type:* number

---

##### `instanceInterruptionBehavior`<sup>Required</sup> <a name="instanceInterruptionBehavior" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```typescript
public readonly instanceInterruptionBehavior: string;
```

- *Type:* string

---

##### `maxPrice`<sup>Required</sup> <a name="maxPrice" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice"></a>

```typescript
public readonly maxPrice: string;
```

- *Type:* string

---

##### `spotInstanceType`<sup>Required</sup> <a name="spotInstanceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType"></a>

```typescript
public readonly spotInstanceType: string;
```

- *Type:* string

---

##### `validUntil`<sup>Required</sup> <a name="validUntil" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateInstanceMarketOptionsSpotOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

---


### LaunchTemplateLicenseSpecificationList <a name="LaunchTemplateLicenseSpecificationList" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateLicenseSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.get"></a>

```typescript
public get(index: number): LaunchTemplateLicenseSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchTemplateLicenseSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>[]

---


### LaunchTemplateLicenseSpecificationOutputReference <a name="LaunchTemplateLicenseSpecificationOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateLicenseSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArnInput">licenseConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseConfigurationArnInput`<sup>Optional</sup> <a name="licenseConfigurationArnInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArnInput"></a>

```typescript
public readonly licenseConfigurationArnInput: string;
```

- *Type:* string

---

##### `licenseConfigurationArn`<sup>Required</sup> <a name="licenseConfigurationArn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn"></a>

```typescript
public readonly licenseConfigurationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchTemplateLicenseSpecification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateLicenseSpecification">LaunchTemplateLicenseSpecification</a>

---


### LaunchTemplateMetadataOptionsOutputReference <a name="LaunchTemplateMetadataOptionsOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpProtocolIpv6">resetHttpProtocolIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetInstanceMetadataTags">resetInstanceMetadataTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```typescript
public resetHttpEndpoint(): void
```

##### `resetHttpProtocolIpv6` <a name="resetHttpProtocolIpv6" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpProtocolIpv6"></a>

```typescript
public resetHttpProtocolIpv6(): void
```

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```typescript
public resetHttpPutResponseHopLimit(): void
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpTokens"></a>

```typescript
public resetHttpTokens(): void
```

##### `resetInstanceMetadataTags` <a name="resetInstanceMetadataTags" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```typescript
public resetInstanceMetadataTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6Input">httpProtocolIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instanceMetadataTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```typescript
public readonly httpEndpointInput: string;
```

- *Type:* string

---

##### `httpProtocolIpv6Input`<sup>Optional</sup> <a name="httpProtocolIpv6Input" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6Input"></a>

```typescript
public readonly httpProtocolIpv6Input: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```typescript
public readonly httpPutResponseHopLimitInput: number;
```

- *Type:* number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokensInput"></a>

```typescript
public readonly httpTokensInput: string;
```

- *Type:* string

---

##### `instanceMetadataTagsInput`<sup>Optional</sup> <a name="instanceMetadataTagsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```typescript
public readonly instanceMetadataTagsInput: string;
```

- *Type:* string

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

---

##### `httpProtocolIpv6`<sup>Required</sup> <a name="httpProtocolIpv6" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```typescript
public readonly httpProtocolIpv6: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateMetadataOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

---


### LaunchTemplateMonitoringOutputReference <a name="LaunchTemplateMonitoringOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateMonitoringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplateMonitoring;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

---


### LaunchTemplateNetworkInterfacesList <a name="LaunchTemplateNetworkInterfacesList" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.get"></a>

```typescript
public get(index: number): LaunchTemplateNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchTemplateNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>[]

---


### LaunchTemplateNetworkInterfacesOutputReference <a name="LaunchTemplateNetworkInterfacesOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress">resetAssociateCarrierIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeviceIndex">resetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetInterfaceType">resetInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4AddressCount">resetIpv4AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Addresses">resetIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkCardIndex">resetNetworkCardIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssociateCarrierIpAddress` <a name="resetAssociateCarrierIpAddress" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress"></a>

```typescript
public resetAssociateCarrierIpAddress(): void
```

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociatePublicIpAddress"></a>

```typescript
public resetAssociatePublicIpAddress(): void
```

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceIndex` <a name="resetDeviceIndex" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```typescript
public resetDeviceIndex(): void
```

##### `resetInterfaceType` <a name="resetInterfaceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetInterfaceType"></a>

```typescript
public resetInterfaceType(): void
```

##### `resetIpv4AddressCount` <a name="resetIpv4AddressCount" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4AddressCount"></a>

```typescript
public resetIpv4AddressCount(): void
```

##### `resetIpv4Addresses` <a name="resetIpv4Addresses" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Addresses"></a>

```typescript
public resetIpv4Addresses(): void
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6AddressCount"></a>

```typescript
public resetIpv6AddressCount(): void
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Addresses"></a>

```typescript
public resetIpv6Addresses(): void
```

##### `resetNetworkCardIndex` <a name="resetNetworkCardIndex" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkCardIndex"></a>

```typescript
public resetNetworkCardIndex(): void
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```typescript
public resetNetworkInterfaceId(): void
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput">associateCarrierIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndexInput">deviceIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceTypeInput">interfaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCountInput">ipv4AddressCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressesInput">ipv4AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndexInput">networkCardIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress">associateCarrierIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceType">interfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount">ipv4AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses">ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex">networkCardIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associateCarrierIpAddressInput`<sup>Optional</sup> <a name="associateCarrierIpAddressInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput"></a>

```typescript
public readonly associateCarrierIpAddressInput: string;
```

- *Type:* string

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddressInput"></a>

```typescript
public readonly associatePublicIpAddressInput: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```typescript
public readonly deviceIndexInput: number;
```

- *Type:* number

---

##### `interfaceTypeInput`<sup>Optional</sup> <a name="interfaceTypeInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceTypeInput"></a>

```typescript
public readonly interfaceTypeInput: string;
```

- *Type:* string

---

##### `ipv4AddressCountInput`<sup>Optional</sup> <a name="ipv4AddressCountInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCountInput"></a>

```typescript
public readonly ipv4AddressCountInput: number;
```

- *Type:* number

---

##### `ipv4AddressesInput`<sup>Optional</sup> <a name="ipv4AddressesInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressesInput"></a>

```typescript
public readonly ipv4AddressesInput: string[];
```

- *Type:* string[]

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCountInput"></a>

```typescript
public readonly ipv6AddressCountInput: number;
```

- *Type:* number

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressesInput"></a>

```typescript
public readonly ipv6AddressesInput: string[];
```

- *Type:* string[]

---

##### `networkCardIndexInput`<sup>Optional</sup> <a name="networkCardIndexInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndexInput"></a>

```typescript
public readonly networkCardIndexInput: number;
```

- *Type:* number

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `associateCarrierIpAddress`<sup>Required</sup> <a name="associateCarrierIpAddress" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```typescript
public readonly associateCarrierIpAddress: string;
```

- *Type:* string

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

---

##### `interfaceType`<sup>Required</sup> <a name="interfaceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceType"></a>

```typescript
public readonly interfaceType: string;
```

- *Type:* string

---

##### `ipv4AddressCount`<sup>Required</sup> <a name="ipv4AddressCount" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount"></a>

```typescript
public readonly ipv4AddressCount: number;
```

- *Type:* number

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: string[];
```

- *Type:* string[]

---

##### `networkCardIndex`<sup>Required</sup> <a name="networkCardIndex" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```typescript
public readonly networkCardIndex: number;
```

- *Type:* number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchTemplateNetworkInterfaces;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateNetworkInterfaces">LaunchTemplateNetworkInterfaces</a>

---


### LaunchTemplatePlacementOutputReference <a name="LaunchTemplatePlacementOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplatePlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetAffinity">resetAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostResourceGroupArn">resetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetPartitionNumber">resetPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetSpreadDomain">resetSpreadDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetTenancy">resetTenancy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAffinity` <a name="resetAffinity" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetAffinity"></a>

```typescript
public resetAffinity(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetGroupName` <a name="resetGroupName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetGroupName"></a>

```typescript
public resetGroupName(): void
```

##### `resetHostId` <a name="resetHostId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostId"></a>

```typescript
public resetHostId(): void
```

##### `resetHostResourceGroupArn` <a name="resetHostResourceGroupArn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostResourceGroupArn"></a>

```typescript
public resetHostResourceGroupArn(): void
```

##### `resetPartitionNumber` <a name="resetPartitionNumber" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetPartitionNumber"></a>

```typescript
public resetPartitionNumber(): void
```

##### `resetSpreadDomain` <a name="resetSpreadDomain" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetSpreadDomain"></a>

```typescript
public resetSpreadDomain(): void
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.resetTenancy"></a>

```typescript
public resetTenancy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinityInput">affinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostIdInput">hostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArnInput">hostResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumberInput">partitionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomainInput">spreadDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancyInput">tenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinity">affinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumber">partitionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomain">spreadDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `affinityInput`<sup>Optional</sup> <a name="affinityInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinityInput"></a>

```typescript
public readonly affinityInput: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostIdInput"></a>

```typescript
public readonly hostIdInput: string;
```

- *Type:* string

---

##### `hostResourceGroupArnInput`<sup>Optional</sup> <a name="hostResourceGroupArnInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArnInput"></a>

```typescript
public readonly hostResourceGroupArnInput: string;
```

- *Type:* string

---

##### `partitionNumberInput`<sup>Optional</sup> <a name="partitionNumberInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumberInput"></a>

```typescript
public readonly partitionNumberInput: number;
```

- *Type:* number

---

##### `spreadDomainInput`<sup>Optional</sup> <a name="spreadDomainInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomainInput"></a>

```typescript
public readonly spreadDomainInput: string;
```

- *Type:* string

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancyInput"></a>

```typescript
public readonly tenancyInput: string;
```

- *Type:* string

---

##### `affinity`<sup>Required</sup> <a name="affinity" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinity"></a>

```typescript
public readonly affinity: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `hostResourceGroupArn`<sup>Required</sup> <a name="hostResourceGroupArn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArn"></a>

```typescript
public readonly hostResourceGroupArn: string;
```

- *Type:* string

---

##### `partitionNumber`<sup>Required</sup> <a name="partitionNumber" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumber"></a>

```typescript
public readonly partitionNumber: number;
```

- *Type:* number

---

##### `spreadDomain`<sup>Required</sup> <a name="spreadDomain" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomain"></a>

```typescript
public readonly spreadDomain: string;
```

- *Type:* string

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LaunchTemplatePlacement;
```

- *Type:* <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

---


### LaunchTemplateTagSpecificationsList <a name="LaunchTemplateTagSpecificationsList" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateTagSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.get"></a>

```typescript
public get(index: number): LaunchTemplateTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchTemplateTagSpecifications[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>[]

---


### LaunchTemplateTagSpecificationsOutputReference <a name="LaunchTemplateTagSpecificationsOutputReference" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer"></a>

```typescript
import { launchTemplate } from '@cdktf/aws-cdk'

new launchTemplate.LaunchTemplateTagSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LaunchTemplateTagSpecifications;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.launchTemplate.LaunchTemplateTagSpecifications">LaunchTemplateTagSpecifications</a>

---



