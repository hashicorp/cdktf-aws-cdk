# `aws_opsworks_ganglia_layer`

Refer to the Terraform Registory for docs: [`aws_opsworks_ganglia_layer`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer).

# `opsworksGangliaLayer` Submodule <a name="`opsworksGangliaLayer` Submodule" id="@cdktf/aws-cdk.opsworksGangliaLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksGangliaLayer <a name="OpsworksGangliaLayer" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer aws_opsworks_ganglia_layer}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.Initializer"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

new opsworksGangliaLayer.OpsworksGangliaLayer(scope: Construct, id: string, config: OpsworksGangliaLayerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig">OpsworksGangliaLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig">OpsworksGangliaLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.putCloudwatchConfiguration"></a>

```typescript
public putCloudwatchConfiguration(value: OpsworksGangliaLayerCloudwatchConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration">OpsworksGangliaLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.putEbsVolume"></a>

```typescript
public putEbsVolume(value: IResolvable | OpsworksGangliaLayerEbsVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.putEbsVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume">OpsworksGangliaLayerEbsVolume</a>[]

---

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetAutoAssignElasticIps"></a>

```typescript
public resetAutoAssignElasticIps(): void
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetAutoAssignPublicIps"></a>

```typescript
public resetAutoAssignPublicIps(): void
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetAutoHealing"></a>

```typescript
public resetAutoHealing(): void
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCloudwatchConfiguration"></a>

```typescript
public resetCloudwatchConfiguration(): void
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomConfigureRecipes"></a>

```typescript
public resetCustomConfigureRecipes(): void
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomDeployRecipes"></a>

```typescript
public resetCustomDeployRecipes(): void
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomInstanceProfileArn"></a>

```typescript
public resetCustomInstanceProfileArn(): void
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomJson"></a>

```typescript
public resetCustomJson(): void
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomSecurityGroupIds"></a>

```typescript
public resetCustomSecurityGroupIds(): void
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomSetupRecipes"></a>

```typescript
public resetCustomSetupRecipes(): void
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomShutdownRecipes"></a>

```typescript
public resetCustomShutdownRecipes(): void
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetCustomUndeployRecipes"></a>

```typescript
public resetCustomUndeployRecipes(): void
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetDrainElbOnShutdown"></a>

```typescript
public resetDrainElbOnShutdown(): void
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetEbsVolume"></a>

```typescript
public resetEbsVolume(): void
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetElasticLoadBalancer"></a>

```typescript
public resetElasticLoadBalancer(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetInstallUpdatesOnBoot"></a>

```typescript
public resetInstallUpdatesOnBoot(): void
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetInstanceShutdownTimeout"></a>

```typescript
public resetInstanceShutdownTimeout(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetSystemPackages"></a>

```typescript
public resetSystemPackages(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetUseEbsOptimizedInstances"></a>

```typescript
public resetUseEbsOptimizedInstances(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.isConstruct"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

opsworksGangliaLayer.OpsworksGangliaLayer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.isTerraformElement"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

opsworksGangliaLayer.OpsworksGangliaLayer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.isTerraformResource"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

opsworksGangliaLayer.OpsworksGangliaLayer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference">OpsworksGangliaLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList">OpsworksGangliaLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration">OpsworksGangliaLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customJsonInput">customJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume">OpsworksGangliaLayerEbsVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customJson">customJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksGangliaLayerCloudwatchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference">OpsworksGangliaLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: OpsworksGangliaLayerEbsVolumeList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList">OpsworksGangliaLayerEbsVolumeList</a>

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoAssignElasticIpsInput"></a>

```typescript
public readonly autoAssignElasticIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoAssignPublicIpsInput"></a>

```typescript
public readonly autoAssignPublicIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoHealingInput"></a>

```typescript
public readonly autoHealingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.cloudwatchConfigurationInput"></a>

```typescript
public readonly cloudwatchConfigurationInput: OpsworksGangliaLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration">OpsworksGangliaLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customConfigureRecipesInput"></a>

```typescript
public readonly customConfigureRecipesInput: string[];
```

- *Type:* string[]

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customDeployRecipesInput"></a>

```typescript
public readonly customDeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customInstanceProfileArnInput"></a>

```typescript
public readonly customInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customJsonInput"></a>

```typescript
public readonly customJsonInput: string;
```

- *Type:* string

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customSecurityGroupIdsInput"></a>

```typescript
public readonly customSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customSetupRecipesInput"></a>

```typescript
public readonly customSetupRecipesInput: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customShutdownRecipesInput"></a>

```typescript
public readonly customShutdownRecipesInput: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customUndeployRecipesInput"></a>

```typescript
public readonly customUndeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.drainElbOnShutdownInput"></a>

```typescript
public readonly drainElbOnShutdownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.ebsVolumeInput"></a>

```typescript
public readonly ebsVolumeInput: IResolvable | OpsworksGangliaLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume">OpsworksGangliaLayerEbsVolume</a>[]

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.elasticLoadBalancerInput"></a>

```typescript
public readonly elasticLoadBalancerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.installUpdatesOnBootInput"></a>

```typescript
public readonly installUpdatesOnBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.instanceShutdownTimeoutInput"></a>

```typescript
public readonly instanceShutdownTimeoutInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.systemPackagesInput"></a>

```typescript
public readonly systemPackagesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.useEbsOptimizedInstancesInput"></a>

```typescript
public readonly useEbsOptimizedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksGangliaLayerCloudwatchConfiguration <a name="OpsworksGangliaLayerCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration.Initializer"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

const opsworksGangliaLayerCloudwatchConfiguration: opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#enabled OpsworksGangliaLayer#enabled}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams">OpsworksGangliaLayerCloudwatchConfigurationLogStreams</a>[]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#enabled OpsworksGangliaLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration.property.logStreams"></a>

```typescript
public readonly logStreams: IResolvable | OpsworksGangliaLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams">OpsworksGangliaLayerCloudwatchConfigurationLogStreams</a>[]

log_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#log_streams OpsworksGangliaLayer#log_streams}

---

### OpsworksGangliaLayerCloudwatchConfigurationLogStreams <a name="OpsworksGangliaLayerCloudwatchConfigurationLogStreams" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

const opsworksGangliaLayerCloudwatchConfigurationLogStreams: opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#file OpsworksGangliaLayer#file}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#log_group_name OpsworksGangliaLayer#log_group_name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#batch_count OpsworksGangliaLayer#batch_count}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#batch_size OpsworksGangliaLayer#batch_size}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#buffer_duration OpsworksGangliaLayer#buffer_duration}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#datetime_format OpsworksGangliaLayer#datetime_format}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#encoding OpsworksGangliaLayer#encoding}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#file_fingerprint_lines OpsworksGangliaLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#initial_position OpsworksGangliaLayer#initial_position}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#multiline_start_pattern OpsworksGangliaLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#time_zone OpsworksGangliaLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#file OpsworksGangliaLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#log_group_name OpsworksGangliaLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#batch_count OpsworksGangliaLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#batch_size OpsworksGangliaLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#buffer_duration OpsworksGangliaLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#datetime_format OpsworksGangliaLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#encoding OpsworksGangliaLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#file_fingerprint_lines OpsworksGangliaLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#initial_position OpsworksGangliaLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#multiline_start_pattern OpsworksGangliaLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#time_zone OpsworksGangliaLayer#time_zone}.

---

### OpsworksGangliaLayerConfig <a name="OpsworksGangliaLayerConfig" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.Initializer"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

const opsworksGangliaLayerConfig: opsworksGangliaLayer.OpsworksGangliaLayerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#password OpsworksGangliaLayer#password}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.stackId">stackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#stack_id OpsworksGangliaLayer#stack_id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#auto_assign_elastic_ips OpsworksGangliaLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#auto_assign_public_ips OpsworksGangliaLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#auto_healing OpsworksGangliaLayer#auto_healing}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration">OpsworksGangliaLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_configure_recipes OpsworksGangliaLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_deploy_recipes OpsworksGangliaLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_instance_profile_arn OpsworksGangliaLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customJson">customJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_json OpsworksGangliaLayer#custom_json}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_security_group_ids OpsworksGangliaLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_setup_recipes OpsworksGangliaLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_shutdown_recipes OpsworksGangliaLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_undeploy_recipes OpsworksGangliaLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#drain_elb_on_shutdown OpsworksGangliaLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume">OpsworksGangliaLayerEbsVolume</a>[]</code> | ebs_volume block. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#elastic_load_balancer OpsworksGangliaLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#id OpsworksGangliaLayer#id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#install_updates_on_boot OpsworksGangliaLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#instance_shutdown_timeout OpsworksGangliaLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#name OpsworksGangliaLayer#name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#system_packages OpsworksGangliaLayer#system_packages}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#tags OpsworksGangliaLayer#tags}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#tags_all OpsworksGangliaLayer#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#url OpsworksGangliaLayer#url}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#use_ebs_optimized_instances OpsworksGangliaLayer#use_ebs_optimized_instances}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#username OpsworksGangliaLayer#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#password OpsworksGangliaLayer#password}.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#stack_id OpsworksGangliaLayer#stack_id}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#auto_assign_elastic_ips OpsworksGangliaLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#auto_assign_public_ips OpsworksGangliaLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#auto_healing OpsworksGangliaLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksGangliaLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration">OpsworksGangliaLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#cloudwatch_configuration OpsworksGangliaLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_configure_recipes OpsworksGangliaLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_deploy_recipes OpsworksGangliaLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_instance_profile_arn OpsworksGangliaLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_json OpsworksGangliaLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_security_group_ids OpsworksGangliaLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_setup_recipes OpsworksGangliaLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_shutdown_recipes OpsworksGangliaLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#custom_undeploy_recipes OpsworksGangliaLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#drain_elb_on_shutdown OpsworksGangliaLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: IResolvable | OpsworksGangliaLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume">OpsworksGangliaLayerEbsVolume</a>[]

ebs_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#ebs_volume OpsworksGangliaLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#elastic_load_balancer OpsworksGangliaLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#id OpsworksGangliaLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#install_updates_on_boot OpsworksGangliaLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#instance_shutdown_timeout OpsworksGangliaLayer#instance_shutdown_timeout}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#name OpsworksGangliaLayer#name}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#system_packages OpsworksGangliaLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#tags OpsworksGangliaLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#tags_all OpsworksGangliaLayer#tags_all}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#url OpsworksGangliaLayer#url}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#use_ebs_optimized_instances OpsworksGangliaLayer#use_ebs_optimized_instances}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#username OpsworksGangliaLayer#username}.

---

### OpsworksGangliaLayerEbsVolume <a name="OpsworksGangliaLayerEbsVolume" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.Initializer"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

const opsworksGangliaLayerEbsVolume: opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#mount_point OpsworksGangliaLayer#mount_point}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#number_of_disks OpsworksGangliaLayer#number_of_disks}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#size OpsworksGangliaLayer#size}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#encrypted OpsworksGangliaLayer#encrypted}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#iops OpsworksGangliaLayer#iops}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#raid_level OpsworksGangliaLayer#raid_level}. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#type OpsworksGangliaLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#mount_point OpsworksGangliaLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#number_of_disks OpsworksGangliaLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#size OpsworksGangliaLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#encrypted OpsworksGangliaLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#iops OpsworksGangliaLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#raid_level OpsworksGangliaLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_ganglia_layer#type OpsworksGangliaLayer#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

new opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.get"></a>

```typescript
public get(index: number): OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams">OpsworksGangliaLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksGangliaLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams">OpsworksGangliaLayerCloudwatchConfigurationLogStreams</a>[]

---


### OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

new opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```typescript
public resetBatchCount(): void
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```typescript
public resetBatchSize(): void
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```typescript
public resetBufferDuration(): void
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```typescript
public resetDatetimeFormat(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```typescript
public resetFileFingerprintLines(): void
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```typescript
public resetInitialPosition(): void
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```typescript
public resetMultilineStartPattern(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams">OpsworksGangliaLayerCloudwatchConfigurationLogStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```typescript
public readonly batchCountInput: number;
```

- *Type:* number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```typescript
public readonly bufferDurationInput: number;
```

- *Type:* number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```typescript
public readonly datetimeFormatInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```typescript
public readonly fileFingerprintLinesInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```typescript
public readonly initialPositionInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```typescript
public readonly multilineStartPatternInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksGangliaLayerCloudwatchConfigurationLogStreams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams">OpsworksGangliaLayerCloudwatchConfigurationLogStreams</a>

---


### OpsworksGangliaLayerCloudwatchConfigurationOutputReference <a name="OpsworksGangliaLayerCloudwatchConfigurationOutputReference" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

new opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```typescript
public putLogStreams(value: IResolvable | OpsworksGangliaLayerCloudwatchConfigurationLogStreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams">OpsworksGangliaLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```typescript
public resetLogStreams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList">OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams">OpsworksGangliaLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration">OpsworksGangliaLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```typescript
public readonly logStreams: OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList">OpsworksGangliaLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```typescript
public readonly logStreamsInput: IResolvable | OpsworksGangliaLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationLogStreams">OpsworksGangliaLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksGangliaLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerCloudwatchConfiguration">OpsworksGangliaLayerCloudwatchConfiguration</a>

---


### OpsworksGangliaLayerEbsVolumeList <a name="OpsworksGangliaLayerEbsVolumeList" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.Initializer"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

new opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.get"></a>

```typescript
public get(index: number): OpsworksGangliaLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume">OpsworksGangliaLayerEbsVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksGangliaLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume">OpsworksGangliaLayerEbsVolume</a>[]

---


### OpsworksGangliaLayerEbsVolumeOutputReference <a name="OpsworksGangliaLayerEbsVolumeOutputReference" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.Initializer"></a>

```typescript
import { opsworksGangliaLayer } from '@cdktf/aws-cdk'

new opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```typescript
public resetRaidLevel(): void
```

##### `resetType` <a name="resetType" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume">OpsworksGangliaLayerEbsVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```typescript
public readonly numberOfDisksInput: number;
```

- *Type:* number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```typescript
public readonly raidLevelInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksGangliaLayerEbsVolume;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksGangliaLayer.OpsworksGangliaLayerEbsVolume">OpsworksGangliaLayerEbsVolume</a>

---



