# `aws_elasticache_cluster`

Refer to the Terraform Registory for docs: [`aws_elasticache_cluster`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster).

# `elasticacheCluster` Submodule <a name="`elasticacheCluster` Submodule" id="@cdktf/aws-cdk.elasticacheCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheCluster <a name="ElasticacheCluster" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster aws_elasticache_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.Initializer"></a>

```typescript
import { elasticacheCluster } from '@cdktf/aws-cdk'

new elasticacheCluster.ElasticacheCluster(scope: Construct, id: string, config: ElasticacheClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig">ElasticacheClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig">ElasticacheClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetAzMode">resetAzMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetFinalSnapshotIdentifier">resetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetNotificationTopicArn">resetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetNumCacheNodes">resetNumCacheNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetParameterGroupName">resetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetPreferredAvailabilityZones">resetPreferredAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetReplicationGroupId">resetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSecurityGroupNames">resetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSnapshotArns">resetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSnapshotRetentionLimit">resetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSnapshotWindow">resetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSubnetGroupName">resetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetApplyImmediately"></a>

```typescript
public resetApplyImmediately(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetAzMode` <a name="resetAzMode" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetAzMode"></a>

```typescript
public resetAzMode(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetFinalSnapshotIdentifier` <a name="resetFinalSnapshotIdentifier" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetFinalSnapshotIdentifier"></a>

```typescript
public resetFinalSnapshotIdentifier(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetNodeType"></a>

```typescript
public resetNodeType(): void
```

##### `resetNotificationTopicArn` <a name="resetNotificationTopicArn" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetNotificationTopicArn"></a>

```typescript
public resetNotificationTopicArn(): void
```

##### `resetNumCacheNodes` <a name="resetNumCacheNodes" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetNumCacheNodes"></a>

```typescript
public resetNumCacheNodes(): void
```

##### `resetParameterGroupName` <a name="resetParameterGroupName" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetParameterGroupName"></a>

```typescript
public resetParameterGroupName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreferredAvailabilityZones` <a name="resetPreferredAvailabilityZones" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetPreferredAvailabilityZones"></a>

```typescript
public resetPreferredAvailabilityZones(): void
```

##### `resetReplicationGroupId` <a name="resetReplicationGroupId" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetReplicationGroupId"></a>

```typescript
public resetReplicationGroupId(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSecurityGroupNames` <a name="resetSecurityGroupNames" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSecurityGroupNames"></a>

```typescript
public resetSecurityGroupNames(): void
```

##### `resetSnapshotArns` <a name="resetSnapshotArns" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSnapshotArns"></a>

```typescript
public resetSnapshotArns(): void
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSnapshotName"></a>

```typescript
public resetSnapshotName(): void
```

##### `resetSnapshotRetentionLimit` <a name="resetSnapshotRetentionLimit" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSnapshotRetentionLimit"></a>

```typescript
public resetSnapshotRetentionLimit(): void
```

##### `resetSnapshotWindow` <a name="resetSnapshotWindow" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSnapshotWindow"></a>

```typescript
public resetSnapshotWindow(): void
```

##### `resetSubnetGroupName` <a name="resetSubnetGroupName" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetSubnetGroupName"></a>

```typescript
public resetSubnetGroupName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.isConstruct"></a>

```typescript
import { elasticacheCluster } from '@cdktf/aws-cdk'

elasticacheCluster.ElasticacheCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.isTerraformElement"></a>

```typescript
import { elasticacheCluster } from '@cdktf/aws-cdk'

elasticacheCluster.ElasticacheCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.isTerraformResource"></a>

```typescript
import { elasticacheCluster } from '@cdktf/aws-cdk'

elasticacheCluster.ElasticacheCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.cacheNodes">cacheNodes</a></code> | <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList">ElasticacheClusterCacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.clusterAddress">clusterAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.configurationEndpoint">configurationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.engineVersionActual">engineVersionActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.azModeInput">azModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifierInput">finalSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.notificationTopicArnInput">notificationTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.numCacheNodesInput">numCacheNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZonesInput">preferredAvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.replicationGroupIdInput">replicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.securityGroupNamesInput">securityGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotArnsInput">snapshotArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimitInput">snapshotRetentionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotWindowInput">snapshotWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.subnetGroupNameInput">subnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.azMode">azMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.numCacheNodes">numCacheNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZones">preferredAvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.securityGroupNames">securityGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotArns">snapshotArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cacheNodes`<sup>Required</sup> <a name="cacheNodes" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.cacheNodes"></a>

```typescript
public readonly cacheNodes: ElasticacheClusterCacheNodesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList">ElasticacheClusterCacheNodesList</a>

---

##### `clusterAddress`<sup>Required</sup> <a name="clusterAddress" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.clusterAddress"></a>

```typescript
public readonly clusterAddress: string;
```

- *Type:* string

---

##### `configurationEndpoint`<sup>Required</sup> <a name="configurationEndpoint" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.configurationEndpoint"></a>

```typescript
public readonly configurationEndpoint: string;
```

- *Type:* string

---

##### `engineVersionActual`<sup>Required</sup> <a name="engineVersionActual" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.engineVersionActual"></a>

```typescript
public readonly engineVersionActual: string;
```

- *Type:* string

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.applyImmediatelyInput"></a>

```typescript
public readonly applyImmediatelyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `azModeInput`<sup>Optional</sup> <a name="azModeInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.azModeInput"></a>

```typescript
public readonly azModeInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifierInput`<sup>Optional</sup> <a name="finalSnapshotIdentifierInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifierInput"></a>

```typescript
public readonly finalSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `notificationTopicArnInput`<sup>Optional</sup> <a name="notificationTopicArnInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.notificationTopicArnInput"></a>

```typescript
public readonly notificationTopicArnInput: string;
```

- *Type:* string

---

##### `numCacheNodesInput`<sup>Optional</sup> <a name="numCacheNodesInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.numCacheNodesInput"></a>

```typescript
public readonly numCacheNodesInput: number;
```

- *Type:* number

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.parameterGroupNameInput"></a>

```typescript
public readonly parameterGroupNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `preferredAvailabilityZonesInput`<sup>Optional</sup> <a name="preferredAvailabilityZonesInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZonesInput"></a>

```typescript
public readonly preferredAvailabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `replicationGroupIdInput`<sup>Optional</sup> <a name="replicationGroupIdInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.replicationGroupIdInput"></a>

```typescript
public readonly replicationGroupIdInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupNamesInput`<sup>Optional</sup> <a name="securityGroupNamesInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.securityGroupNamesInput"></a>

```typescript
public readonly securityGroupNamesInput: string[];
```

- *Type:* string[]

---

##### `snapshotArnsInput`<sup>Optional</sup> <a name="snapshotArnsInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotArnsInput"></a>

```typescript
public readonly snapshotArnsInput: string[];
```

- *Type:* string[]

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `snapshotRetentionLimitInput`<sup>Optional</sup> <a name="snapshotRetentionLimitInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimitInput"></a>

```typescript
public readonly snapshotRetentionLimitInput: number;
```

- *Type:* number

---

##### `snapshotWindowInput`<sup>Optional</sup> <a name="snapshotWindowInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotWindowInput"></a>

```typescript
public readonly snapshotWindowInput: string;
```

- *Type:* string

---

##### `subnetGroupNameInput`<sup>Optional</sup> <a name="subnetGroupNameInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.subnetGroupNameInput"></a>

```typescript
public readonly subnetGroupNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.azMode"></a>

```typescript
public readonly azMode: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

---

##### `numCacheNodes`<sup>Required</sup> <a name="numCacheNodes" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.numCacheNodes"></a>

```typescript
public readonly numCacheNodes: number;
```

- *Type:* number

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferredAvailabilityZones`<sup>Required</sup> <a name="preferredAvailabilityZones" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZones"></a>

```typescript
public readonly preferredAvailabilityZones: string[];
```

- *Type:* string[]

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `securityGroupNames`<sup>Required</sup> <a name="securityGroupNames" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.securityGroupNames"></a>

```typescript
public readonly securityGroupNames: string[];
```

- *Type:* string[]

---

##### `snapshotArns`<sup>Required</sup> <a name="snapshotArns" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotArns"></a>

```typescript
public readonly snapshotArns: string[];
```

- *Type:* string[]

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

---

##### `snapshotWindow`<sup>Required</sup> <a name="snapshotWindow" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheClusterCacheNodes <a name="ElasticacheClusterCacheNodes" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodes.Initializer"></a>

```typescript
import { elasticacheCluster } from '@cdktf/aws-cdk'

const elasticacheClusterCacheNodes: elasticacheCluster.ElasticacheClusterCacheNodes = { ... }
```


### ElasticacheClusterConfig <a name="ElasticacheClusterConfig" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.Initializer"></a>

```typescript
import { elasticacheCluster } from '@cdktf/aws-cdk'

const elasticacheClusterConfig: elasticacheCluster.ElasticacheClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#cluster_id ElasticacheCluster#cluster_id}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#apply_immediately ElasticacheCluster#apply_immediately}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#availability_zone ElasticacheCluster#availability_zone}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.azMode">azMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#az_mode ElasticacheCluster#az_mode}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#engine ElasticacheCluster#engine}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#engine_version ElasticacheCluster#engine_version}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#id ElasticacheCluster#id}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#maintenance_window ElasticacheCluster#maintenance_window}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.nodeType">nodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#node_type ElasticacheCluster#node_type}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#notification_topic_arn ElasticacheCluster#notification_topic_arn}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.numCacheNodes">numCacheNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#num_cache_nodes ElasticacheCluster#num_cache_nodes}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#parameter_group_name ElasticacheCluster#parameter_group_name}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#port ElasticacheCluster#port}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.preferredAvailabilityZones">preferredAvailabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#replication_group_id ElasticacheCluster#replication_group_id}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#security_group_ids ElasticacheCluster#security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupNames">securityGroupNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#security_group_names ElasticacheCluster#security_group_names}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.snapshotArns">snapshotArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#snapshot_arns ElasticacheCluster#snapshot_arns}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#snapshot_name ElasticacheCluster#snapshot_name}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#snapshot_window ElasticacheCluster#snapshot_window}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#subnet_group_name ElasticacheCluster#subnet_group_name}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#tags ElasticacheCluster#tags}. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#tags_all ElasticacheCluster#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#cluster_id ElasticacheCluster#cluster_id}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#apply_immediately ElasticacheCluster#apply_immediately}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#availability_zone ElasticacheCluster#availability_zone}.

---

##### `azMode`<sup>Optional</sup> <a name="azMode" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.azMode"></a>

```typescript
public readonly azMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#az_mode ElasticacheCluster#az_mode}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#engine ElasticacheCluster#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#engine_version ElasticacheCluster#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#id ElasticacheCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#maintenance_window ElasticacheCluster#maintenance_window}.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#node_type ElasticacheCluster#node_type}.

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#notification_topic_arn ElasticacheCluster#notification_topic_arn}.

---

##### `numCacheNodes`<sup>Optional</sup> <a name="numCacheNodes" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.numCacheNodes"></a>

```typescript
public readonly numCacheNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#num_cache_nodes ElasticacheCluster#num_cache_nodes}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#parameter_group_name ElasticacheCluster#parameter_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#port ElasticacheCluster#port}.

---

##### `preferredAvailabilityZones`<sup>Optional</sup> <a name="preferredAvailabilityZones" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.preferredAvailabilityZones"></a>

```typescript
public readonly preferredAvailabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}.

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#replication_group_id ElasticacheCluster#replication_group_id}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#security_group_ids ElasticacheCluster#security_group_ids}.

---

##### `securityGroupNames`<sup>Optional</sup> <a name="securityGroupNames" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupNames"></a>

```typescript
public readonly securityGroupNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#security_group_names ElasticacheCluster#security_group_names}.

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.snapshotArns"></a>

```typescript
public readonly snapshotArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#snapshot_arns ElasticacheCluster#snapshot_arns}.

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#snapshot_name ElasticacheCluster#snapshot_name}.

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}.

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#snapshot_window ElasticacheCluster#snapshot_window}.

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#subnet_group_name ElasticacheCluster#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#tags ElasticacheCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticache_cluster#tags_all ElasticacheCluster#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheClusterCacheNodesList <a name="ElasticacheClusterCacheNodesList" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer"></a>

```typescript
import { elasticacheCluster } from '@cdktf/aws-cdk'

new elasticacheCluster.ElasticacheClusterCacheNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.get"></a>

```typescript
public get(index: number): ElasticacheClusterCacheNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ElasticacheClusterCacheNodesOutputReference <a name="ElasticacheClusterCacheNodesOutputReference" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer"></a>

```typescript
import { elasticacheCluster } from '@cdktf/aws-cdk'

new elasticacheCluster.ElasticacheClusterCacheNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodes">ElasticacheClusterCacheNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheClusterCacheNodes;
```

- *Type:* <a href="#@cdktf/aws-cdk.elasticacheCluster.ElasticacheClusterCacheNodes">ElasticacheClusterCacheNodes</a>

---



