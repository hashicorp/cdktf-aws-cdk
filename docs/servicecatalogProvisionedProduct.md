# `servicecatalogProvisionedProduct` Submodule <a name="`servicecatalogProvisionedProduct` Submodule" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProvisionedProduct <a name="ServicecatalogProvisionedProduct" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product aws_servicecatalog_provisioned_product}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

new servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct(scope: Construct, id: string, config: ServicecatalogProvisionedProductConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig">ServicecatalogProvisionedProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig">ServicecatalogProvisionedProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters">putProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences">putStackSetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetIgnoreErrors">resetIgnoreErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetNotificationArns">resetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathId">resetPathId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathName">resetPathName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductId">resetProductId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductName">resetProductName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactId">resetProvisioningArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactName">resetProvisioningArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningParameters">resetProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetRetainPhysicalResources">resetRetainPhysicalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetStackSetProvisioningPreferences">resetStackSetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProvisioningParameters` <a name="putProvisioningParameters" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters"></a>

```typescript
public putProvisioningParameters(value: IResolvable | ServicecatalogProvisionedProductProvisioningParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putProvisioningParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>[]

---

##### `putStackSetProvisioningPreferences` <a name="putStackSetProvisioningPreferences" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences"></a>

```typescript
public putStackSetProvisioningPreferences(value: ServicecatalogProvisionedProductStackSetProvisioningPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putStackSetProvisioningPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicecatalogProvisionedProductTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreErrors` <a name="resetIgnoreErrors" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetIgnoreErrors"></a>

```typescript
public resetIgnoreErrors(): void
```

##### `resetNotificationArns` <a name="resetNotificationArns" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetNotificationArns"></a>

```typescript
public resetNotificationArns(): void
```

##### `resetPathId` <a name="resetPathId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathId"></a>

```typescript
public resetPathId(): void
```

##### `resetPathName` <a name="resetPathName" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetPathName"></a>

```typescript
public resetPathName(): void
```

##### `resetProductId` <a name="resetProductId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductId"></a>

```typescript
public resetProductId(): void
```

##### `resetProductName` <a name="resetProductName" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProductName"></a>

```typescript
public resetProductName(): void
```

##### `resetProvisioningArtifactId` <a name="resetProvisioningArtifactId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactId"></a>

```typescript
public resetProvisioningArtifactId(): void
```

##### `resetProvisioningArtifactName` <a name="resetProvisioningArtifactName" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningArtifactName"></a>

```typescript
public resetProvisioningArtifactName(): void
```

##### `resetProvisioningParameters` <a name="resetProvisioningParameters" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetProvisioningParameters"></a>

```typescript
public resetProvisioningParameters(): void
```

##### `resetRetainPhysicalResources` <a name="resetRetainPhysicalResources" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetRetainPhysicalResources"></a>

```typescript
public resetRetainPhysicalResources(): void
```

##### `resetStackSetProvisioningPreferences` <a name="resetStackSetProvisioningPreferences" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetStackSetProvisioningPreferences"></a>

```typescript
public resetStackSetProvisioningPreferences(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicecatalogProvisionedProduct resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.generateConfigForImport"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServicecatalogProvisionedProduct resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogProvisionedProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogProvisionedProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicecatalogProvisionedProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cloudwatchDashboardNames">cloudwatchDashboardNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastProvisioningRecordId">lastProvisioningRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastRecordId">lastRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastSuccessfulProvisioningRecordId">lastSuccessfulProvisioningRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.launchRoleArn">launchRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParameters">provisioningParameters</a></code> | <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList">ServicecatalogProvisionedProductProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferences">stackSetProvisioningPreferences</a></code> | <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference">ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference">ServicecatalogProvisionedProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrorsInput">ignoreErrorsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArnsInput">notificationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathIdInput">pathIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathNameInput">pathNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productNameInput">productNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactIdInput">provisioningArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactNameInput">provisioningArtifactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParametersInput">provisioningParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResourcesInput">retainPhysicalResourcesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferencesInput">stackSetProvisioningPreferencesInput</a></code> | <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathId">pathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathName">pathName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productName">productName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactId">provisioningArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactName">provisioningArtifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResources">retainPhysicalResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchDashboardNames`<sup>Required</sup> <a name="cloudwatchDashboardNames" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.cloudwatchDashboardNames"></a>

```typescript
public readonly cloudwatchDashboardNames: string[];
```

- *Type:* string[]

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `lastProvisioningRecordId`<sup>Required</sup> <a name="lastProvisioningRecordId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastProvisioningRecordId"></a>

```typescript
public readonly lastProvisioningRecordId: string;
```

- *Type:* string

---

##### `lastRecordId`<sup>Required</sup> <a name="lastRecordId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastRecordId"></a>

```typescript
public readonly lastRecordId: string;
```

- *Type:* string

---

##### `lastSuccessfulProvisioningRecordId`<sup>Required</sup> <a name="lastSuccessfulProvisioningRecordId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.lastSuccessfulProvisioningRecordId"></a>

```typescript
public readonly lastSuccessfulProvisioningRecordId: string;
```

- *Type:* string

---

##### `launchRoleArn`<sup>Required</sup> <a name="launchRoleArn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.launchRoleArn"></a>

```typescript
public readonly launchRoleArn: string;
```

- *Type:* string

---

##### `provisioningParameters`<sup>Required</sup> <a name="provisioningParameters" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParameters"></a>

```typescript
public readonly provisioningParameters: ServicecatalogProvisionedProductProvisioningParametersList;
```

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList">ServicecatalogProvisionedProductProvisioningParametersList</a>

---

##### `stackSetProvisioningPreferences`<sup>Required</sup> <a name="stackSetProvisioningPreferences" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferences"></a>

```typescript
public readonly stackSetProvisioningPreferences: ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference">ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogProvisionedProductTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference">ServicecatalogProvisionedProductTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreErrorsInput`<sup>Optional</sup> <a name="ignoreErrorsInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrorsInput"></a>

```typescript
public readonly ignoreErrorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationArnsInput`<sup>Optional</sup> <a name="notificationArnsInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArnsInput"></a>

```typescript
public readonly notificationArnsInput: string[];
```

- *Type:* string[]

---

##### `pathIdInput`<sup>Optional</sup> <a name="pathIdInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathIdInput"></a>

```typescript
public readonly pathIdInput: string;
```

- *Type:* string

---

##### `pathNameInput`<sup>Optional</sup> <a name="pathNameInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathNameInput"></a>

```typescript
public readonly pathNameInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `productNameInput`<sup>Optional</sup> <a name="productNameInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productNameInput"></a>

```typescript
public readonly productNameInput: string;
```

- *Type:* string

---

##### `provisioningArtifactIdInput`<sup>Optional</sup> <a name="provisioningArtifactIdInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactIdInput"></a>

```typescript
public readonly provisioningArtifactIdInput: string;
```

- *Type:* string

---

##### `provisioningArtifactNameInput`<sup>Optional</sup> <a name="provisioningArtifactNameInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactNameInput"></a>

```typescript
public readonly provisioningArtifactNameInput: string;
```

- *Type:* string

---

##### `provisioningParametersInput`<sup>Optional</sup> <a name="provisioningParametersInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningParametersInput"></a>

```typescript
public readonly provisioningParametersInput: IResolvable | ServicecatalogProvisionedProductProvisioningParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>[]

---

##### `retainPhysicalResourcesInput`<sup>Optional</sup> <a name="retainPhysicalResourcesInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResourcesInput"></a>

```typescript
public readonly retainPhysicalResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stackSetProvisioningPreferencesInput`<sup>Optional</sup> <a name="stackSetProvisioningPreferencesInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.stackSetProvisioningPreferencesInput"></a>

```typescript
public readonly stackSetProvisioningPreferencesInput: ServicecatalogProvisionedProductStackSetProvisioningPreferences;
```

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServicecatalogProvisionedProductTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreErrors`<sup>Required</sup> <a name="ignoreErrors" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

---

##### `pathId`<sup>Required</sup> <a name="pathId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathId"></a>

```typescript
public readonly pathId: string;
```

- *Type:* string

---

##### `pathName`<sup>Required</sup> <a name="pathName" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.pathName"></a>

```typescript
public readonly pathName: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="provisioningArtifactId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactId"></a>

```typescript
public readonly provisioningArtifactId: string;
```

- *Type:* string

---

##### `provisioningArtifactName`<sup>Required</sup> <a name="provisioningArtifactName" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.provisioningArtifactName"></a>

```typescript
public readonly provisioningArtifactName: string;
```

- *Type:* string

---

##### `retainPhysicalResources`<sup>Required</sup> <a name="retainPhysicalResources" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.retainPhysicalResources"></a>

```typescript
public readonly retainPhysicalResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProduct.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProvisionedProductConfig <a name="ServicecatalogProvisionedProductConfig" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.Initializer"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

const servicecatalogProvisionedProductConfig: servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#name ServicecatalogProvisionedProduct#name}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#accept_language ServicecatalogProvisionedProduct#accept_language}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#id ServicecatalogProvisionedProduct#id}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#notification_arns ServicecatalogProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathId">pathId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#path_id ServicecatalogProvisionedProduct#path_id}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathName">pathName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#path_name ServicecatalogProvisionedProduct#path_name}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#product_id ServicecatalogProvisionedProduct#product_id}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productName">productName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#product_name ServicecatalogProvisionedProduct#product_name}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactId">provisioningArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactName">provisioningArtifactName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningParameters">provisioningParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>[]</code> | provisioning_parameters block. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.retainPhysicalResources">retainPhysicalResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.stackSetProvisioningPreferences">stackSetProvisioningPreferences</a></code> | <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | stack_set_provisioning_preferences block. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#tags ServicecatalogProvisionedProduct#tags}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#tags_all ServicecatalogProvisionedProduct#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#name ServicecatalogProvisionedProduct#name}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#accept_language ServicecatalogProvisionedProduct#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#id ServicecatalogProvisionedProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}.

---

##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#notification_arns ServicecatalogProvisionedProduct#notification_arns}.

---

##### `pathId`<sup>Optional</sup> <a name="pathId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathId"></a>

```typescript
public readonly pathId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#path_id ServicecatalogProvisionedProduct#path_id}.

---

##### `pathName`<sup>Optional</sup> <a name="pathName" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.pathName"></a>

```typescript
public readonly pathName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#path_name ServicecatalogProvisionedProduct#path_name}.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#product_id ServicecatalogProvisionedProduct#product_id}.

---

##### `productName`<sup>Optional</sup> <a name="productName" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#product_name ServicecatalogProvisionedProduct#product_name}.

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="provisioningArtifactId" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactId"></a>

```typescript
public readonly provisioningArtifactId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}.

---

##### `provisioningArtifactName`<sup>Optional</sup> <a name="provisioningArtifactName" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningArtifactName"></a>

```typescript
public readonly provisioningArtifactName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}.

---

##### `provisioningParameters`<sup>Optional</sup> <a name="provisioningParameters" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.provisioningParameters"></a>

```typescript
public readonly provisioningParameters: IResolvable | ServicecatalogProvisionedProductProvisioningParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>[]

provisioning_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#provisioning_parameters ServicecatalogProvisionedProduct#provisioning_parameters}

---

##### `retainPhysicalResources`<sup>Optional</sup> <a name="retainPhysicalResources" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.retainPhysicalResources"></a>

```typescript
public readonly retainPhysicalResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}.

---

##### `stackSetProvisioningPreferences`<sup>Optional</sup> <a name="stackSetProvisioningPreferences" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.stackSetProvisioningPreferences"></a>

```typescript
public readonly stackSetProvisioningPreferences: ServicecatalogProvisionedProductStackSetProvisioningPreferences;
```

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

stack_set_provisioning_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#stack_set_provisioning_preferences ServicecatalogProvisionedProduct#stack_set_provisioning_preferences}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#tags ServicecatalogProvisionedProduct#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#tags_all ServicecatalogProvisionedProduct#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogProvisionedProductTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#timeouts ServicecatalogProvisionedProduct#timeouts}

---

### ServicecatalogProvisionedProductProvisioningParameters <a name="ServicecatalogProvisionedProductProvisioningParameters" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.Initializer"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

const servicecatalogProvisionedProductProvisioningParameters: servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#key ServicecatalogProvisionedProduct#key}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.usePreviousValue">usePreviousValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#value ServicecatalogProvisionedProduct#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#key ServicecatalogProvisionedProduct#key}.

---

##### `usePreviousValue`<sup>Optional</sup> <a name="usePreviousValue" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.usePreviousValue"></a>

```typescript
public readonly usePreviousValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#value ServicecatalogProvisionedProduct#value}.

---

### ServicecatalogProvisionedProductStackSetProvisioningPreferences <a name="ServicecatalogProvisionedProductStackSetProvisioningPreferences" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.Initializer"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

const servicecatalogProvisionedProductStackSetProvisioningPreferences: servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.accounts">accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#accounts ServicecatalogProvisionedProduct#accounts}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureToleranceCount">failureToleranceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureTolerancePercentage">failureTolerancePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyCount">maxConcurrencyCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyPercentage">maxConcurrencyPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#regions ServicecatalogProvisionedProduct#regions}. |

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#accounts ServicecatalogProvisionedProduct#accounts}.

---

##### `failureToleranceCount`<sup>Optional</sup> <a name="failureToleranceCount" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureToleranceCount"></a>

```typescript
public readonly failureToleranceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}.

---

##### `failureTolerancePercentage`<sup>Optional</sup> <a name="failureTolerancePercentage" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.failureTolerancePercentage"></a>

```typescript
public readonly failureTolerancePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}.

---

##### `maxConcurrencyCount`<sup>Optional</sup> <a name="maxConcurrencyCount" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyCount"></a>

```typescript
public readonly maxConcurrencyCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}.

---

##### `maxConcurrencyPercentage`<sup>Optional</sup> <a name="maxConcurrencyPercentage" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.maxConcurrencyPercentage"></a>

```typescript
public readonly maxConcurrencyPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#regions ServicecatalogProvisionedProduct#regions}.

---

### ServicecatalogProvisionedProductTimeouts <a name="ServicecatalogProvisionedProductTimeouts" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.Initializer"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

const servicecatalogProvisionedProductTimeouts: servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#create ServicecatalogProvisionedProduct#create}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#delete ServicecatalogProvisionedProduct#delete}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#update ServicecatalogProvisionedProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#create ServicecatalogProvisionedProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#delete ServicecatalogProvisionedProduct#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioned_product#update ServicecatalogProvisionedProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProvisionedProductProvisioningParametersList <a name="ServicecatalogProvisionedProductProvisioningParametersList" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

new servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get"></a>

```typescript
public get(index: number): ServicecatalogProvisionedProductProvisioningParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogProvisionedProductProvisioningParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>[]

---


### ServicecatalogProvisionedProductProvisioningParametersOutputReference <a name="ServicecatalogProvisionedProductProvisioningParametersOutputReference" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

new servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetUsePreviousValue">resetUsePreviousValue</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUsePreviousValue` <a name="resetUsePreviousValue" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetUsePreviousValue"></a>

```typescript
public resetUsePreviousValue(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValueInput">usePreviousValueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValue">usePreviousValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `usePreviousValueInput`<sup>Optional</sup> <a name="usePreviousValueInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValueInput"></a>

```typescript
public readonly usePreviousValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `usePreviousValue`<sup>Required</sup> <a name="usePreviousValue" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.usePreviousValue"></a>

```typescript
public readonly usePreviousValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogProvisionedProductProvisioningParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductProvisioningParameters">ServicecatalogProvisionedProductProvisioningParameters</a>

---


### ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference <a name="ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

new servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetAccounts">resetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureToleranceCount">resetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureTolerancePercentage">resetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyCount">resetMaxConcurrencyCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyPercentage">resetMaxConcurrencyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetRegions">resetRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccounts` <a name="resetAccounts" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetAccounts"></a>

```typescript
public resetAccounts(): void
```

##### `resetFailureToleranceCount` <a name="resetFailureToleranceCount" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureToleranceCount"></a>

```typescript
public resetFailureToleranceCount(): void
```

##### `resetFailureTolerancePercentage` <a name="resetFailureTolerancePercentage" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```typescript
public resetFailureTolerancePercentage(): void
```

##### `resetMaxConcurrencyCount` <a name="resetMaxConcurrencyCount" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyCount"></a>

```typescript
public resetMaxConcurrencyCount(): void
```

##### `resetMaxConcurrencyPercentage` <a name="resetMaxConcurrencyPercentage" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetMaxConcurrencyPercentage"></a>

```typescript
public resetMaxConcurrencyPercentage(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accountsInput">accountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCountInput">failureToleranceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentageInput">failureTolerancePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCountInput">maxConcurrencyCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentageInput">maxConcurrencyPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCount">failureToleranceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentage">failureTolerancePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCount">maxConcurrencyCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentage">maxConcurrencyPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accountsInput"></a>

```typescript
public readonly accountsInput: string[];
```

- *Type:* string[]

---

##### `failureToleranceCountInput`<sup>Optional</sup> <a name="failureToleranceCountInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCountInput"></a>

```typescript
public readonly failureToleranceCountInput: number;
```

- *Type:* number

---

##### `failureTolerancePercentageInput`<sup>Optional</sup> <a name="failureTolerancePercentageInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```typescript
public readonly failureTolerancePercentageInput: number;
```

- *Type:* number

---

##### `maxConcurrencyCountInput`<sup>Optional</sup> <a name="maxConcurrencyCountInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCountInput"></a>

```typescript
public readonly maxConcurrencyCountInput: number;
```

- *Type:* number

---

##### `maxConcurrencyPercentageInput`<sup>Optional</sup> <a name="maxConcurrencyPercentageInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentageInput"></a>

```typescript
public readonly maxConcurrencyPercentageInput: number;
```

- *Type:* number

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `failureToleranceCount`<sup>Required</sup> <a name="failureToleranceCount" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureToleranceCount"></a>

```typescript
public readonly failureToleranceCount: number;
```

- *Type:* number

---

##### `failureTolerancePercentage`<sup>Required</sup> <a name="failureTolerancePercentage" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.failureTolerancePercentage"></a>

```typescript
public readonly failureTolerancePercentage: number;
```

- *Type:* number

---

##### `maxConcurrencyCount`<sup>Required</sup> <a name="maxConcurrencyCount" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyCount"></a>

```typescript
public readonly maxConcurrencyCount: number;
```

- *Type:* number

---

##### `maxConcurrencyPercentage`<sup>Required</sup> <a name="maxConcurrencyPercentage" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.maxConcurrencyPercentage"></a>

```typescript
public readonly maxConcurrencyPercentage: number;
```

- *Type:* number

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicecatalogProvisionedProductStackSetProvisioningPreferences;
```

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductStackSetProvisioningPreferences">ServicecatalogProvisionedProductStackSetProvisioningPreferences</a>

---


### ServicecatalogProvisionedProductTimeoutsOutputReference <a name="ServicecatalogProvisionedProductTimeoutsOutputReference" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicecatalogProvisionedProduct } from '@cdktf/aws-cdk'

new servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogProvisionedProductTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.servicecatalogProvisionedProduct.ServicecatalogProvisionedProductTimeouts">ServicecatalogProvisionedProductTimeouts</a>

---



