# `aws_docdb_cluster_instance`

Refer to the Terraform Registory for docs: [`aws_docdb_cluster_instance`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance).

# `docdbClusterInstance` Submodule <a name="`docdbClusterInstance` Submodule" id="@cdktf/aws-cdk.docdbClusterInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbClusterInstance <a name="DocdbClusterInstance" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance aws_docdb_cluster_instance}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.Initializer"></a>

```typescript
import { docdbClusterInstance } from '@cdktf/aws-cdk'

new docdbClusterInstance.DocdbClusterInstance(scope: Construct, id: string, config: DocdbClusterInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig">DocdbClusterInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig">DocdbClusterInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetCaCertIdentifier">resetCaCertIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetIdentifierPrefix">resetIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetPromotionTier">resetPromotionTier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: DocdbClusterInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a>

---

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetApplyImmediately"></a>

```typescript
public resetApplyImmediately(): void
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetAutoMinorVersionUpgrade"></a>

```typescript
public resetAutoMinorVersionUpgrade(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetCaCertIdentifier` <a name="resetCaCertIdentifier" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetCaCertIdentifier"></a>

```typescript
public resetCaCertIdentifier(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetIdentifierPrefix` <a name="resetIdentifierPrefix" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetIdentifierPrefix"></a>

```typescript
public resetIdentifierPrefix(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetPromotionTier` <a name="resetPromotionTier" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetPromotionTier"></a>

```typescript
public resetPromotionTier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.isConstruct"></a>

```typescript
import { docdbClusterInstance } from '@cdktf/aws-cdk'

docdbClusterInstance.DocdbClusterInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.isTerraformElement"></a>

```typescript
import { docdbClusterInstance } from '@cdktf/aws-cdk'

docdbClusterInstance.DocdbClusterInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.isTerraformResource"></a>

```typescript
import { docdbClusterInstance } from '@cdktf/aws-cdk'

docdbClusterInstance.DocdbClusterInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.dbiResourceId">dbiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.storageEncrypted">storageEncrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference">DocdbClusterInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.writer">writer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifierInput">caCertIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefixInput">identifierPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.instanceClassInput">instanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.promotionTierInput">promotionTierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifier">caCertIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefix">identifierPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.instanceClass">instanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.promotionTier">promotionTier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dbiResourceId`<sup>Required</sup> <a name="dbiResourceId" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.dbiResourceId"></a>

```typescript
public readonly dbiResourceId: string;
```

- *Type:* string

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.timeouts"></a>

```typescript
public readonly timeouts: DocdbClusterInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference">DocdbClusterInstanceTimeoutsOutputReference</a>

---

##### `writer`<sup>Required</sup> <a name="writer" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.writer"></a>

```typescript
public readonly writer: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.applyImmediatelyInput"></a>

```typescript
public readonly applyImmediatelyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgradeInput"></a>

```typescript
public readonly autoMinorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `caCertIdentifierInput`<sup>Optional</sup> <a name="caCertIdentifierInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifierInput"></a>

```typescript
public readonly caCertIdentifierInput: string;
```

- *Type:* string

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `identifierPrefixInput`<sup>Optional</sup> <a name="identifierPrefixInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefixInput"></a>

```typescript
public readonly identifierPrefixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.instanceClassInput"></a>

```typescript
public readonly instanceClassInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `promotionTierInput`<sup>Optional</sup> <a name="promotionTierInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.promotionTierInput"></a>

```typescript
public readonly promotionTierInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DocdbClusterInstanceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a> | cdktf.IResolvable

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `caCertIdentifier`<sup>Required</sup> <a name="caCertIdentifier" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifier"></a>

```typescript
public readonly caCertIdentifier: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `identifierPrefix`<sup>Required</sup> <a name="identifierPrefix" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefix"></a>

```typescript
public readonly identifierPrefix: string;
```

- *Type:* string

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `promotionTier`<sup>Required</sup> <a name="promotionTier" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.promotionTier"></a>

```typescript
public readonly promotionTier: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbClusterInstanceConfig <a name="DocdbClusterInstanceConfig" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.Initializer"></a>

```typescript
import { docdbClusterInstance } from '@cdktf/aws-cdk'

const docdbClusterInstanceConfig: docdbClusterInstance.DocdbClusterInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#cluster_identifier DocdbClusterInstance#cluster_identifier}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.instanceClass">instanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#instance_class DocdbClusterInstance#instance_class}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.applyImmediately">applyImmediately</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#apply_immediately DocdbClusterInstance#apply_immediately}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#auto_minor_version_upgrade DocdbClusterInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#availability_zone DocdbClusterInstance#availability_zone}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.caCertIdentifier">caCertIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#ca_cert_identifier DocdbClusterInstance#ca_cert_identifier}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#engine DocdbClusterInstance#engine}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#id DocdbClusterInstance#id}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#identifier DocdbClusterInstance#identifier}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifierPrefix">identifierPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#identifier_prefix DocdbClusterInstance#identifier_prefix}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#preferred_maintenance_window DocdbClusterInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.promotionTier">promotionTier</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#promotion_tier DocdbClusterInstance#promotion_tier}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#tags DocdbClusterInstance#tags}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#tags_all DocdbClusterInstance#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#cluster_identifier DocdbClusterInstance#cluster_identifier}.

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#instance_class DocdbClusterInstance#instance_class}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.applyImmediately"></a>

```typescript
public readonly applyImmediately: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#apply_immediately DocdbClusterInstance#apply_immediately}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#auto_minor_version_upgrade DocdbClusterInstance#auto_minor_version_upgrade}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#availability_zone DocdbClusterInstance#availability_zone}.

---

##### `caCertIdentifier`<sup>Optional</sup> <a name="caCertIdentifier" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.caCertIdentifier"></a>

```typescript
public readonly caCertIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#ca_cert_identifier DocdbClusterInstance#ca_cert_identifier}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#engine DocdbClusterInstance#engine}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#id DocdbClusterInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#identifier DocdbClusterInstance#identifier}.

---

##### `identifierPrefix`<sup>Optional</sup> <a name="identifierPrefix" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifierPrefix"></a>

```typescript
public readonly identifierPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#identifier_prefix DocdbClusterInstance#identifier_prefix}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#preferred_maintenance_window DocdbClusterInstance#preferred_maintenance_window}.

---

##### `promotionTier`<sup>Optional</sup> <a name="promotionTier" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.promotionTier"></a>

```typescript
public readonly promotionTier: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#promotion_tier DocdbClusterInstance#promotion_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#tags DocdbClusterInstance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#tags_all DocdbClusterInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DocdbClusterInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#timeouts DocdbClusterInstance#timeouts}

---

### DocdbClusterInstanceTimeouts <a name="DocdbClusterInstanceTimeouts" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts.Initializer"></a>

```typescript
import { docdbClusterInstance } from '@cdktf/aws-cdk'

const docdbClusterInstanceTimeouts: docdbClusterInstance.DocdbClusterInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#create DocdbClusterInstance#create}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#delete DocdbClusterInstance#delete}. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#update DocdbClusterInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#create DocdbClusterInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#delete DocdbClusterInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/docdb_cluster_instance#update DocdbClusterInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbClusterInstanceTimeoutsOutputReference <a name="DocdbClusterInstanceTimeoutsOutputReference" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { docdbClusterInstance } from '@cdktf/aws-cdk'

new docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DocdbClusterInstanceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a> | cdktf.IResolvable

---



