# `aws_fsx_ontap_file_system`

Refer to the Terraform Registory for docs: [`aws_fsx_ontap_file_system`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system).

# `fsxOntapFileSystem` Submodule <a name="`fsxOntapFileSystem` Submodule" id="@cdktf/aws-cdk.fsxOntapFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOntapFileSystem <a name="FsxOntapFileSystem" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system aws_fsx_ontap_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

new fsxOntapFileSystem.FsxOntapFileSystem(scope: Construct, id: string, config: FsxOntapFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig">FsxOntapFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig">FsxOntapFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.putDiskIopsConfiguration">putDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetAutomaticBackupRetentionDays">resetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetDailyAutomaticBackupStartTime">resetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetDiskIopsConfiguration">resetDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetEndpointIpAddressRange">resetEndpointIpAddressRange</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetFsxAdminPassword">resetFsxAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetRouteTableIds">resetRouteTableIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageCapacity">resetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetWeeklyMaintenanceStartTime">resetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDiskIopsConfiguration` <a name="putDiskIopsConfiguration" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.putDiskIopsConfiguration"></a>

```typescript
public putDiskIopsConfiguration(value: FsxOntapFileSystemDiskIopsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.putDiskIopsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.putTimeouts"></a>

```typescript
public putTimeouts(value: FsxOntapFileSystemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a>

---

##### `resetAutomaticBackupRetentionDays` <a name="resetAutomaticBackupRetentionDays" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetAutomaticBackupRetentionDays"></a>

```typescript
public resetAutomaticBackupRetentionDays(): void
```

##### `resetDailyAutomaticBackupStartTime` <a name="resetDailyAutomaticBackupStartTime" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetDailyAutomaticBackupStartTime"></a>

```typescript
public resetDailyAutomaticBackupStartTime(): void
```

##### `resetDiskIopsConfiguration` <a name="resetDiskIopsConfiguration" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetDiskIopsConfiguration"></a>

```typescript
public resetDiskIopsConfiguration(): void
```

##### `resetEndpointIpAddressRange` <a name="resetEndpointIpAddressRange" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetEndpointIpAddressRange"></a>

```typescript
public resetEndpointIpAddressRange(): void
```

##### `resetFsxAdminPassword` <a name="resetFsxAdminPassword" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetFsxAdminPassword"></a>

```typescript
public resetFsxAdminPassword(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetRouteTableIds` <a name="resetRouteTableIds" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetRouteTableIds"></a>

```typescript
public resetRouteTableIds(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetStorageCapacity` <a name="resetStorageCapacity" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageCapacity"></a>

```typescript
public resetStorageCapacity(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeeklyMaintenanceStartTime` <a name="resetWeeklyMaintenanceStartTime" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.resetWeeklyMaintenanceStartTime"></a>

```typescript
public resetWeeklyMaintenanceStartTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FsxOntapFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.isConstruct"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

fsxOntapFileSystem.FsxOntapFileSystem.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformElement"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

fsxOntapFileSystem.FsxOntapFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformResource"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

fsxOntapFileSystem.FsxOntapFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.generateConfigForImport"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

fsxOntapFileSystem.FsxOntapFileSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FsxOntapFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FsxOntapFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FsxOntapFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FsxOntapFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfiguration">diskIopsConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference">FsxOntapFileSystemDiskIopsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList">FsxOntapFileSystemEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference">FsxOntapFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDaysInput">automaticBackupRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTimeInput">dailyAutomaticBackupStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfigurationInput">diskIopsConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRangeInput">endpointIpAddressRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPasswordInput">fsxAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetIdInput">preferredSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIdsInput">routeTableIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacityInput">storageCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacityInput">throughputCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTimeInput">weeklyMaintenanceStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRange">endpointIpAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPassword">fsxAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetId">preferredSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacity">throughputCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `diskIopsConfiguration`<sup>Required</sup> <a name="diskIopsConfiguration" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfiguration"></a>

```typescript
public readonly diskIopsConfiguration: FsxOntapFileSystemDiskIopsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference">FsxOntapFileSystemDiskIopsConfigurationOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.endpoints"></a>

```typescript
public readonly endpoints: FsxOntapFileSystemEndpointsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList">FsxOntapFileSystemEndpointsList</a>

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.timeouts"></a>

```typescript
public readonly timeouts: FsxOntapFileSystemTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference">FsxOntapFileSystemTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `automaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="automaticBackupRetentionDaysInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDaysInput"></a>

```typescript
public readonly automaticBackupRetentionDaysInput: number;
```

- *Type:* number

---

##### `dailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTimeInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```typescript
public readonly dailyAutomaticBackupStartTimeInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `diskIopsConfigurationInput`<sup>Optional</sup> <a name="diskIopsConfigurationInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.diskIopsConfigurationInput"></a>

```typescript
public readonly diskIopsConfigurationInput: FsxOntapFileSystemDiskIopsConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

---

##### `endpointIpAddressRangeInput`<sup>Optional</sup> <a name="endpointIpAddressRangeInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRangeInput"></a>

```typescript
public readonly endpointIpAddressRangeInput: string;
```

- *Type:* string

---

##### `fsxAdminPasswordInput`<sup>Optional</sup> <a name="fsxAdminPasswordInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPasswordInput"></a>

```typescript
public readonly fsxAdminPasswordInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `preferredSubnetIdInput`<sup>Optional</sup> <a name="preferredSubnetIdInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetIdInput"></a>

```typescript
public readonly preferredSubnetIdInput: string;
```

- *Type:* string

---

##### `routeTableIdsInput`<sup>Optional</sup> <a name="routeTableIdsInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIdsInput"></a>

```typescript
public readonly routeTableIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `storageCapacityInput`<sup>Optional</sup> <a name="storageCapacityInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacityInput"></a>

```typescript
public readonly storageCapacityInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputCapacityInput`<sup>Optional</sup> <a name="throughputCapacityInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacityInput"></a>

```typescript
public readonly throughputCapacityInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FsxOntapFileSystemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a>

---

##### `weeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="weeklyMaintenanceStartTimeInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```typescript
public readonly weeklyMaintenanceStartTimeInput: string;
```

- *Type:* string

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="automaticBackupRetentionDays" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.automaticBackupRetentionDays"></a>

```typescript
public readonly automaticBackupRetentionDays: number;
```

- *Type:* number

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.dailyAutomaticBackupStartTime"></a>

```typescript
public readonly dailyAutomaticBackupStartTime: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `endpointIpAddressRange`<sup>Required</sup> <a name="endpointIpAddressRange" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.endpointIpAddressRange"></a>

```typescript
public readonly endpointIpAddressRange: string;
```

- *Type:* string

---

##### `fsxAdminPassword`<sup>Required</sup> <a name="fsxAdminPassword" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.fsxAdminPassword"></a>

```typescript
public readonly fsxAdminPassword: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `preferredSubnetId`<sup>Required</sup> <a name="preferredSubnetId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.preferredSubnetId"></a>

```typescript
public readonly preferredSubnetId: string;
```

- *Type:* string

---

##### `routeTableIds`<sup>Required</sup> <a name="routeTableIds" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.throughputCapacity"></a>

```typescript
public readonly throughputCapacity: number;
```

- *Type:* number

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOntapFileSystemConfig <a name="FsxOntapFileSystemConfig" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

const fsxOntapFileSystemConfig: fsxOntapFileSystem.FsxOntapFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#deployment_type FsxOntapFileSystem#deployment_type}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.preferredSubnetId">preferredSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#preferred_subnet_id FsxOntapFileSystem#preferred_subnet_id}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#subnet_ids FsxOntapFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.throughputCapacity">throughputCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#throughput_capacity FsxOntapFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#automatic_backup_retention_days FsxOntapFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#daily_automatic_backup_start_time FsxOntapFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.diskIopsConfiguration">diskIopsConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a></code> | disk_iops_configuration block. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.endpointIpAddressRange">endpointIpAddressRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#endpoint_ip_address_range FsxOntapFileSystem#endpoint_ip_address_range}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.fsxAdminPassword">fsxAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#fsx_admin_password FsxOntapFileSystem#fsx_admin_password}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#id FsxOntapFileSystem#id}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#kms_key_id FsxOntapFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#route_table_ids FsxOntapFileSystem#route_table_ids}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#security_group_ids FsxOntapFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#storage_capacity FsxOntapFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#storage_type FsxOntapFileSystem#storage_type}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#tags FsxOntapFileSystem#tags}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#tags_all FsxOntapFileSystem#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#weekly_maintenance_start_time FsxOntapFileSystem#weekly_maintenance_start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#deployment_type FsxOntapFileSystem#deployment_type}.

---

##### `preferredSubnetId`<sup>Required</sup> <a name="preferredSubnetId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.preferredSubnetId"></a>

```typescript
public readonly preferredSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#preferred_subnet_id FsxOntapFileSystem#preferred_subnet_id}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#subnet_ids FsxOntapFileSystem#subnet_ids}.

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.throughputCapacity"></a>

```typescript
public readonly throughputCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#throughput_capacity FsxOntapFileSystem#throughput_capacity}.

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="automaticBackupRetentionDays" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.automaticBackupRetentionDays"></a>

```typescript
public readonly automaticBackupRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#automatic_backup_retention_days FsxOntapFileSystem#automatic_backup_retention_days}.

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```typescript
public readonly dailyAutomaticBackupStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#daily_automatic_backup_start_time FsxOntapFileSystem#daily_automatic_backup_start_time}.

---

##### `diskIopsConfiguration`<sup>Optional</sup> <a name="diskIopsConfiguration" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.diskIopsConfiguration"></a>

```typescript
public readonly diskIopsConfiguration: FsxOntapFileSystemDiskIopsConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

disk_iops_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#disk_iops_configuration FsxOntapFileSystem#disk_iops_configuration}

---

##### `endpointIpAddressRange`<sup>Optional</sup> <a name="endpointIpAddressRange" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.endpointIpAddressRange"></a>

```typescript
public readonly endpointIpAddressRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#endpoint_ip_address_range FsxOntapFileSystem#endpoint_ip_address_range}.

---

##### `fsxAdminPassword`<sup>Optional</sup> <a name="fsxAdminPassword" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.fsxAdminPassword"></a>

```typescript
public readonly fsxAdminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#fsx_admin_password FsxOntapFileSystem#fsx_admin_password}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#id FsxOntapFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#kms_key_id FsxOntapFileSystem#kms_key_id}.

---

##### `routeTableIds`<sup>Optional</sup> <a name="routeTableIds" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#route_table_ids FsxOntapFileSystem#route_table_ids}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#security_group_ids FsxOntapFileSystem#security_group_ids}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#storage_capacity FsxOntapFileSystem#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#storage_type FsxOntapFileSystem#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#tags FsxOntapFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#tags_all FsxOntapFileSystem#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FsxOntapFileSystemTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#timeouts FsxOntapFileSystem#timeouts}

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#weekly_maintenance_start_time FsxOntapFileSystem#weekly_maintenance_start_time}.

---

### FsxOntapFileSystemDiskIopsConfiguration <a name="FsxOntapFileSystemDiskIopsConfiguration" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

const fsxOntapFileSystemDiskIopsConfiguration: fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#iops FsxOntapFileSystem#iops}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#mode FsxOntapFileSystem#mode}. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#iops FsxOntapFileSystem#iops}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#mode FsxOntapFileSystem#mode}.

---

### FsxOntapFileSystemEndpoints <a name="FsxOntapFileSystemEndpoints" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpoints.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

const fsxOntapFileSystemEndpoints: fsxOntapFileSystem.FsxOntapFileSystemEndpoints = { ... }
```


### FsxOntapFileSystemEndpointsIntercluster <a name="FsxOntapFileSystemEndpointsIntercluster" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

const fsxOntapFileSystemEndpointsIntercluster: fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster = { ... }
```


### FsxOntapFileSystemEndpointsManagement <a name="FsxOntapFileSystemEndpointsManagement" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

const fsxOntapFileSystemEndpointsManagement: fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement = { ... }
```


### FsxOntapFileSystemTimeouts <a name="FsxOntapFileSystemTimeouts" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

const fsxOntapFileSystemTimeouts: fsxOntapFileSystem.FsxOntapFileSystemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#create FsxOntapFileSystem#create}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#delete FsxOntapFileSystem#delete}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#update FsxOntapFileSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#create FsxOntapFileSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#delete FsxOntapFileSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_file_system#update FsxOntapFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOntapFileSystemDiskIopsConfigurationOutputReference <a name="FsxOntapFileSystemDiskIopsConfigurationOutputReference" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

new fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOntapFileSystemDiskIopsConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemDiskIopsConfiguration">FsxOntapFileSystemDiskIopsConfiguration</a>

---


### FsxOntapFileSystemEndpointsInterclusterList <a name="FsxOntapFileSystemEndpointsInterclusterList" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

new fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.get"></a>

```typescript
public get(index: number): FsxOntapFileSystemEndpointsInterclusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FsxOntapFileSystemEndpointsInterclusterOutputReference <a name="FsxOntapFileSystemEndpointsInterclusterOutputReference" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

new fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster">FsxOntapFileSystemEndpointsIntercluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOntapFileSystemEndpointsIntercluster;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsIntercluster">FsxOntapFileSystemEndpointsIntercluster</a>

---


### FsxOntapFileSystemEndpointsList <a name="FsxOntapFileSystemEndpointsList" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

new fsxOntapFileSystem.FsxOntapFileSystemEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.get"></a>

```typescript
public get(index: number): FsxOntapFileSystemEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FsxOntapFileSystemEndpointsManagementList <a name="FsxOntapFileSystemEndpointsManagementList" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

new fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.get"></a>

```typescript
public get(index: number): FsxOntapFileSystemEndpointsManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FsxOntapFileSystemEndpointsManagementOutputReference <a name="FsxOntapFileSystemEndpointsManagementOutputReference" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

new fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement">FsxOntapFileSystemEndpointsManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOntapFileSystemEndpointsManagement;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagement">FsxOntapFileSystemEndpointsManagement</a>

---


### FsxOntapFileSystemEndpointsOutputReference <a name="FsxOntapFileSystemEndpointsOutputReference" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

new fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.intercluster">intercluster</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList">FsxOntapFileSystemEndpointsInterclusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.management">management</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList">FsxOntapFileSystemEndpointsManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpoints">FsxOntapFileSystemEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intercluster`<sup>Required</sup> <a name="intercluster" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.intercluster"></a>

```typescript
public readonly intercluster: FsxOntapFileSystemEndpointsInterclusterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsInterclusterList">FsxOntapFileSystemEndpointsInterclusterList</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.management"></a>

```typescript
public readonly management: FsxOntapFileSystemEndpointsManagementList;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsManagementList">FsxOntapFileSystemEndpointsManagementList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOntapFileSystemEndpoints;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemEndpoints">FsxOntapFileSystemEndpoints</a>

---


### FsxOntapFileSystemTimeoutsOutputReference <a name="FsxOntapFileSystemTimeoutsOutputReference" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer"></a>

```typescript
import { fsxOntapFileSystem } from '@cdktf/aws-cdk'

new fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxOntapFileSystemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.fsxOntapFileSystem.FsxOntapFileSystemTimeouts">FsxOntapFileSystemTimeouts</a>

---



