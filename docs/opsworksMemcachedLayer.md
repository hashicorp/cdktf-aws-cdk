# `aws_opsworks_memcached_layer`

Refer to the Terraform Registory for docs: [`aws_opsworks_memcached_layer`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer).

# `opsworksMemcachedLayer` Submodule <a name="`opsworksMemcachedLayer` Submodule" id="@cdktf/aws-cdk.opsworksMemcachedLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksMemcachedLayer <a name="OpsworksMemcachedLayer" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer aws_opsworks_memcached_layer}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

new opsworksMemcachedLayer.OpsworksMemcachedLayer(scope: Construct, id: string, config: OpsworksMemcachedLayerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig">OpsworksMemcachedLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig">OpsworksMemcachedLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAllocatedMemory">resetAllocatedMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.putCloudwatchConfiguration"></a>

```typescript
public putCloudwatchConfiguration(value: OpsworksMemcachedLayerCloudwatchConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.putEbsVolume"></a>

```typescript
public putEbsVolume(value: IResolvable | OpsworksMemcachedLayerEbsVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.putEbsVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>[]

---

##### `resetAllocatedMemory` <a name="resetAllocatedMemory" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAllocatedMemory"></a>

```typescript
public resetAllocatedMemory(): void
```

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignElasticIps"></a>

```typescript
public resetAutoAssignElasticIps(): void
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoAssignPublicIps"></a>

```typescript
public resetAutoAssignPublicIps(): void
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetAutoHealing"></a>

```typescript
public resetAutoHealing(): void
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCloudwatchConfiguration"></a>

```typescript
public resetCloudwatchConfiguration(): void
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomConfigureRecipes"></a>

```typescript
public resetCustomConfigureRecipes(): void
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomDeployRecipes"></a>

```typescript
public resetCustomDeployRecipes(): void
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomInstanceProfileArn"></a>

```typescript
public resetCustomInstanceProfileArn(): void
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomJson"></a>

```typescript
public resetCustomJson(): void
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSecurityGroupIds"></a>

```typescript
public resetCustomSecurityGroupIds(): void
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomSetupRecipes"></a>

```typescript
public resetCustomSetupRecipes(): void
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomShutdownRecipes"></a>

```typescript
public resetCustomShutdownRecipes(): void
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetCustomUndeployRecipes"></a>

```typescript
public resetCustomUndeployRecipes(): void
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetDrainElbOnShutdown"></a>

```typescript
public resetDrainElbOnShutdown(): void
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetEbsVolume"></a>

```typescript
public resetEbsVolume(): void
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetElasticLoadBalancer"></a>

```typescript
public resetElasticLoadBalancer(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstallUpdatesOnBoot"></a>

```typescript
public resetInstallUpdatesOnBoot(): void
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetInstanceShutdownTimeout"></a>

```typescript
public resetInstanceShutdownTimeout(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetSystemPackages"></a>

```typescript
public resetSystemPackages(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.resetUseEbsOptimizedInstances"></a>

```typescript
public resetUseEbsOptimizedInstances(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.isConstruct"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

opsworksMemcachedLayer.OpsworksMemcachedLayer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformElement"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformResource"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference">OpsworksMemcachedLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList">OpsworksMemcachedLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemoryInput">allocatedMemoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJsonInput">customJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemory">allocatedMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJson">customJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksMemcachedLayerCloudwatchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference">OpsworksMemcachedLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: OpsworksMemcachedLayerEbsVolumeList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList">OpsworksMemcachedLayerEbsVolumeList</a>

---

##### `allocatedMemoryInput`<sup>Optional</sup> <a name="allocatedMemoryInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemoryInput"></a>

```typescript
public readonly allocatedMemoryInput: number;
```

- *Type:* number

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIpsInput"></a>

```typescript
public readonly autoAssignElasticIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIpsInput"></a>

```typescript
public readonly autoAssignPublicIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealingInput"></a>

```typescript
public readonly autoHealingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.cloudwatchConfigurationInput"></a>

```typescript
public readonly cloudwatchConfigurationInput: OpsworksMemcachedLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipesInput"></a>

```typescript
public readonly customConfigureRecipesInput: string[];
```

- *Type:* string[]

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipesInput"></a>

```typescript
public readonly customDeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArnInput"></a>

```typescript
public readonly customInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJsonInput"></a>

```typescript
public readonly customJsonInput: string;
```

- *Type:* string

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIdsInput"></a>

```typescript
public readonly customSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipesInput"></a>

```typescript
public readonly customSetupRecipesInput: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipesInput"></a>

```typescript
public readonly customShutdownRecipesInput: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipesInput"></a>

```typescript
public readonly customUndeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdownInput"></a>

```typescript
public readonly drainElbOnShutdownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.ebsVolumeInput"></a>

```typescript
public readonly ebsVolumeInput: IResolvable | OpsworksMemcachedLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>[]

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancerInput"></a>

```typescript
public readonly elasticLoadBalancerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBootInput"></a>

```typescript
public readonly installUpdatesOnBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeoutInput"></a>

```typescript
public readonly instanceShutdownTimeoutInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackagesInput"></a>

```typescript
public readonly systemPackagesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstancesInput"></a>

```typescript
public readonly useEbsOptimizedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allocatedMemory`<sup>Required</sup> <a name="allocatedMemory" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.allocatedMemory"></a>

```typescript
public readonly allocatedMemory: number;
```

- *Type:* number

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksMemcachedLayerCloudwatchConfiguration <a name="OpsworksMemcachedLayerCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.Initializer"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

const opsworksMemcachedLayerCloudwatchConfiguration: opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#enabled OpsworksMemcachedLayer#enabled}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>[]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#enabled OpsworksMemcachedLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration.property.logStreams"></a>

```typescript
public readonly logStreams: IResolvable | OpsworksMemcachedLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>[]

log_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#log_streams OpsworksMemcachedLayer#log_streams}

---

### OpsworksMemcachedLayerCloudwatchConfigurationLogStreams <a name="OpsworksMemcachedLayerCloudwatchConfigurationLogStreams" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

const opsworksMemcachedLayerCloudwatchConfigurationLogStreams: opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#file OpsworksMemcachedLayer#file}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#log_group_name OpsworksMemcachedLayer#log_group_name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#batch_count OpsworksMemcachedLayer#batch_count}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#batch_size OpsworksMemcachedLayer#batch_size}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#buffer_duration OpsworksMemcachedLayer#buffer_duration}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#datetime_format OpsworksMemcachedLayer#datetime_format}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#encoding OpsworksMemcachedLayer#encoding}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#file_fingerprint_lines OpsworksMemcachedLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#initial_position OpsworksMemcachedLayer#initial_position}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#multiline_start_pattern OpsworksMemcachedLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#time_zone OpsworksMemcachedLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#file OpsworksMemcachedLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#log_group_name OpsworksMemcachedLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#batch_count OpsworksMemcachedLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#batch_size OpsworksMemcachedLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#buffer_duration OpsworksMemcachedLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#datetime_format OpsworksMemcachedLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#encoding OpsworksMemcachedLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#file_fingerprint_lines OpsworksMemcachedLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#initial_position OpsworksMemcachedLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#multiline_start_pattern OpsworksMemcachedLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#time_zone OpsworksMemcachedLayer#time_zone}.

---

### OpsworksMemcachedLayerConfig <a name="OpsworksMemcachedLayerConfig" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.Initializer"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

const opsworksMemcachedLayerConfig: opsworksMemcachedLayer.OpsworksMemcachedLayerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.stackId">stackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#stack_id OpsworksMemcachedLayer#stack_id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.allocatedMemory">allocatedMemory</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#allocated_memory OpsworksMemcachedLayer#allocated_memory}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#auto_healing OpsworksMemcachedLayer#auto_healing}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customJson">customJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_json OpsworksMemcachedLayer#custom_json}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>[]</code> | ebs_volume block. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#id OpsworksMemcachedLayer#id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#name OpsworksMemcachedLayer#name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#system_packages OpsworksMemcachedLayer#system_packages}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#tags OpsworksMemcachedLayer#tags}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#tags_all OpsworksMemcachedLayer#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#stack_id OpsworksMemcachedLayer#stack_id}.

---

##### `allocatedMemory`<sup>Optional</sup> <a name="allocatedMemory" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.allocatedMemory"></a>

```typescript
public readonly allocatedMemory: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#allocated_memory OpsworksMemcachedLayer#allocated_memory}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#auto_healing OpsworksMemcachedLayer#auto_healing}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksMemcachedLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#cloudwatch_configuration OpsworksMemcachedLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_json OpsworksMemcachedLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: IResolvable | OpsworksMemcachedLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>[]

ebs_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#ebs_volume OpsworksMemcachedLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#id OpsworksMemcachedLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#name OpsworksMemcachedLayer#name}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#system_packages OpsworksMemcachedLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#tags OpsworksMemcachedLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#tags_all OpsworksMemcachedLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerConfig.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}.

---

### OpsworksMemcachedLayerEbsVolume <a name="OpsworksMemcachedLayerEbsVolume" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.Initializer"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

const opsworksMemcachedLayerEbsVolume: opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#mount_point OpsworksMemcachedLayer#mount_point}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#number_of_disks OpsworksMemcachedLayer#number_of_disks}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#size OpsworksMemcachedLayer#size}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#encrypted OpsworksMemcachedLayer#encrypted}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#iops OpsworksMemcachedLayer#iops}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#raid_level OpsworksMemcachedLayer#raid_level}. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#type OpsworksMemcachedLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#mount_point OpsworksMemcachedLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#number_of_disks OpsworksMemcachedLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#size OpsworksMemcachedLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#encrypted OpsworksMemcachedLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#iops OpsworksMemcachedLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#raid_level OpsworksMemcachedLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_memcached_layer#type OpsworksMemcachedLayer#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

new opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.get"></a>

```typescript
public get(index: number): OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksMemcachedLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>[]

---


### OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

new opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```typescript
public resetBatchCount(): void
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```typescript
public resetBatchSize(): void
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```typescript
public resetBufferDuration(): void
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```typescript
public resetDatetimeFormat(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```typescript
public resetFileFingerprintLines(): void
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```typescript
public resetInitialPosition(): void
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```typescript
public resetMultilineStartPattern(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```typescript
public readonly batchCountInput: number;
```

- *Type:* number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```typescript
public readonly bufferDurationInput: number;
```

- *Type:* number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```typescript
public readonly datetimeFormatInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```typescript
public readonly fileFingerprintLinesInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```typescript
public readonly initialPositionInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```typescript
public readonly multilineStartPatternInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksMemcachedLayerCloudwatchConfigurationLogStreams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>

---


### OpsworksMemcachedLayerCloudwatchConfigurationOutputReference <a name="OpsworksMemcachedLayerCloudwatchConfigurationOutputReference" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

new opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```typescript
public putLogStreams(value: IResolvable | OpsworksMemcachedLayerCloudwatchConfigurationLogStreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```typescript
public resetLogStreams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList">OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```typescript
public readonly logStreams: OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList">OpsworksMemcachedLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```typescript
public readonly logStreamsInput: IResolvable | OpsworksMemcachedLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationLogStreams">OpsworksMemcachedLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksMemcachedLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerCloudwatchConfiguration">OpsworksMemcachedLayerCloudwatchConfiguration</a>

---


### OpsworksMemcachedLayerEbsVolumeList <a name="OpsworksMemcachedLayerEbsVolumeList" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

new opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.get"></a>

```typescript
public get(index: number): OpsworksMemcachedLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksMemcachedLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>[]

---


### OpsworksMemcachedLayerEbsVolumeOutputReference <a name="OpsworksMemcachedLayerEbsVolumeOutputReference" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer"></a>

```typescript
import { opsworksMemcachedLayer } from '@cdktf/aws-cdk'

new opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```typescript
public resetRaidLevel(): void
```

##### `resetType` <a name="resetType" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```typescript
public readonly numberOfDisksInput: number;
```

- *Type:* number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```typescript
public readonly raidLevelInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksMemcachedLayerEbsVolume;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksMemcachedLayer.OpsworksMemcachedLayerEbsVolume">OpsworksMemcachedLayerEbsVolume</a>

---



