# `opsworksStack` Submodule <a name="`opsworksStack` Submodule" id="@cdktf/aws-cdk.opsworksStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksStack <a name="OpsworksStack" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack aws_opsworks_stack}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.Initializer"></a>

```typescript
import { opsworksStack } from '@cdktf/aws-cdk'

new opsworksStack.OpsworksStack(scope: Construct, id: string, config: OpsworksStackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig">OpsworksStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig">OpsworksStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.putCustomCookbooksSource">putCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetAgentVersion">resetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetBerkshelfVersion">resetBerkshelfVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetColor">resetColor</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetConfigurationManagerName">resetConfigurationManagerName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetConfigurationManagerVersion">resetConfigurationManagerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetCustomCookbooksSource">resetCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetCustomJson">resetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone">resetDefaultAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetDefaultOs">resetDefaultOs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetDefaultRootDeviceType">resetDefaultRootDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetDefaultSshKeyName">resetDefaultSshKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetDefaultSubnetId">resetDefaultSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetHostnameTheme">resetHostnameTheme</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetManageBerkshelf">resetManageBerkshelf</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetUseCustomCookbooks">resetUseCustomCookbooks</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups">resetUseOpsworksSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomCookbooksSource` <a name="putCustomCookbooksSource" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.putCustomCookbooksSource"></a>

```typescript
public putCustomCookbooksSource(value: IResolvable | OpsworksStackCustomCookbooksSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.putCustomCookbooksSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>[]

---

##### `resetAgentVersion` <a name="resetAgentVersion" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetAgentVersion"></a>

```typescript
public resetAgentVersion(): void
```

##### `resetBerkshelfVersion` <a name="resetBerkshelfVersion" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetBerkshelfVersion"></a>

```typescript
public resetBerkshelfVersion(): void
```

##### `resetColor` <a name="resetColor" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetColor"></a>

```typescript
public resetColor(): void
```

##### `resetConfigurationManagerName` <a name="resetConfigurationManagerName" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetConfigurationManagerName"></a>

```typescript
public resetConfigurationManagerName(): void
```

##### `resetConfigurationManagerVersion` <a name="resetConfigurationManagerVersion" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetConfigurationManagerVersion"></a>

```typescript
public resetConfigurationManagerVersion(): void
```

##### `resetCustomCookbooksSource` <a name="resetCustomCookbooksSource" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetCustomCookbooksSource"></a>

```typescript
public resetCustomCookbooksSource(): void
```

##### `resetCustomJson` <a name="resetCustomJson" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetCustomJson"></a>

```typescript
public resetCustomJson(): void
```

##### `resetDefaultAvailabilityZone` <a name="resetDefaultAvailabilityZone" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone"></a>

```typescript
public resetDefaultAvailabilityZone(): void
```

##### `resetDefaultOs` <a name="resetDefaultOs" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetDefaultOs"></a>

```typescript
public resetDefaultOs(): void
```

##### `resetDefaultRootDeviceType` <a name="resetDefaultRootDeviceType" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetDefaultRootDeviceType"></a>

```typescript
public resetDefaultRootDeviceType(): void
```

##### `resetDefaultSshKeyName` <a name="resetDefaultSshKeyName" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetDefaultSshKeyName"></a>

```typescript
public resetDefaultSshKeyName(): void
```

##### `resetDefaultSubnetId` <a name="resetDefaultSubnetId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetDefaultSubnetId"></a>

```typescript
public resetDefaultSubnetId(): void
```

##### `resetHostnameTheme` <a name="resetHostnameTheme" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetHostnameTheme"></a>

```typescript
public resetHostnameTheme(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManageBerkshelf` <a name="resetManageBerkshelf" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetManageBerkshelf"></a>

```typescript
public resetManageBerkshelf(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUseCustomCookbooks` <a name="resetUseCustomCookbooks" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetUseCustomCookbooks"></a>

```typescript
public resetUseCustomCookbooks(): void
```

##### `resetUseOpsworksSecurityGroups` <a name="resetUseOpsworksSecurityGroups" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups"></a>

```typescript
public resetUseOpsworksSecurityGroups(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsworksStack resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.isConstruct"></a>

```typescript
import { opsworksStack } from '@cdktf/aws-cdk'

opsworksStack.OpsworksStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.isTerraformElement"></a>

```typescript
import { opsworksStack } from '@cdktf/aws-cdk'

opsworksStack.OpsworksStack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.isTerraformResource"></a>

```typescript
import { opsworksStack } from '@cdktf/aws-cdk'

opsworksStack.OpsworksStack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.generateConfigForImport"></a>

```typescript
import { opsworksStack } from '@cdktf/aws-cdk'

opsworksStack.OpsworksStack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpsworksStack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsworksStack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsworksStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsworksStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.customCookbooksSource">customCookbooksSource</a></code> | <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList">OpsworksStackCustomCookbooksSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.stackEndpoint">stackEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.agentVersionInput">agentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.berkshelfVersionInput">berkshelfVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.colorInput">colorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.configurationManagerNameInput">configurationManagerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.configurationManagerVersionInput">configurationManagerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.customCookbooksSourceInput">customCookbooksSourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.customJsonInput">customJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput">defaultAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput">defaultInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultOsInput">defaultOsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput">defaultRootDeviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput">defaultSshKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultSubnetIdInput">defaultSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.hostnameThemeInput">hostnameThemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.manageBerkshelfInput">manageBerkshelfInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.useCustomCookbooksInput">useCustomCookbooksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput">useOpsworksSecurityGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.berkshelfVersion">berkshelfVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.color">color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.configurationManagerName">configurationManagerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.configurationManagerVersion">configurationManagerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.customJson">customJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultAvailabilityZone">defaultAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn">defaultInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultOs">defaultOs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultRootDeviceType">defaultRootDeviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultSshKeyName">defaultSshKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultSubnetId">defaultSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.hostnameTheme">hostnameTheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.manageBerkshelf">manageBerkshelf</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.useCustomCookbooks">useCustomCookbooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups">useOpsworksSecurityGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `customCookbooksSource`<sup>Required</sup> <a name="customCookbooksSource" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.customCookbooksSource"></a>

```typescript
public readonly customCookbooksSource: OpsworksStackCustomCookbooksSourceList;
```

- *Type:* <a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList">OpsworksStackCustomCookbooksSourceList</a>

---

##### `stackEndpoint`<sup>Required</sup> <a name="stackEndpoint" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.stackEndpoint"></a>

```typescript
public readonly stackEndpoint: string;
```

- *Type:* string

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.agentVersionInput"></a>

```typescript
public readonly agentVersionInput: string;
```

- *Type:* string

---

##### `berkshelfVersionInput`<sup>Optional</sup> <a name="berkshelfVersionInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.berkshelfVersionInput"></a>

```typescript
public readonly berkshelfVersionInput: string;
```

- *Type:* string

---

##### `colorInput`<sup>Optional</sup> <a name="colorInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.colorInput"></a>

```typescript
public readonly colorInput: string;
```

- *Type:* string

---

##### `configurationManagerNameInput`<sup>Optional</sup> <a name="configurationManagerNameInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.configurationManagerNameInput"></a>

```typescript
public readonly configurationManagerNameInput: string;
```

- *Type:* string

---

##### `configurationManagerVersionInput`<sup>Optional</sup> <a name="configurationManagerVersionInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.configurationManagerVersionInput"></a>

```typescript
public readonly configurationManagerVersionInput: string;
```

- *Type:* string

---

##### `customCookbooksSourceInput`<sup>Optional</sup> <a name="customCookbooksSourceInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.customCookbooksSourceInput"></a>

```typescript
public readonly customCookbooksSourceInput: IResolvable | OpsworksStackCustomCookbooksSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>[]

---

##### `customJsonInput`<sup>Optional</sup> <a name="customJsonInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.customJsonInput"></a>

```typescript
public readonly customJsonInput: string;
```

- *Type:* string

---

##### `defaultAvailabilityZoneInput`<sup>Optional</sup> <a name="defaultAvailabilityZoneInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput"></a>

```typescript
public readonly defaultAvailabilityZoneInput: string;
```

- *Type:* string

---

##### `defaultInstanceProfileArnInput`<sup>Optional</sup> <a name="defaultInstanceProfileArnInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput"></a>

```typescript
public readonly defaultInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `defaultOsInput`<sup>Optional</sup> <a name="defaultOsInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultOsInput"></a>

```typescript
public readonly defaultOsInput: string;
```

- *Type:* string

---

##### `defaultRootDeviceTypeInput`<sup>Optional</sup> <a name="defaultRootDeviceTypeInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput"></a>

```typescript
public readonly defaultRootDeviceTypeInput: string;
```

- *Type:* string

---

##### `defaultSshKeyNameInput`<sup>Optional</sup> <a name="defaultSshKeyNameInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput"></a>

```typescript
public readonly defaultSshKeyNameInput: string;
```

- *Type:* string

---

##### `defaultSubnetIdInput`<sup>Optional</sup> <a name="defaultSubnetIdInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultSubnetIdInput"></a>

```typescript
public readonly defaultSubnetIdInput: string;
```

- *Type:* string

---

##### `hostnameThemeInput`<sup>Optional</sup> <a name="hostnameThemeInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.hostnameThemeInput"></a>

```typescript
public readonly hostnameThemeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `manageBerkshelfInput`<sup>Optional</sup> <a name="manageBerkshelfInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.manageBerkshelfInput"></a>

```typescript
public readonly manageBerkshelfInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.serviceRoleArnInput"></a>

```typescript
public readonly serviceRoleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useCustomCookbooksInput`<sup>Optional</sup> <a name="useCustomCookbooksInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.useCustomCookbooksInput"></a>

```typescript
public readonly useCustomCookbooksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useOpsworksSecurityGroupsInput`<sup>Optional</sup> <a name="useOpsworksSecurityGroupsInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput"></a>

```typescript
public readonly useOpsworksSecurityGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `berkshelfVersion`<sup>Required</sup> <a name="berkshelfVersion" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.berkshelfVersion"></a>

```typescript
public readonly berkshelfVersion: string;
```

- *Type:* string

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

---

##### `configurationManagerName`<sup>Required</sup> <a name="configurationManagerName" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.configurationManagerName"></a>

```typescript
public readonly configurationManagerName: string;
```

- *Type:* string

---

##### `configurationManagerVersion`<sup>Required</sup> <a name="configurationManagerVersion" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.configurationManagerVersion"></a>

```typescript
public readonly configurationManagerVersion: string;
```

- *Type:* string

---

##### `customJson`<sup>Required</sup> <a name="customJson" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

---

##### `defaultAvailabilityZone`<sup>Required</sup> <a name="defaultAvailabilityZone" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultAvailabilityZone"></a>

```typescript
public readonly defaultAvailabilityZone: string;
```

- *Type:* string

---

##### `defaultInstanceProfileArn`<sup>Required</sup> <a name="defaultInstanceProfileArn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn"></a>

```typescript
public readonly defaultInstanceProfileArn: string;
```

- *Type:* string

---

##### `defaultOs`<sup>Required</sup> <a name="defaultOs" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultOs"></a>

```typescript
public readonly defaultOs: string;
```

- *Type:* string

---

##### `defaultRootDeviceType`<sup>Required</sup> <a name="defaultRootDeviceType" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultRootDeviceType"></a>

```typescript
public readonly defaultRootDeviceType: string;
```

- *Type:* string

---

##### `defaultSshKeyName`<sup>Required</sup> <a name="defaultSshKeyName" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultSshKeyName"></a>

```typescript
public readonly defaultSshKeyName: string;
```

- *Type:* string

---

##### `defaultSubnetId`<sup>Required</sup> <a name="defaultSubnetId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.defaultSubnetId"></a>

```typescript
public readonly defaultSubnetId: string;
```

- *Type:* string

---

##### `hostnameTheme`<sup>Required</sup> <a name="hostnameTheme" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.hostnameTheme"></a>

```typescript
public readonly hostnameTheme: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `manageBerkshelf`<sup>Required</sup> <a name="manageBerkshelf" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.manageBerkshelf"></a>

```typescript
public readonly manageBerkshelf: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `useCustomCookbooks`<sup>Required</sup> <a name="useCustomCookbooks" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.useCustomCookbooks"></a>

```typescript
public readonly useCustomCookbooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useOpsworksSecurityGroups`<sup>Required</sup> <a name="useOpsworksSecurityGroups" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups"></a>

```typescript
public readonly useOpsworksSecurityGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.opsworksStack.OpsworksStack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksStackConfig <a name="OpsworksStackConfig" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.Initializer"></a>

```typescript
import { opsworksStack } from '@cdktf/aws-cdk'

const opsworksStackConfig: opsworksStack.OpsworksStackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn">defaultInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#name OpsworksStack#name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#region OpsworksStack#region}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.agentVersion">agentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#agent_version OpsworksStack#agent_version}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.berkshelfVersion">berkshelfVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.color">color</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#color OpsworksStack#color}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.configurationManagerName">configurationManagerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion">configurationManagerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.customCookbooksSource">customCookbooksSource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>[]</code> | custom_cookbooks_source block. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.customJson">customJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#custom_json OpsworksStack#custom_json}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone">defaultAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultOs">defaultOs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_os OpsworksStack#default_os}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType">defaultRootDeviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName">defaultSshKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultSubnetId">defaultSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.hostnameTheme">hostnameTheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#id OpsworksStack#id}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.manageBerkshelf">manageBerkshelf</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#tags OpsworksStack#tags}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#tags_all OpsworksStack#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks">useCustomCookbooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups">useOpsworksSecurityGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#vpc_id OpsworksStack#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultInstanceProfileArn`<sup>Required</sup> <a name="defaultInstanceProfileArn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn"></a>

```typescript
public readonly defaultInstanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#name OpsworksStack#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#region OpsworksStack#region}.

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#agent_version OpsworksStack#agent_version}.

---

##### `berkshelfVersion`<sup>Optional</sup> <a name="berkshelfVersion" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.berkshelfVersion"></a>

```typescript
public readonly berkshelfVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}.

---

##### `color`<sup>Optional</sup> <a name="color" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#color OpsworksStack#color}.

---

##### `configurationManagerName`<sup>Optional</sup> <a name="configurationManagerName" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.configurationManagerName"></a>

```typescript
public readonly configurationManagerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}.

---

##### `configurationManagerVersion`<sup>Optional</sup> <a name="configurationManagerVersion" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion"></a>

```typescript
public readonly configurationManagerVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}.

---

##### `customCookbooksSource`<sup>Optional</sup> <a name="customCookbooksSource" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.customCookbooksSource"></a>

```typescript
public readonly customCookbooksSource: IResolvable | OpsworksStackCustomCookbooksSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>[]

custom_cookbooks_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}

---

##### `customJson`<sup>Optional</sup> <a name="customJson" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.customJson"></a>

```typescript
public readonly customJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#custom_json OpsworksStack#custom_json}.

---

##### `defaultAvailabilityZone`<sup>Optional</sup> <a name="defaultAvailabilityZone" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone"></a>

```typescript
public readonly defaultAvailabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}.

---

##### `defaultOs`<sup>Optional</sup> <a name="defaultOs" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultOs"></a>

```typescript
public readonly defaultOs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_os OpsworksStack#default_os}.

---

##### `defaultRootDeviceType`<sup>Optional</sup> <a name="defaultRootDeviceType" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType"></a>

```typescript
public readonly defaultRootDeviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}.

---

##### `defaultSshKeyName`<sup>Optional</sup> <a name="defaultSshKeyName" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName"></a>

```typescript
public readonly defaultSshKeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}.

---

##### `defaultSubnetId`<sup>Optional</sup> <a name="defaultSubnetId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.defaultSubnetId"></a>

```typescript
public readonly defaultSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}.

---

##### `hostnameTheme`<sup>Optional</sup> <a name="hostnameTheme" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.hostnameTheme"></a>

```typescript
public readonly hostnameTheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#id OpsworksStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manageBerkshelf`<sup>Optional</sup> <a name="manageBerkshelf" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.manageBerkshelf"></a>

```typescript
public readonly manageBerkshelf: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#tags OpsworksStack#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#tags_all OpsworksStack#tags_all}.

---

##### `useCustomCookbooks`<sup>Optional</sup> <a name="useCustomCookbooks" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks"></a>

```typescript
public readonly useCustomCookbooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}.

---

##### `useOpsworksSecurityGroups`<sup>Optional</sup> <a name="useOpsworksSecurityGroups" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups"></a>

```typescript
public readonly useOpsworksSecurityGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#vpc_id OpsworksStack#vpc_id}.

---

### OpsworksStackCustomCookbooksSource <a name="OpsworksStackCustomCookbooksSource" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.Initializer"></a>

```typescript
import { opsworksStack } from '@cdktf/aws-cdk'

const opsworksStackCustomCookbooksSource: opsworksStack.OpsworksStackCustomCookbooksSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#type OpsworksStack#type}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#url OpsworksStack#url}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#password OpsworksStack#password}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision">revision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#revision OpsworksStack#revision}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey">sshKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#ssh_key OpsworksStack#ssh_key}. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#username OpsworksStack#username}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#type OpsworksStack#type}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#url OpsworksStack#url}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#password OpsworksStack#password}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#revision OpsworksStack#revision}.

---

##### `sshKey`<sup>Optional</sup> <a name="sshKey" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#ssh_key OpsworksStack#ssh_key}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/opsworks_stack#username OpsworksStack#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksStackCustomCookbooksSourceList <a name="OpsworksStackCustomCookbooksSourceList" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.Initializer"></a>

```typescript
import { opsworksStack } from '@cdktf/aws-cdk'

new opsworksStack.OpsworksStackCustomCookbooksSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.get"></a>

```typescript
public get(index: number): OpsworksStackCustomCookbooksSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksStackCustomCookbooksSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>[]

---


### OpsworksStackCustomCookbooksSourceOutputReference <a name="OpsworksStackCustomCookbooksSourceOutputReference" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer"></a>

```typescript
import { opsworksStack } from '@cdktf/aws-cdk'

new opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey">resetSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```

##### `resetSshKey` <a name="resetSshKey" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey"></a>

```typescript
public resetSshKey(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput">revisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput">sshKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey">sshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: string;
```

- *Type:* string

---

##### `sshKeyInput`<sup>Optional</sup> <a name="sshKeyInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput"></a>

```typescript
public readonly sshKeyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksStackCustomCookbooksSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---



