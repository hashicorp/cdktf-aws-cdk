# `aws_opsworks_rails_app_layer`

Refer to the Terraform Registory for docs: [`aws_opsworks_rails_app_layer`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer).

# `opsworksRailsAppLayer` Submodule <a name="`opsworksRailsAppLayer` Submodule" id="@cdktf/aws-cdk.opsworksRailsAppLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksRailsAppLayer <a name="OpsworksRailsAppLayer" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer aws_opsworks_rails_app_layer}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

new opsworksRailsAppLayer.OpsworksRailsAppLayer(scope: Construct, id: string, config: OpsworksRailsAppLayerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig">OpsworksRailsAppLayerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig">OpsworksRailsAppLayerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration">putCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume">putEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAppServer">resetAppServer</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignElasticIps">resetAutoAssignElasticIps</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignPublicIps">resetAutoAssignPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoHealing">resetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetBundlerVersion">resetBundlerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCloudwatchConfiguration">resetCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomConfigureRecipes">resetCustomConfigureRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomDeployRecipes">resetCustomDeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomInstanceProfileArn">resetCustomInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSecurityGroupIds">resetCustomSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSetupRecipes">resetCustomSetupRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomShutdownRecipes">resetCustomShutdownRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomUndeployRecipes">resetCustomUndeployRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetDrainElbOnShutdown">resetDrainElbOnShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetEbsVolume">resetEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetElasticLoadBalancer">resetElasticLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstallUpdatesOnBoot">resetInstallUpdatesOnBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstanceShutdownTimeout">resetInstanceShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetManageBundler">resetManageBundler</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetPassengerVersion">resetPassengerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubygemsVersion">resetRubygemsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubyVersion">resetRubyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetSystemPackages">resetSystemPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetUseEbsOptimizedInstances">resetUseEbsOptimizedInstances</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCloudwatchConfiguration` <a name="putCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration"></a>

```typescript
public putCloudwatchConfiguration(value: OpsworksRailsAppLayerCloudwatchConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---

##### `putEbsVolume` <a name="putEbsVolume" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume"></a>

```typescript
public putEbsVolume(value: IResolvable | OpsworksRailsAppLayerEbsVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.putEbsVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]

---

##### `resetAppServer` <a name="resetAppServer" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAppServer"></a>

```typescript
public resetAppServer(): void
```

##### `resetAutoAssignElasticIps` <a name="resetAutoAssignElasticIps" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignElasticIps"></a>

```typescript
public resetAutoAssignElasticIps(): void
```

##### `resetAutoAssignPublicIps` <a name="resetAutoAssignPublicIps" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoAssignPublicIps"></a>

```typescript
public resetAutoAssignPublicIps(): void
```

##### `resetAutoHealing` <a name="resetAutoHealing" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetAutoHealing"></a>

```typescript
public resetAutoHealing(): void
```

##### `resetBundlerVersion` <a name="resetBundlerVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetBundlerVersion"></a>

```typescript
public resetBundlerVersion(): void
```

##### `resetCloudwatchConfiguration` <a name="resetCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCloudwatchConfiguration"></a>

```typescript
public resetCloudwatchConfiguration(): void
```

##### `resetCustomConfigureRecipes` <a name="resetCustomConfigureRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomConfigureRecipes"></a>

```typescript
public resetCustomConfigureRecipes(): void
```

##### `resetCustomDeployRecipes` <a name="resetCustomDeployRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomDeployRecipes"></a>

```typescript
public resetCustomDeployRecipes(): void
```

##### `resetCustomInstanceProfileArn` <a name="resetCustomInstanceProfileArn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomInstanceProfileArn"></a>

```typescript
public resetCustomInstanceProfileArn(): void
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomJson"></a>

```typescript
public resetCustomJson(): void
```

##### `resetCustomSecurityGroupIds` <a name="resetCustomSecurityGroupIds" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSecurityGroupIds"></a>

```typescript
public resetCustomSecurityGroupIds(): void
```

##### `resetCustomSetupRecipes` <a name="resetCustomSetupRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomSetupRecipes"></a>

```typescript
public resetCustomSetupRecipes(): void
```

##### `resetCustomShutdownRecipes` <a name="resetCustomShutdownRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomShutdownRecipes"></a>

```typescript
public resetCustomShutdownRecipes(): void
```

##### `resetCustomUndeployRecipes` <a name="resetCustomUndeployRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetCustomUndeployRecipes"></a>

```typescript
public resetCustomUndeployRecipes(): void
```

##### `resetDrainElbOnShutdown` <a name="resetDrainElbOnShutdown" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetDrainElbOnShutdown"></a>

```typescript
public resetDrainElbOnShutdown(): void
```

##### `resetEbsVolume` <a name="resetEbsVolume" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetEbsVolume"></a>

```typescript
public resetEbsVolume(): void
```

##### `resetElasticLoadBalancer` <a name="resetElasticLoadBalancer" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetElasticLoadBalancer"></a>

```typescript
public resetElasticLoadBalancer(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallUpdatesOnBoot` <a name="resetInstallUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstallUpdatesOnBoot"></a>

```typescript
public resetInstallUpdatesOnBoot(): void
```

##### `resetInstanceShutdownTimeout` <a name="resetInstanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetInstanceShutdownTimeout"></a>

```typescript
public resetInstanceShutdownTimeout(): void
```

##### `resetManageBundler` <a name="resetManageBundler" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetManageBundler"></a>

```typescript
public resetManageBundler(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPassengerVersion` <a name="resetPassengerVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetPassengerVersion"></a>

```typescript
public resetPassengerVersion(): void
```

##### `resetRubygemsVersion` <a name="resetRubygemsVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubygemsVersion"></a>

```typescript
public resetRubygemsVersion(): void
```

##### `resetRubyVersion` <a name="resetRubyVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetRubyVersion"></a>

```typescript
public resetRubyVersion(): void
```

##### `resetSystemPackages` <a name="resetSystemPackages" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetSystemPackages"></a>

```typescript
public resetSystemPackages(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUseEbsOptimizedInstances` <a name="resetUseEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.resetUseEbsOptimizedInstances"></a>

```typescript
public resetUseEbsOptimizedInstances(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference">OpsworksRailsAppLayerCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolume">ebsVolume</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList">OpsworksRailsAppLayerEbsVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServerInput">appServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIpsInput">autoAssignElasticIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIpsInput">autoAssignPublicIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealingInput">autoHealingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersionInput">bundlerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfigurationInput">cloudwatchConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipesInput">customConfigureRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipesInput">customDeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArnInput">customInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJsonInput">customJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIdsInput">customSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipesInput">customSetupRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipesInput">customShutdownRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipesInput">customUndeployRecipesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdownInput">drainElbOnShutdownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolumeInput">ebsVolumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancerInput">elasticLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBootInput">installUpdatesOnBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeoutInput">instanceShutdownTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundlerInput">manageBundlerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersionInput">passengerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersionInput">rubygemsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersionInput">rubyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackagesInput">systemPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstancesInput">useEbsOptimizedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServer">appServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersion">bundlerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJson">customJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundler">manageBundler</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersion">passengerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersion">rubygemsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersion">rubyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchConfiguration`<sup>Required</sup> <a name="cloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksRailsAppLayerCloudwatchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference">OpsworksRailsAppLayerCloudwatchConfigurationOutputReference</a>

---

##### `ebsVolume`<sup>Required</sup> <a name="ebsVolume" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: OpsworksRailsAppLayerEbsVolumeList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList">OpsworksRailsAppLayerEbsVolumeList</a>

---

##### `appServerInput`<sup>Optional</sup> <a name="appServerInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServerInput"></a>

```typescript
public readonly appServerInput: string;
```

- *Type:* string

---

##### `autoAssignElasticIpsInput`<sup>Optional</sup> <a name="autoAssignElasticIpsInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIpsInput"></a>

```typescript
public readonly autoAssignElasticIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIpsInput`<sup>Optional</sup> <a name="autoAssignPublicIpsInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIpsInput"></a>

```typescript
public readonly autoAssignPublicIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealingInput`<sup>Optional</sup> <a name="autoHealingInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealingInput"></a>

```typescript
public readonly autoHealingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bundlerVersionInput`<sup>Optional</sup> <a name="bundlerVersionInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersionInput"></a>

```typescript
public readonly bundlerVersionInput: string;
```

- *Type:* string

---

##### `cloudwatchConfigurationInput`<sup>Optional</sup> <a name="cloudwatchConfigurationInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.cloudwatchConfigurationInput"></a>

```typescript
public readonly cloudwatchConfigurationInput: OpsworksRailsAppLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---

##### `customConfigureRecipesInput`<sup>Optional</sup> <a name="customConfigureRecipesInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipesInput"></a>

```typescript
public readonly customConfigureRecipesInput: string[];
```

- *Type:* string[]

---

##### `customDeployRecipesInput`<sup>Optional</sup> <a name="customDeployRecipesInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipesInput"></a>

```typescript
public readonly customDeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArnInput`<sup>Optional</sup> <a name="customInstanceProfileArnInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArnInput"></a>

```typescript
public readonly customInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJsonInput"></a>

```typescript
public readonly customJsonInput: string;
```

- *Type:* string

---

##### `customSecurityGroupIdsInput`<sup>Optional</sup> <a name="customSecurityGroupIdsInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIdsInput"></a>

```typescript
public readonly customSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `customSetupRecipesInput`<sup>Optional</sup> <a name="customSetupRecipesInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipesInput"></a>

```typescript
public readonly customSetupRecipesInput: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipesInput`<sup>Optional</sup> <a name="customShutdownRecipesInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipesInput"></a>

```typescript
public readonly customShutdownRecipesInput: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipesInput`<sup>Optional</sup> <a name="customUndeployRecipesInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipesInput"></a>

```typescript
public readonly customUndeployRecipesInput: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdownInput`<sup>Optional</sup> <a name="drainElbOnShutdownInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdownInput"></a>

```typescript
public readonly drainElbOnShutdownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ebsVolumeInput`<sup>Optional</sup> <a name="ebsVolumeInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.ebsVolumeInput"></a>

```typescript
public readonly ebsVolumeInput: IResolvable | OpsworksRailsAppLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]

---

##### `elasticLoadBalancerInput`<sup>Optional</sup> <a name="elasticLoadBalancerInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancerInput"></a>

```typescript
public readonly elasticLoadBalancerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installUpdatesOnBootInput`<sup>Optional</sup> <a name="installUpdatesOnBootInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBootInput"></a>

```typescript
public readonly installUpdatesOnBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeoutInput`<sup>Optional</sup> <a name="instanceShutdownTimeoutInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeoutInput"></a>

```typescript
public readonly instanceShutdownTimeoutInput: number;
```

- *Type:* number

---

##### `manageBundlerInput`<sup>Optional</sup> <a name="manageBundlerInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundlerInput"></a>

```typescript
public readonly manageBundlerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passengerVersionInput`<sup>Optional</sup> <a name="passengerVersionInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersionInput"></a>

```typescript
public readonly passengerVersionInput: string;
```

- *Type:* string

---

##### `rubygemsVersionInput`<sup>Optional</sup> <a name="rubygemsVersionInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersionInput"></a>

```typescript
public readonly rubygemsVersionInput: string;
```

- *Type:* string

---

##### `rubyVersionInput`<sup>Optional</sup> <a name="rubyVersionInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersionInput"></a>

```typescript
public readonly rubyVersionInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `systemPackagesInput`<sup>Optional</sup> <a name="systemPackagesInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackagesInput"></a>

```typescript
public readonly systemPackagesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstancesInput`<sup>Optional</sup> <a name="useEbsOptimizedInstancesInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstancesInput"></a>

```typescript
public readonly useEbsOptimizedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `appServer`<sup>Required</sup> <a name="appServer" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.appServer"></a>

```typescript
public readonly appServer: string;
```

- *Type:* string

---

##### `autoAssignElasticIps`<sup>Required</sup> <a name="autoAssignElasticIps" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoAssignPublicIps`<sup>Required</sup> <a name="autoAssignPublicIps" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoHealing`<sup>Required</sup> <a name="autoHealing" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bundlerVersion`<sup>Required</sup> <a name="bundlerVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.bundlerVersion"></a>

```typescript
public readonly bundlerVersion: string;
```

- *Type:* string

---

##### `customConfigureRecipes`<sup>Required</sup> <a name="customConfigureRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

---

##### `customDeployRecipes`<sup>Required</sup> <a name="customDeployRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

---

##### `customInstanceProfileArn`<sup>Required</sup> <a name="customInstanceProfileArn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

---

##### `customSecurityGroupIds`<sup>Required</sup> <a name="customSecurityGroupIds" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `customSetupRecipes`<sup>Required</sup> <a name="customSetupRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

---

##### `customShutdownRecipes`<sup>Required</sup> <a name="customShutdownRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

---

##### `customUndeployRecipes`<sup>Required</sup> <a name="customUndeployRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

---

##### `drainElbOnShutdown`<sup>Required</sup> <a name="drainElbOnShutdown" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticLoadBalancer`<sup>Required</sup> <a name="elasticLoadBalancer" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installUpdatesOnBoot`<sup>Required</sup> <a name="installUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceShutdownTimeout`<sup>Required</sup> <a name="instanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

---

##### `manageBundler`<sup>Required</sup> <a name="manageBundler" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.manageBundler"></a>

```typescript
public readonly manageBundler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `passengerVersion`<sup>Required</sup> <a name="passengerVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.passengerVersion"></a>

```typescript
public readonly passengerVersion: string;
```

- *Type:* string

---

##### `rubygemsVersion`<sup>Required</sup> <a name="rubygemsVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubygemsVersion"></a>

```typescript
public readonly rubygemsVersion: string;
```

- *Type:* string

---

##### `rubyVersion`<sup>Required</sup> <a name="rubyVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.rubyVersion"></a>

```typescript
public readonly rubyVersion: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `systemPackages`<sup>Required</sup> <a name="systemPackages" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useEbsOptimizedInstances`<sup>Required</sup> <a name="useEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksRailsAppLayerCloudwatchConfiguration <a name="OpsworksRailsAppLayerCloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

const opsworksRailsAppLayerCloudwatchConfiguration: opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#enabled OpsworksRailsAppLayer#enabled}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.logStreams">logStreams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]</code> | log_streams block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#enabled OpsworksRailsAppLayer#enabled}.

---

##### `logStreams`<sup>Optional</sup> <a name="logStreams" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration.property.logStreams"></a>

```typescript
public readonly logStreams: IResolvable | OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]

log_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#log_streams OpsworksRailsAppLayer#log_streams}

---

### OpsworksRailsAppLayerCloudwatchConfigurationLogStreams <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreams" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

const opsworksRailsAppLayerCloudwatchConfigurationLogStreams: opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.file">file</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#file OpsworksRailsAppLayer#file}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#log_group_name OpsworksRailsAppLayer#log_group_name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchCount">batchCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#batch_count OpsworksRailsAppLayer#batch_count}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchSize">batchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#batch_size OpsworksRailsAppLayer#batch_size}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#buffer_duration OpsworksRailsAppLayer#buffer_duration}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#datetime_format OpsworksRailsAppLayer#datetime_format}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#encoding OpsworksRailsAppLayer#encoding}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#file_fingerprint_lines OpsworksRailsAppLayer#file_fingerprint_lines}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.initialPosition">initialPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#initial_position OpsworksRailsAppLayer#initial_position}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#multiline_start_pattern OpsworksRailsAppLayer#multiline_start_pattern}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#time_zone OpsworksRailsAppLayer#time_zone}. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#file OpsworksRailsAppLayer#file}.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#log_group_name OpsworksRailsAppLayer#log_group_name}.

---

##### `batchCount`<sup>Optional</sup> <a name="batchCount" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#batch_count OpsworksRailsAppLayer#batch_count}.

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#batch_size OpsworksRailsAppLayer#batch_size}.

---

##### `bufferDuration`<sup>Optional</sup> <a name="bufferDuration" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#buffer_duration OpsworksRailsAppLayer#buffer_duration}.

---

##### `datetimeFormat`<sup>Optional</sup> <a name="datetimeFormat" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#datetime_format OpsworksRailsAppLayer#datetime_format}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#encoding OpsworksRailsAppLayer#encoding}.

---

##### `fileFingerprintLines`<sup>Optional</sup> <a name="fileFingerprintLines" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#file_fingerprint_lines OpsworksRailsAppLayer#file_fingerprint_lines}.

---

##### `initialPosition`<sup>Optional</sup> <a name="initialPosition" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#initial_position OpsworksRailsAppLayer#initial_position}.

---

##### `multilineStartPattern`<sup>Optional</sup> <a name="multilineStartPattern" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#multiline_start_pattern OpsworksRailsAppLayer#multiline_start_pattern}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#time_zone OpsworksRailsAppLayer#time_zone}.

---

### OpsworksRailsAppLayerConfig <a name="OpsworksRailsAppLayerConfig" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

const opsworksRailsAppLayerConfig: opsworksRailsAppLayer.OpsworksRailsAppLayerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.stackId">stackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#stack_id OpsworksRailsAppLayer#stack_id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.appServer">appServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#app_server OpsworksRailsAppLayer#app_server}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignElasticIps">autoAssignElasticIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignPublicIps">autoAssignPublicIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoHealing">autoHealing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#auto_healing OpsworksRailsAppLayer#auto_healing}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.bundlerVersion">bundlerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#bundler_version OpsworksRailsAppLayer#bundler_version}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.cloudwatchConfiguration">cloudwatchConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | cloudwatch_configuration block. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customConfigureRecipes">customConfigureRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customDeployRecipes">customDeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customInstanceProfileArn">customInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customJson">customJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_json OpsworksRailsAppLayer#custom_json}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSecurityGroupIds">customSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSetupRecipes">customSetupRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customShutdownRecipes">customShutdownRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customUndeployRecipes">customUndeployRecipes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.drainElbOnShutdown">drainElbOnShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.ebsVolume">ebsVolume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]</code> | ebs_volume block. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.elasticLoadBalancer">elasticLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#id OpsworksRailsAppLayer#id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.installUpdatesOnBoot">installUpdatesOnBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.instanceShutdownTimeout">instanceShutdownTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.manageBundler">manageBundler</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#manage_bundler OpsworksRailsAppLayer#manage_bundler}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#name OpsworksRailsAppLayer#name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.passengerVersion">passengerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#passenger_version OpsworksRailsAppLayer#passenger_version}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubygemsVersion">rubygemsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#rubygems_version OpsworksRailsAppLayer#rubygems_version}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubyVersion">rubyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#ruby_version OpsworksRailsAppLayer#ruby_version}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.systemPackages">systemPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#system_packages OpsworksRailsAppLayer#system_packages}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#tags OpsworksRailsAppLayer#tags}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#tags_all OpsworksRailsAppLayer#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.useEbsOptimizedInstances">useEbsOptimizedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#stack_id OpsworksRailsAppLayer#stack_id}.

---

##### `appServer`<sup>Optional</sup> <a name="appServer" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.appServer"></a>

```typescript
public readonly appServer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#app_server OpsworksRailsAppLayer#app_server}.

---

##### `autoAssignElasticIps`<sup>Optional</sup> <a name="autoAssignElasticIps" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignElasticIps"></a>

```typescript
public readonly autoAssignElasticIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}.

---

##### `autoAssignPublicIps`<sup>Optional</sup> <a name="autoAssignPublicIps" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoAssignPublicIps"></a>

```typescript
public readonly autoAssignPublicIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}.

---

##### `autoHealing`<sup>Optional</sup> <a name="autoHealing" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.autoHealing"></a>

```typescript
public readonly autoHealing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#auto_healing OpsworksRailsAppLayer#auto_healing}.

---

##### `bundlerVersion`<sup>Optional</sup> <a name="bundlerVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.bundlerVersion"></a>

```typescript
public readonly bundlerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#bundler_version OpsworksRailsAppLayer#bundler_version}.

---

##### `cloudwatchConfiguration`<sup>Optional</sup> <a name="cloudwatchConfiguration" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.cloudwatchConfiguration"></a>

```typescript
public readonly cloudwatchConfiguration: OpsworksRailsAppLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

cloudwatch_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#cloudwatch_configuration OpsworksRailsAppLayer#cloudwatch_configuration}

---

##### `customConfigureRecipes`<sup>Optional</sup> <a name="customConfigureRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customConfigureRecipes"></a>

```typescript
public readonly customConfigureRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}.

---

##### `customDeployRecipes`<sup>Optional</sup> <a name="customDeployRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customDeployRecipes"></a>

```typescript
public readonly customDeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}.

---

##### `customInstanceProfileArn`<sup>Optional</sup> <a name="customInstanceProfileArn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customInstanceProfileArn"></a>

```typescript
public readonly customInstanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}.

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_json OpsworksRailsAppLayer#custom_json}.

---

##### `customSecurityGroupIds`<sup>Optional</sup> <a name="customSecurityGroupIds" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSecurityGroupIds"></a>

```typescript
public readonly customSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}.

---

##### `customSetupRecipes`<sup>Optional</sup> <a name="customSetupRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customSetupRecipes"></a>

```typescript
public readonly customSetupRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}.

---

##### `customShutdownRecipes`<sup>Optional</sup> <a name="customShutdownRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customShutdownRecipes"></a>

```typescript
public readonly customShutdownRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}.

---

##### `customUndeployRecipes`<sup>Optional</sup> <a name="customUndeployRecipes" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.customUndeployRecipes"></a>

```typescript
public readonly customUndeployRecipes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}.

---

##### `drainElbOnShutdown`<sup>Optional</sup> <a name="drainElbOnShutdown" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.drainElbOnShutdown"></a>

```typescript
public readonly drainElbOnShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}.

---

##### `ebsVolume`<sup>Optional</sup> <a name="ebsVolume" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.ebsVolume"></a>

```typescript
public readonly ebsVolume: IResolvable | OpsworksRailsAppLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]

ebs_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#ebs_volume OpsworksRailsAppLayer#ebs_volume}

---

##### `elasticLoadBalancer`<sup>Optional</sup> <a name="elasticLoadBalancer" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.elasticLoadBalancer"></a>

```typescript
public readonly elasticLoadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#id OpsworksRailsAppLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installUpdatesOnBoot`<sup>Optional</sup> <a name="installUpdatesOnBoot" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.installUpdatesOnBoot"></a>

```typescript
public readonly installUpdatesOnBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}.

---

##### `instanceShutdownTimeout`<sup>Optional</sup> <a name="instanceShutdownTimeout" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.instanceShutdownTimeout"></a>

```typescript
public readonly instanceShutdownTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}.

---

##### `manageBundler`<sup>Optional</sup> <a name="manageBundler" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.manageBundler"></a>

```typescript
public readonly manageBundler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#manage_bundler OpsworksRailsAppLayer#manage_bundler}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#name OpsworksRailsAppLayer#name}.

---

##### `passengerVersion`<sup>Optional</sup> <a name="passengerVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.passengerVersion"></a>

```typescript
public readonly passengerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#passenger_version OpsworksRailsAppLayer#passenger_version}.

---

##### `rubygemsVersion`<sup>Optional</sup> <a name="rubygemsVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubygemsVersion"></a>

```typescript
public readonly rubygemsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#rubygems_version OpsworksRailsAppLayer#rubygems_version}.

---

##### `rubyVersion`<sup>Optional</sup> <a name="rubyVersion" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.rubyVersion"></a>

```typescript
public readonly rubyVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#ruby_version OpsworksRailsAppLayer#ruby_version}.

---

##### `systemPackages`<sup>Optional</sup> <a name="systemPackages" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.systemPackages"></a>

```typescript
public readonly systemPackages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#system_packages OpsworksRailsAppLayer#system_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#tags OpsworksRailsAppLayer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#tags_all OpsworksRailsAppLayer#tags_all}.

---

##### `useEbsOptimizedInstances`<sup>Optional</sup> <a name="useEbsOptimizedInstances" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerConfig.property.useEbsOptimizedInstances"></a>

```typescript
public readonly useEbsOptimizedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}.

---

### OpsworksRailsAppLayerEbsVolume <a name="OpsworksRailsAppLayerEbsVolume" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

const opsworksRailsAppLayerEbsVolume: opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#mount_point OpsworksRailsAppLayer#mount_point}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#number_of_disks OpsworksRailsAppLayer#number_of_disks}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#size OpsworksRailsAppLayer#size}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#encrypted OpsworksRailsAppLayer#encrypted}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#iops OpsworksRailsAppLayer#iops}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.raidLevel">raidLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#raid_level OpsworksRailsAppLayer#raid_level}. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#type OpsworksRailsAppLayer#type}. |

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#mount_point OpsworksRailsAppLayer#mount_point}.

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#number_of_disks OpsworksRailsAppLayer#number_of_disks}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#size OpsworksRailsAppLayer#size}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#encrypted OpsworksRailsAppLayer#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#iops OpsworksRailsAppLayer#iops}.

---

##### `raidLevel`<sup>Optional</sup> <a name="raidLevel" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#raid_level OpsworksRailsAppLayer#raid_level}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_rails_app_layer#type OpsworksRailsAppLayer#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

new opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get"></a>

```typescript
public get(index: number): OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]

---


### OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference <a name="OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

new opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount">resetBatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration">resetBufferDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat">resetDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines">resetFileFingerprintLines</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition">resetInitialPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern">resetMultilineStartPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchCount` <a name="resetBatchCount" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchCount"></a>

```typescript
public resetBatchCount(): void
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBatchSize"></a>

```typescript
public resetBatchSize(): void
```

##### `resetBufferDuration` <a name="resetBufferDuration" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetBufferDuration"></a>

```typescript
public resetBufferDuration(): void
```

##### `resetDatetimeFormat` <a name="resetDatetimeFormat" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetDatetimeFormat"></a>

```typescript
public resetDatetimeFormat(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetFileFingerprintLines` <a name="resetFileFingerprintLines" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetFileFingerprintLines"></a>

```typescript
public resetFileFingerprintLines(): void
```

##### `resetInitialPosition` <a name="resetInitialPosition" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetInitialPosition"></a>

```typescript
public resetInitialPosition(): void
```

##### `resetMultilineStartPattern` <a name="resetMultilineStartPattern" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetMultilineStartPattern"></a>

```typescript
public resetMultilineStartPattern(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput">batchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput">bufferDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput">datetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput">fileFingerprintLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput">initialPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput">multilineStartPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount">batchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration">bufferDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat">datetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines">fileFingerprintLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition">initialPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern">multilineStartPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchCountInput`<sup>Optional</sup> <a name="batchCountInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCountInput"></a>

```typescript
public readonly batchCountInput: number;
```

- *Type:* number

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `bufferDurationInput`<sup>Optional</sup> <a name="bufferDurationInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDurationInput"></a>

```typescript
public readonly bufferDurationInput: number;
```

- *Type:* number

---

##### `datetimeFormatInput`<sup>Optional</sup> <a name="datetimeFormatInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormatInput"></a>

```typescript
public readonly datetimeFormatInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `fileFingerprintLinesInput`<sup>Optional</sup> <a name="fileFingerprintLinesInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLinesInput"></a>

```typescript
public readonly fileFingerprintLinesInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `initialPositionInput`<sup>Optional</sup> <a name="initialPositionInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPositionInput"></a>

```typescript
public readonly initialPositionInput: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `multilineStartPatternInput`<sup>Optional</sup> <a name="multilineStartPatternInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPatternInput"></a>

```typescript
public readonly multilineStartPatternInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `batchCount`<sup>Required</sup> <a name="batchCount" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchCount"></a>

```typescript
public readonly batchCount: number;
```

- *Type:* number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `bufferDuration`<sup>Required</sup> <a name="bufferDuration" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.bufferDuration"></a>

```typescript
public readonly bufferDuration: number;
```

- *Type:* number

---

##### `datetimeFormat`<sup>Required</sup> <a name="datetimeFormat" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.datetimeFormat"></a>

```typescript
public readonly datetimeFormat: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `fileFingerprintLines`<sup>Required</sup> <a name="fileFingerprintLines" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.fileFingerprintLines"></a>

```typescript
public readonly fileFingerprintLines: string;
```

- *Type:* string

---

##### `initialPosition`<sup>Required</sup> <a name="initialPosition" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.initialPosition"></a>

```typescript
public readonly initialPosition: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `multilineStartPattern`<sup>Required</sup> <a name="multilineStartPattern" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.multilineStartPattern"></a>

```typescript
public readonly multilineStartPattern: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksRailsAppLayerCloudwatchConfigurationLogStreams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>

---


### OpsworksRailsAppLayerCloudwatchConfigurationOutputReference <a name="OpsworksRailsAppLayerCloudwatchConfigurationOutputReference" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

new opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetLogStreams">resetLogStreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams"></a>

```typescript
public putLogStreams(value: IResolvable | OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.putLogStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogStreams` <a name="resetLogStreams" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.resetLogStreams"></a>

```typescript
public resetLogStreams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList">OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput">logStreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreams"></a>

```typescript
public readonly logStreams: OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList">OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.logStreamsInput"></a>

```typescript
public readonly logStreamsInput: IResolvable | OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationLogStreams">OpsworksRailsAppLayerCloudwatchConfigurationLogStreams</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksRailsAppLayerCloudwatchConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerCloudwatchConfiguration">OpsworksRailsAppLayerCloudwatchConfiguration</a>

---


### OpsworksRailsAppLayerEbsVolumeList <a name="OpsworksRailsAppLayerEbsVolumeList" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

new opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get"></a>

```typescript
public get(index: number): OpsworksRailsAppLayerEbsVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksRailsAppLayerEbsVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>[]

---


### OpsworksRailsAppLayerEbsVolumeOutputReference <a name="OpsworksRailsAppLayerEbsVolumeOutputReference" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer"></a>

```typescript
import { opsworksRailsAppLayer } from '@cdktf/aws-cdk'

new opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetRaidLevel">resetRaidLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetRaidLevel` <a name="resetRaidLevel" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetRaidLevel"></a>

```typescript
public resetRaidLevel(): void
```

##### `resetType` <a name="resetType" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevelInput">raidLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevel">raidLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisksInput"></a>

```typescript
public readonly numberOfDisksInput: number;
```

- *Type:* number

---

##### `raidLevelInput`<sup>Optional</sup> <a name="raidLevelInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevelInput"></a>

```typescript
public readonly raidLevelInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.numberOfDisks"></a>

```typescript
public readonly numberOfDisks: number;
```

- *Type:* number

---

##### `raidLevel`<sup>Required</sup> <a name="raidLevel" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.raidLevel"></a>

```typescript
public readonly raidLevel: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksRailsAppLayerEbsVolume;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksRailsAppLayer.OpsworksRailsAppLayerEbsVolume">OpsworksRailsAppLayerEbsVolume</a>

---



