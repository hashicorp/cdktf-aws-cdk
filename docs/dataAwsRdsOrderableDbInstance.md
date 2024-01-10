# `dataAwsRdsOrderableDbInstance` Submodule <a name="`dataAwsRdsOrderableDbInstance` Submodule" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsOrderableDbInstance <a name="DataAwsRdsOrderableDbInstance" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance aws_rds_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer"></a>

```typescript
import { dataAwsRdsOrderableDbInstance } from '@cdktf/aws-cdk'

new dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance(scope: Construct, id: string, config: DataAwsRdsOrderableDbInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig">DataAwsRdsOrderableDbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig">DataAwsRdsOrderableDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetAvailabilityZoneGroup">resetAvailabilityZoneGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetInstanceClass">resetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredEngineVersions">resetPreferredEngineVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredInstanceClasses">resetPreferredInstanceClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsEnhancedMonitoring">resetSupportsEnhancedMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsGlobalDatabases">resetSupportsGlobalDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIamDatabaseAuthentication">resetSupportsIamDatabaseAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIops">resetSupportsIops</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsKerberosAuthentication">resetSupportsKerberosAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsPerformanceInsights">resetSupportsPerformanceInsights</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageAutoscaling">resetSupportsStorageAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageEncryption">resetSupportsStorageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAvailabilityZoneGroup` <a name="resetAvailabilityZoneGroup" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetAvailabilityZoneGroup"></a>

```typescript
public resetAvailabilityZoneGroup(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceClass` <a name="resetInstanceClass" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetInstanceClass"></a>

```typescript
public resetInstanceClass(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetPreferredEngineVersions` <a name="resetPreferredEngineVersions" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredEngineVersions"></a>

```typescript
public resetPreferredEngineVersions(): void
```

##### `resetPreferredInstanceClasses` <a name="resetPreferredInstanceClasses" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredInstanceClasses"></a>

```typescript
public resetPreferredInstanceClasses(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetSupportsEnhancedMonitoring` <a name="resetSupportsEnhancedMonitoring" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsEnhancedMonitoring"></a>

```typescript
public resetSupportsEnhancedMonitoring(): void
```

##### `resetSupportsGlobalDatabases` <a name="resetSupportsGlobalDatabases" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsGlobalDatabases"></a>

```typescript
public resetSupportsGlobalDatabases(): void
```

##### `resetSupportsIamDatabaseAuthentication` <a name="resetSupportsIamDatabaseAuthentication" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIamDatabaseAuthentication"></a>

```typescript
public resetSupportsIamDatabaseAuthentication(): void
```

##### `resetSupportsIops` <a name="resetSupportsIops" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIops"></a>

```typescript
public resetSupportsIops(): void
```

##### `resetSupportsKerberosAuthentication` <a name="resetSupportsKerberosAuthentication" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsKerberosAuthentication"></a>

```typescript
public resetSupportsKerberosAuthentication(): void
```

##### `resetSupportsPerformanceInsights` <a name="resetSupportsPerformanceInsights" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsPerformanceInsights"></a>

```typescript
public resetSupportsPerformanceInsights(): void
```

##### `resetSupportsStorageAutoscaling` <a name="resetSupportsStorageAutoscaling" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageAutoscaling"></a>

```typescript
public resetSupportsStorageAutoscaling(): void
```

##### `resetSupportsStorageEncryption` <a name="resetSupportsStorageEncryption" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageEncryption"></a>

```typescript
public resetSupportsStorageEncryption(): void
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetVpc"></a>

```typescript
public resetVpc(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsRdsOrderableDbInstance resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isConstruct"></a>

```typescript
import { dataAwsRdsOrderableDbInstance } from '@cdktf/aws-cdk'

dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformElement"></a>

```typescript
import { dataAwsRdsOrderableDbInstance } from '@cdktf/aws-cdk'

dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformDataSource"></a>

```typescript
import { dataAwsRdsOrderableDbInstance } from '@cdktf/aws-cdk'

dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.generateConfigForImport"></a>

```typescript
import { dataAwsRdsOrderableDbInstance } from '@cdktf/aws-cdk'

dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsRdsOrderableDbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRdsOrderableDbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRdsOrderableDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRdsOrderableDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerDbInstance">maxIopsPerDbInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerGib">maxIopsPerGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxStorageSize">maxStorageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerDbInstance">minIopsPerDbInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerGib">minIopsPerGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minStorageSize">minStorageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.multiAzCapable">multiAzCapable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.outpostCapable">outpostCapable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.readReplicaCapable">readReplicaCapable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportedEngineModes">supportedEngineModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroupInput">availabilityZoneGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClassInput">instanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersionsInput">preferredEngineVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClassesInput">preferredInstanceClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoringInput">supportsEnhancedMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabasesInput">supportsGlobalDatabasesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthenticationInput">supportsIamDatabaseAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIopsInput">supportsIopsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthenticationInput">supportsKerberosAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsightsInput">supportsPerformanceInsightsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscalingInput">supportsStorageAutoscalingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryptionInput">supportsStorageEncryptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpcInput">vpcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroup">availabilityZoneGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClass">instanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersions">preferredEngineVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoring">supportsEnhancedMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabases">supportsGlobalDatabases</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthentication">supportsIamDatabaseAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIops">supportsIops</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthentication">supportsKerberosAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsights">supportsPerformanceInsights</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscaling">supportsStorageAutoscaling</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryption">supportsStorageEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpc">vpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `maxIopsPerDbInstance`<sup>Required</sup> <a name="maxIopsPerDbInstance" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerDbInstance"></a>

```typescript
public readonly maxIopsPerDbInstance: number;
```

- *Type:* number

---

##### `maxIopsPerGib`<sup>Required</sup> <a name="maxIopsPerGib" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerGib"></a>

```typescript
public readonly maxIopsPerGib: number;
```

- *Type:* number

---

##### `maxStorageSize`<sup>Required</sup> <a name="maxStorageSize" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxStorageSize"></a>

```typescript
public readonly maxStorageSize: number;
```

- *Type:* number

---

##### `minIopsPerDbInstance`<sup>Required</sup> <a name="minIopsPerDbInstance" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerDbInstance"></a>

```typescript
public readonly minIopsPerDbInstance: number;
```

- *Type:* number

---

##### `minIopsPerGib`<sup>Required</sup> <a name="minIopsPerGib" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerGib"></a>

```typescript
public readonly minIopsPerGib: number;
```

- *Type:* number

---

##### `minStorageSize`<sup>Required</sup> <a name="minStorageSize" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minStorageSize"></a>

```typescript
public readonly minStorageSize: number;
```

- *Type:* number

---

##### `multiAzCapable`<sup>Required</sup> <a name="multiAzCapable" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.multiAzCapable"></a>

```typescript
public readonly multiAzCapable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `outpostCapable`<sup>Required</sup> <a name="outpostCapable" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.outpostCapable"></a>

```typescript
public readonly outpostCapable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `readReplicaCapable`<sup>Required</sup> <a name="readReplicaCapable" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.readReplicaCapable"></a>

```typescript
public readonly readReplicaCapable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `supportedEngineModes`<sup>Required</sup> <a name="supportedEngineModes" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportedEngineModes"></a>

```typescript
public readonly supportedEngineModes: string[];
```

- *Type:* string[]

---

##### `availabilityZoneGroupInput`<sup>Optional</sup> <a name="availabilityZoneGroupInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroupInput"></a>

```typescript
public readonly availabilityZoneGroupInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClassInput"></a>

```typescript
public readonly instanceClassInput: string;
```

- *Type:* string

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `preferredEngineVersionsInput`<sup>Optional</sup> <a name="preferredEngineVersionsInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersionsInput"></a>

```typescript
public readonly preferredEngineVersionsInput: string[];
```

- *Type:* string[]

---

##### `preferredInstanceClassesInput`<sup>Optional</sup> <a name="preferredInstanceClassesInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```typescript
public readonly preferredInstanceClassesInput: string[];
```

- *Type:* string[]

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `supportsEnhancedMonitoringInput`<sup>Optional</sup> <a name="supportsEnhancedMonitoringInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoringInput"></a>

```typescript
public readonly supportsEnhancedMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsGlobalDatabasesInput`<sup>Optional</sup> <a name="supportsGlobalDatabasesInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabasesInput"></a>

```typescript
public readonly supportsGlobalDatabasesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsIamDatabaseAuthenticationInput`<sup>Optional</sup> <a name="supportsIamDatabaseAuthenticationInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthenticationInput"></a>

```typescript
public readonly supportsIamDatabaseAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsIopsInput`<sup>Optional</sup> <a name="supportsIopsInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIopsInput"></a>

```typescript
public readonly supportsIopsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsKerberosAuthenticationInput`<sup>Optional</sup> <a name="supportsKerberosAuthenticationInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthenticationInput"></a>

```typescript
public readonly supportsKerberosAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsPerformanceInsightsInput`<sup>Optional</sup> <a name="supportsPerformanceInsightsInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsightsInput"></a>

```typescript
public readonly supportsPerformanceInsightsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsStorageAutoscalingInput`<sup>Optional</sup> <a name="supportsStorageAutoscalingInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscalingInput"></a>

```typescript
public readonly supportsStorageAutoscalingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsStorageEncryptionInput`<sup>Optional</sup> <a name="supportsStorageEncryptionInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryptionInput"></a>

```typescript
public readonly supportsStorageEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpcInput"></a>

```typescript
public readonly vpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneGroup`<sup>Required</sup> <a name="availabilityZoneGroup" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroup"></a>

```typescript
public readonly availabilityZoneGroup: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `preferredEngineVersions`<sup>Required</sup> <a name="preferredEngineVersions" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersions"></a>

```typescript
public readonly preferredEngineVersions: string[];
```

- *Type:* string[]

---

##### `preferredInstanceClasses`<sup>Required</sup> <a name="preferredInstanceClasses" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClasses"></a>

```typescript
public readonly preferredInstanceClasses: string[];
```

- *Type:* string[]

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `supportsEnhancedMonitoring`<sup>Required</sup> <a name="supportsEnhancedMonitoring" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoring"></a>

```typescript
public readonly supportsEnhancedMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsGlobalDatabases`<sup>Required</sup> <a name="supportsGlobalDatabases" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabases"></a>

```typescript
public readonly supportsGlobalDatabases: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsIamDatabaseAuthentication`<sup>Required</sup> <a name="supportsIamDatabaseAuthentication" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthentication"></a>

```typescript
public readonly supportsIamDatabaseAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsIops`<sup>Required</sup> <a name="supportsIops" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIops"></a>

```typescript
public readonly supportsIops: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsKerberosAuthentication`<sup>Required</sup> <a name="supportsKerberosAuthentication" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthentication"></a>

```typescript
public readonly supportsKerberosAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsPerformanceInsights`<sup>Required</sup> <a name="supportsPerformanceInsights" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsights"></a>

```typescript
public readonly supportsPerformanceInsights: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsStorageAutoscaling`<sup>Required</sup> <a name="supportsStorageAutoscaling" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscaling"></a>

```typescript
public readonly supportsStorageAutoscaling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportsStorageEncryption`<sup>Required</sup> <a name="supportsStorageEncryption" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryption"></a>

```typescript
public readonly supportsStorageEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpc"></a>

```typescript
public readonly vpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsOrderableDbInstanceConfig <a name="DataAwsRdsOrderableDbInstanceConfig" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.Initializer"></a>

```typescript
import { dataAwsRdsOrderableDbInstance } from '@cdktf/aws-cdk'

const dataAwsRdsOrderableDbInstanceConfig: dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.availabilityZoneGroup">availabilityZoneGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.instanceClass">instanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredEngineVersions">preferredEngineVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsEnhancedMonitoring">supportsEnhancedMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsGlobalDatabases">supportsGlobalDatabases</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIamDatabaseAuthentication">supportsIamDatabaseAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIops">supportsIops</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsKerberosAuthentication">supportsKerberosAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsPerformanceInsights">supportsPerformanceInsights</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageAutoscaling">supportsStorageAutoscaling</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageEncryption">supportsStorageEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.vpc">vpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}.

---

##### `availabilityZoneGroup`<sup>Optional</sup> <a name="availabilityZoneGroup" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.availabilityZoneGroup"></a>

```typescript
public readonly availabilityZoneGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceClass`<sup>Optional</sup> <a name="instanceClass" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}.

---

##### `preferredEngineVersions`<sup>Optional</sup> <a name="preferredEngineVersions" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredEngineVersions"></a>

```typescript
public readonly preferredEngineVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}.

---

##### `preferredInstanceClasses`<sup>Optional</sup> <a name="preferredInstanceClasses" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```typescript
public readonly preferredInstanceClasses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}.

---

##### `supportsEnhancedMonitoring`<sup>Optional</sup> <a name="supportsEnhancedMonitoring" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsEnhancedMonitoring"></a>

```typescript
public readonly supportsEnhancedMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}.

---

##### `supportsGlobalDatabases`<sup>Optional</sup> <a name="supportsGlobalDatabases" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsGlobalDatabases"></a>

```typescript
public readonly supportsGlobalDatabases: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}.

---

##### `supportsIamDatabaseAuthentication`<sup>Optional</sup> <a name="supportsIamDatabaseAuthentication" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIamDatabaseAuthentication"></a>

```typescript
public readonly supportsIamDatabaseAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}.

---

##### `supportsIops`<sup>Optional</sup> <a name="supportsIops" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIops"></a>

```typescript
public readonly supportsIops: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}.

---

##### `supportsKerberosAuthentication`<sup>Optional</sup> <a name="supportsKerberosAuthentication" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsKerberosAuthentication"></a>

```typescript
public readonly supportsKerberosAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}.

---

##### `supportsPerformanceInsights`<sup>Optional</sup> <a name="supportsPerformanceInsights" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsPerformanceInsights"></a>

```typescript
public readonly supportsPerformanceInsights: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}.

---

##### `supportsStorageAutoscaling`<sup>Optional</sup> <a name="supportsStorageAutoscaling" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageAutoscaling"></a>

```typescript
public readonly supportsStorageAutoscaling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}.

---

##### `supportsStorageEncryption`<sup>Optional</sup> <a name="supportsStorageEncryption" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageEncryption"></a>

```typescript
public readonly supportsStorageEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/aws-cdk.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.vpc"></a>

```typescript
public readonly vpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}.

---



