# `data_aws_lakeformation_data_lake_settings`

Refer to the Terraform Registory for docs: [`data_aws_lakeformation_data_lake_settings`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_data_lake_settings).

# `dataAwsLakeformationDataLakeSettings` Submodule <a name="`dataAwsLakeformationDataLakeSettings` Submodule" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLakeformationDataLakeSettings <a name="DataAwsLakeformationDataLakeSettings" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/aws-cdk'

new dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings(scope: Construct, id: string, config?: DataAwsLakeformationDataLakeSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig">DataAwsLakeformationDataLakeSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig">DataAwsLakeformationDataLakeSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/aws-cdk'

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/aws-cdk'

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/aws-cdk'

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.admins">admins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.trustedResourceOwners">trustedResourceOwners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `admins`<sup>Required</sup> <a name="admins" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.admins"></a>

```typescript
public readonly admins: string[];
```

- *Type:* string[]

---

##### `createDatabaseDefaultPermissions`<sup>Required</sup> <a name="createDatabaseDefaultPermissions" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createDatabaseDefaultPermissions"></a>

```typescript
public readonly createDatabaseDefaultPermissions: DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a>

---

##### `createTableDefaultPermissions`<sup>Required</sup> <a name="createTableDefaultPermissions" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createTableDefaultPermissions"></a>

```typescript
public readonly createTableDefaultPermissions: DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a>

---

##### `trustedResourceOwners`<sup>Required</sup> <a name="trustedResourceOwners" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.trustedResourceOwners"></a>

```typescript
public readonly trustedResourceOwners: string[];
```

- *Type:* string[]

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLakeformationDataLakeSettingsConfig <a name="DataAwsLakeformationDataLakeSettingsConfig" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/aws-cdk'

const dataAwsLakeformationDataLakeSettingsConfig: dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/aws-cdk'

const dataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions: dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions = { ... }
```


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/aws-cdk'

const dataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions: dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/aws-cdk'

new dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get"></a>

```typescript
public get(index: number): DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/aws-cdk'

new dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>

---


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/aws-cdk'

new dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get"></a>

```typescript
public get(index: number): DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsLakeformationDataLakeSettings } from '@cdktf/aws-cdk'

new dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions</a>

---



