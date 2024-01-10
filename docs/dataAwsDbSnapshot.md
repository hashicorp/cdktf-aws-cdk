# `dataAwsDbSnapshot` Submodule <a name="`dataAwsDbSnapshot` Submodule" id="@cdktf/aws-cdk.dataAwsDbSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDbSnapshot <a name="DataAwsDbSnapshot" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot aws_db_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer"></a>

```typescript
import { dataAwsDbSnapshot } from '@cdktf/aws-cdk'

new dataAwsDbSnapshot.DataAwsDbSnapshot(scope: Construct, id: string, config?: DataAwsDbSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig">DataAwsDbSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig">DataAwsDbSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbInstanceIdentifier">resetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbSnapshotIdentifier">resetDbSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludePublic">resetIncludePublic</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludeShared">resetIncludeShared</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetSnapshotType">resetSnapshotType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDbInstanceIdentifier` <a name="resetDbInstanceIdentifier" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbInstanceIdentifier"></a>

```typescript
public resetDbInstanceIdentifier(): void
```

##### `resetDbSnapshotIdentifier` <a name="resetDbSnapshotIdentifier" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbSnapshotIdentifier"></a>

```typescript
public resetDbSnapshotIdentifier(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludePublic` <a name="resetIncludePublic" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludePublic"></a>

```typescript
public resetIncludePublic(): void
```

##### `resetIncludeShared` <a name="resetIncludeShared" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludeShared"></a>

```typescript
public resetIncludeShared(): void
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetMostRecent"></a>

```typescript
public resetMostRecent(): void
```

##### `resetSnapshotType` <a name="resetSnapshotType" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.resetSnapshotType"></a>

```typescript
public resetSnapshotType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsDbSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct"></a>

```typescript
import { dataAwsDbSnapshot } from '@cdktf/aws-cdk'

dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement"></a>

```typescript
import { dataAwsDbSnapshot } from '@cdktf/aws-cdk'

dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource"></a>

```typescript
import { dataAwsDbSnapshot } from '@cdktf/aws-cdk'

dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport"></a>

```typescript
import { dataAwsDbSnapshot } from '@cdktf/aws-cdk'

dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsDbSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDbSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDbSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDbSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotArn">dbSnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.optionGroupName">optionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotCreateTime">snapshotCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceDbSnapshotIdentifier">sourceDbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceRegion">sourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifierInput">dbInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifierInput">dbSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublicInput">includePublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeSharedInput">includeSharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecentInput">mostRecentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotTypeInput">snapshotTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublic">includePublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeShared">includeShared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `dbSnapshotArn`<sup>Required</sup> <a name="dbSnapshotArn" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotArn"></a>

```typescript
public readonly dbSnapshotArn: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `optionGroupName`<sup>Required</sup> <a name="optionGroupName" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.optionGroupName"></a>

```typescript
public readonly optionGroupName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="snapshotCreateTime" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotCreateTime"></a>

```typescript
public readonly snapshotCreateTime: string;
```

- *Type:* string

---

##### `sourceDbSnapshotIdentifier`<sup>Required</sup> <a name="sourceDbSnapshotIdentifier" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceDbSnapshotIdentifier"></a>

```typescript
public readonly sourceDbSnapshotIdentifier: string;
```

- *Type:* string

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `dbInstanceIdentifierInput`<sup>Optional</sup> <a name="dbInstanceIdentifierInput" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifierInput"></a>

```typescript
public readonly dbInstanceIdentifierInput: string;
```

- *Type:* string

---

##### `dbSnapshotIdentifierInput`<sup>Optional</sup> <a name="dbSnapshotIdentifierInput" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifierInput"></a>

```typescript
public readonly dbSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includePublicInput`<sup>Optional</sup> <a name="includePublicInput" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublicInput"></a>

```typescript
public readonly includePublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeSharedInput`<sup>Optional</sup> <a name="includeSharedInput" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeSharedInput"></a>

```typescript
public readonly includeSharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecentInput"></a>

```typescript
public readonly mostRecentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotTypeInput`<sup>Optional</sup> <a name="snapshotTypeInput" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotTypeInput"></a>

```typescript
public readonly snapshotTypeInput: string;
```

- *Type:* string

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

---

##### `dbSnapshotIdentifier`<sup>Required</sup> <a name="dbSnapshotIdentifier" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifier"></a>

```typescript
public readonly dbSnapshotIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includePublic`<sup>Required</sup> <a name="includePublic" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublic"></a>

```typescript
public readonly includePublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeShared`<sup>Required</sup> <a name="includeShared" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeShared"></a>

```typescript
public readonly includeShared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDbSnapshotConfig <a name="DataAwsDbSnapshotConfig" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.Initializer"></a>

```typescript
import { dataAwsDbSnapshot } from '@cdktf/aws-cdk'

const dataAwsDbSnapshotConfig: dataAwsDbSnapshot.DataAwsDbSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#id DataAwsDbSnapshot#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includePublic">includePublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#include_public DataAwsDbSnapshot#include_public}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includeShared">includeShared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#include_shared DataAwsDbSnapshot#include_shared}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#most_recent DataAwsDbSnapshot#most_recent}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.snapshotType">snapshotType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#snapshot_type DataAwsDbSnapshot#snapshot_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="dbInstanceIdentifier" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}.

---

##### `dbSnapshotIdentifier`<sup>Optional</sup> <a name="dbSnapshotIdentifier" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbSnapshotIdentifier"></a>

```typescript
public readonly dbSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#id DataAwsDbSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includePublic`<sup>Optional</sup> <a name="includePublic" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includePublic"></a>

```typescript
public readonly includePublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#include_public DataAwsDbSnapshot#include_public}.

---

##### `includeShared`<sup>Optional</sup> <a name="includeShared" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includeShared"></a>

```typescript
public readonly includeShared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#include_shared DataAwsDbSnapshot#include_shared}.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#most_recent DataAwsDbSnapshot#most_recent}.

---

##### `snapshotType`<sup>Optional</sup> <a name="snapshotType" id="@cdktf/aws-cdk.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/db_snapshot#snapshot_type DataAwsDbSnapshot#snapshot_type}.

---



