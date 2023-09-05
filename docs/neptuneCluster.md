# `aws_neptune_cluster`

Refer to the Terraform Registory for docs: [`aws_neptune_cluster`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster).

# `neptuneCluster` Submodule <a name="`neptuneCluster` Submodule" id="@cdktf/aws-cdk.neptuneCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneCluster <a name="NeptuneCluster" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster aws_neptune_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.Initializer"></a>

```typescript
import { neptuneCluster } from '@cdktf/aws-cdk'

new neptuneCluster.NeptuneCluster(scope: Construct, id: string, config?: NeptuneClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig">NeptuneClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig">NeptuneClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetBackupRetentionPeriod">resetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetClusterIdentifier">resetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetClusterIdentifierPrefix">resetClusterIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetCopyTagsToSnapshot">resetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetEnableCloudwatchLogsExports">resetEnableCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetFinalSnapshotIdentifier">resetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetIamDatabaseAuthenticationEnabled">resetIamDatabaseAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetNeptuneClusterParameterGroupName">resetNeptuneClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetNeptuneSubnetGroupName">resetNeptuneSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetReplicationSourceIdentifier">resetReplicationSourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetSkipFinalSnapshot">resetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetSnapshotIdentifier">resetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetStorageEncrypted">resetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: NeptuneClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

---

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetApplyImmediately"></a>

```typescript
public resetApplyImmediately(): void
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetBackupRetentionPeriod` <a name="resetBackupRetentionPeriod" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetBackupRetentionPeriod"></a>

```typescript
public resetBackupRetentionPeriod(): void
```

##### `resetClusterIdentifier` <a name="resetClusterIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetClusterIdentifier"></a>

```typescript
public resetClusterIdentifier(): void
```

##### `resetClusterIdentifierPrefix` <a name="resetClusterIdentifierPrefix" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetClusterIdentifierPrefix"></a>

```typescript
public resetClusterIdentifierPrefix(): void
```

##### `resetCopyTagsToSnapshot` <a name="resetCopyTagsToSnapshot" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetCopyTagsToSnapshot"></a>

```typescript
public resetCopyTagsToSnapshot(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetEnableCloudwatchLogsExports` <a name="resetEnableCloudwatchLogsExports" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetEnableCloudwatchLogsExports"></a>

```typescript
public resetEnableCloudwatchLogsExports(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetFinalSnapshotIdentifier` <a name="resetFinalSnapshotIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetFinalSnapshotIdentifier"></a>

```typescript
public resetFinalSnapshotIdentifier(): void
```

##### `resetIamDatabaseAuthenticationEnabled` <a name="resetIamDatabaseAuthenticationEnabled" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetIamDatabaseAuthenticationEnabled"></a>

```typescript
public resetIamDatabaseAuthenticationEnabled(): void
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetIamRoles"></a>

```typescript
public resetIamRoles(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetNeptuneClusterParameterGroupName` <a name="resetNeptuneClusterParameterGroupName" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetNeptuneClusterParameterGroupName"></a>

```typescript
public resetNeptuneClusterParameterGroupName(): void
```

##### `resetNeptuneSubnetGroupName` <a name="resetNeptuneSubnetGroupName" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetNeptuneSubnetGroupName"></a>

```typescript
public resetNeptuneSubnetGroupName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetPreferredBackupWindow"></a>

```typescript
public resetPreferredBackupWindow(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetReplicationSourceIdentifier` <a name="resetReplicationSourceIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetReplicationSourceIdentifier"></a>

```typescript
public resetReplicationSourceIdentifier(): void
```

##### `resetSkipFinalSnapshot` <a name="resetSkipFinalSnapshot" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetSkipFinalSnapshot"></a>

```typescript
public resetSkipFinalSnapshot(): void
```

##### `resetSnapshotIdentifier` <a name="resetSnapshotIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetSnapshotIdentifier"></a>

```typescript
public resetSnapshotIdentifier(): void
```

##### `resetStorageEncrypted` <a name="resetStorageEncrypted" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetStorageEncrypted"></a>

```typescript
public resetStorageEncrypted(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.isConstruct"></a>

```typescript
import { neptuneCluster } from '@cdktf/aws-cdk'

neptuneCluster.NeptuneCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.isTerraformElement"></a>

```typescript
import { neptuneCluster } from '@cdktf/aws-cdk'

neptuneCluster.NeptuneCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.isTerraformResource"></a>

```typescript
import { neptuneCluster } from '@cdktf/aws-cdk'

neptuneCluster.NeptuneCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterMembers">clusterMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterResourceId">clusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.readerEndpoint">readerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference">NeptuneClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.backupRetentionPeriodInput">backupRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefixInput">clusterIdentifierPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshotInput">copyTagsToSnapshotInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExportsInput">enableCloudwatchLogsExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifierInput">finalSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabledInput">iamDatabaseAuthenticationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.iamRolesInput">iamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupNameInput">neptuneClusterParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupNameInput">neptuneSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifierInput">replicationSourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.skipFinalSnapshotInput">skipFinalSnapshotInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.snapshotIdentifierInput">snapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.storageEncryptedInput">storageEncryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefix">clusterIdentifierPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupName">neptuneClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupName">neptuneSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clusterMembers`<sup>Required</sup> <a name="clusterMembers" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterMembers"></a>

```typescript
public readonly clusterMembers: string[];
```

- *Type:* string[]

---

##### `clusterResourceId`<sup>Required</sup> <a name="clusterResourceId" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterResourceId"></a>

```typescript
public readonly clusterResourceId: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `readerEndpoint`<sup>Required</sup> <a name="readerEndpoint" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.readerEndpoint"></a>

```typescript
public readonly readerEndpoint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.timeouts"></a>

```typescript
public readonly timeouts: NeptuneClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference">NeptuneClusterTimeoutsOutputReference</a>

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.applyImmediatelyInput"></a>

```typescript
public readonly applyImmediatelyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `backupRetentionPeriodInput`<sup>Optional</sup> <a name="backupRetentionPeriodInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.backupRetentionPeriodInput"></a>

```typescript
public readonly backupRetentionPeriodInput: number;
```

- *Type:* number

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `clusterIdentifierPrefixInput`<sup>Optional</sup> <a name="clusterIdentifierPrefixInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefixInput"></a>

```typescript
public readonly clusterIdentifierPrefixInput: string;
```

- *Type:* string

---

##### `copyTagsToSnapshotInput`<sup>Optional</sup> <a name="copyTagsToSnapshotInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshotInput"></a>

```typescript
public readonly copyTagsToSnapshotInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="enableCloudwatchLogsExportsInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExportsInput"></a>

```typescript
public readonly enableCloudwatchLogsExportsInput: string[];
```

- *Type:* string[]

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifierInput`<sup>Optional</sup> <a name="finalSnapshotIdentifierInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifierInput"></a>

```typescript
public readonly finalSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `iamDatabaseAuthenticationEnabledInput`<sup>Optional</sup> <a name="iamDatabaseAuthenticationEnabledInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabledInput"></a>

```typescript
public readonly iamDatabaseAuthenticationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.iamRolesInput"></a>

```typescript
public readonly iamRolesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `neptuneClusterParameterGroupNameInput`<sup>Optional</sup> <a name="neptuneClusterParameterGroupNameInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupNameInput"></a>

```typescript
public readonly neptuneClusterParameterGroupNameInput: string;
```

- *Type:* string

---

##### `neptuneSubnetGroupNameInput`<sup>Optional</sup> <a name="neptuneSubnetGroupNameInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupNameInput"></a>

```typescript
public readonly neptuneSubnetGroupNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.preferredBackupWindowInput"></a>

```typescript
public readonly preferredBackupWindowInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `replicationSourceIdentifierInput`<sup>Optional</sup> <a name="replicationSourceIdentifierInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifierInput"></a>

```typescript
public readonly replicationSourceIdentifierInput: string;
```

- *Type:* string

---

##### `skipFinalSnapshotInput`<sup>Optional</sup> <a name="skipFinalSnapshotInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.skipFinalSnapshotInput"></a>

```typescript
public readonly skipFinalSnapshotInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotIdentifierInput`<sup>Optional</sup> <a name="snapshotIdentifierInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.snapshotIdentifierInput"></a>

```typescript
public readonly snapshotIdentifierInput: string;
```

- *Type:* string

---

##### `storageEncryptedInput`<sup>Optional</sup> <a name="storageEncryptedInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.storageEncryptedInput"></a>

```typescript
public readonly storageEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NeptuneClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.backupRetentionPeriod"></a>

```typescript
public readonly backupRetentionPeriod: number;
```

- *Type:* number

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `clusterIdentifierPrefix`<sup>Required</sup> <a name="clusterIdentifierPrefix" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefix"></a>

```typescript
public readonly clusterIdentifierPrefix: string;
```

- *Type:* string

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="copyTagsToSnapshot" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshot"></a>

```typescript
public readonly copyTagsToSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableCloudwatchLogsExports`<sup>Required</sup> <a name="enableCloudwatchLogsExports" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExports"></a>

```typescript
public readonly enableCloudwatchLogsExports: string[];
```

- *Type:* string[]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabled"></a>

```typescript
public readonly iamDatabaseAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `neptuneClusterParameterGroupName`<sup>Required</sup> <a name="neptuneClusterParameterGroupName" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupName"></a>

```typescript
public readonly neptuneClusterParameterGroupName: string;
```

- *Type:* string

---

##### `neptuneSubnetGroupName`<sup>Required</sup> <a name="neptuneSubnetGroupName" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupName"></a>

```typescript
public readonly neptuneSubnetGroupName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="replicationSourceIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifier"></a>

```typescript
public readonly replicationSourceIdentifier: string;
```

- *Type:* string

---

##### `skipFinalSnapshot`<sup>Required</sup> <a name="skipFinalSnapshot" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.skipFinalSnapshot"></a>

```typescript
public readonly skipFinalSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.neptuneCluster.NeptuneCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneClusterConfig <a name="NeptuneClusterConfig" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.Initializer"></a>

```typescript
import { neptuneCluster } from '@cdktf/aws-cdk'

const neptuneClusterConfig: neptuneCluster.NeptuneClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#availability_zones NeptuneCluster#availability_zones}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifierPrefix">clusterIdentifierPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#engine NeptuneCluster#engine}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#engine_version NeptuneCluster#engine_version}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#iam_roles NeptuneCluster#iam_roles}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#id NeptuneCluster#id}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.neptuneClusterParameterGroupName">neptuneClusterParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.neptuneSubnetGroupName">neptuneSubnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#port NeptuneCluster#port}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#tags NeptuneCluster#tags}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#tags_all NeptuneCluster#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#availability_zones NeptuneCluster#availability_zones}.

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.backupRetentionPeriod"></a>

```typescript
public readonly backupRetentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}.

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}.

---

##### `clusterIdentifierPrefix`<sup>Optional</sup> <a name="clusterIdentifierPrefix" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifierPrefix"></a>

```typescript
public readonly clusterIdentifierPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}.

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.copyTagsToSnapshot"></a>

```typescript
public readonly copyTagsToSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}.

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="enableCloudwatchLogsExports" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.enableCloudwatchLogsExports"></a>

```typescript
public readonly enableCloudwatchLogsExports: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#engine NeptuneCluster#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#engine_version NeptuneCluster#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}.

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.iamDatabaseAuthenticationEnabled"></a>

```typescript
public readonly iamDatabaseAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#iam_roles NeptuneCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#id NeptuneCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}.

---

##### `neptuneClusterParameterGroupName`<sup>Optional</sup> <a name="neptuneClusterParameterGroupName" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.neptuneClusterParameterGroupName"></a>

```typescript
public readonly neptuneClusterParameterGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}.

---

##### `neptuneSubnetGroupName`<sup>Optional</sup> <a name="neptuneSubnetGroupName" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.neptuneSubnetGroupName"></a>

```typescript
public readonly neptuneSubnetGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#port NeptuneCluster#port}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}.

---

##### `replicationSourceIdentifier`<sup>Optional</sup> <a name="replicationSourceIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.replicationSourceIdentifier"></a>

```typescript
public readonly replicationSourceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}.

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="skipFinalSnapshot" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.skipFinalSnapshot"></a>

```typescript
public readonly skipFinalSnapshot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}.

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}.

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#tags NeptuneCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#tags_all NeptuneCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NeptuneClusterTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#timeouts NeptuneCluster#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}.

---

### NeptuneClusterTimeouts <a name="NeptuneClusterTimeouts" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts.Initializer"></a>

```typescript
import { neptuneCluster } from '@cdktf/aws-cdk'

const neptuneClusterTimeouts: neptuneCluster.NeptuneClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#create NeptuneCluster#create}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#delete NeptuneCluster#delete}. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#update NeptuneCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#create NeptuneCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#delete NeptuneCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster#update NeptuneCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneClusterTimeoutsOutputReference <a name="NeptuneClusterTimeoutsOutputReference" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { neptuneCluster } from '@cdktf/aws-cdk'

new neptuneCluster.NeptuneClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

---



