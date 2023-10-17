# `data_aws_availability_zone`

Refer to the Terraform Registory for docs: [`data_aws_availability_zone`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone).

# `dataAwsAvailabilityZone` Submodule <a name="`dataAwsAvailabilityZone` Submodule" id="@cdktf/aws-cdk.dataAwsAvailabilityZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAvailabilityZone <a name="DataAwsAvailabilityZone" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone aws_availability_zone}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer"></a>

```typescript
import { dataAwsAvailabilityZone } from '@cdktf/aws-cdk'

new dataAwsAvailabilityZone.DataAwsAvailabilityZone(scope: Construct, id: string, config?: DataAwsAvailabilityZoneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig">DataAwsAvailabilityZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig">DataAwsAvailabilityZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetAllAvailabilityZones">resetAllAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsAvailabilityZoneFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>[]

---

##### `resetAllAvailabilityZones` <a name="resetAllAvailabilityZones" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetAllAvailabilityZones"></a>

```typescript
public resetAllAvailabilityZones(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetState"></a>

```typescript
public resetState(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAvailabilityZone resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isConstruct"></a>

```typescript
import { dataAwsAvailabilityZone } from '@cdktf/aws-cdk'

dataAwsAvailabilityZone.DataAwsAvailabilityZone.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformElement"></a>

```typescript
import { dataAwsAvailabilityZone } from '@cdktf/aws-cdk'

dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformDataSource"></a>

```typescript
import { dataAwsAvailabilityZone } from '@cdktf/aws-cdk'

dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.generateConfigForImport"></a>

```typescript
import { dataAwsAvailabilityZone } from '@cdktf/aws-cdk'

dataAwsAvailabilityZone.DataAwsAvailabilityZone.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsAvailabilityZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAvailabilityZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAvailabilityZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAvailabilityZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList">DataAwsAvailabilityZoneFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.nameSuffix">nameSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.networkBorderGroup">networkBorderGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.optInStatus">optInStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.parentZoneId">parentZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.parentZoneName">parentZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneType">zoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.allAvailabilityZonesInput">allAvailabilityZonesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.allAvailabilityZones">allAvailabilityZones</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.filter"></a>

```typescript
public readonly filter: DataAwsAvailabilityZoneFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList">DataAwsAvailabilityZoneFilterList</a>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `nameSuffix`<sup>Required</sup> <a name="nameSuffix" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.nameSuffix"></a>

```typescript
public readonly nameSuffix: string;
```

- *Type:* string

---

##### `networkBorderGroup`<sup>Required</sup> <a name="networkBorderGroup" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.networkBorderGroup"></a>

```typescript
public readonly networkBorderGroup: string;
```

- *Type:* string

---

##### `optInStatus`<sup>Required</sup> <a name="optInStatus" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.optInStatus"></a>

```typescript
public readonly optInStatus: string;
```

- *Type:* string

---

##### `parentZoneId`<sup>Required</sup> <a name="parentZoneId" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.parentZoneId"></a>

```typescript
public readonly parentZoneId: string;
```

- *Type:* string

---

##### `parentZoneName`<sup>Required</sup> <a name="parentZoneName" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.parentZoneName"></a>

```typescript
public readonly parentZoneName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `zoneType`<sup>Required</sup> <a name="zoneType" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneType"></a>

```typescript
public readonly zoneType: string;
```

- *Type:* string

---

##### `allAvailabilityZonesInput`<sup>Optional</sup> <a name="allAvailabilityZonesInput" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.allAvailabilityZonesInput"></a>

```typescript
public readonly allAvailabilityZonesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsAvailabilityZoneFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `allAvailabilityZones`<sup>Required</sup> <a name="allAvailabilityZones" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.allAvailabilityZones"></a>

```typescript
public readonly allAvailabilityZones: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAvailabilityZoneConfig <a name="DataAwsAvailabilityZoneConfig" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.Initializer"></a>

```typescript
import { dataAwsAvailabilityZone } from '@cdktf/aws-cdk'

const dataAwsAvailabilityZoneConfig: dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.allAvailabilityZones">allAvailabilityZones</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#all_availability_zones DataAwsAvailabilityZone#all_availability_zones}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#id DataAwsAvailabilityZone#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#name DataAwsAvailabilityZone#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#state DataAwsAvailabilityZone#state}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#zone_id DataAwsAvailabilityZone#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allAvailabilityZones`<sup>Optional</sup> <a name="allAvailabilityZones" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.allAvailabilityZones"></a>

```typescript
public readonly allAvailabilityZones: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#all_availability_zones DataAwsAvailabilityZone#all_availability_zones}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsAvailabilityZoneFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#filter DataAwsAvailabilityZone#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#id DataAwsAvailabilityZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#name DataAwsAvailabilityZone#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#state DataAwsAvailabilityZone#state}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#zone_id DataAwsAvailabilityZone#zone_id}.

---

### DataAwsAvailabilityZoneFilter <a name="DataAwsAvailabilityZoneFilter" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter.Initializer"></a>

```typescript
import { dataAwsAvailabilityZone } from '@cdktf/aws-cdk'

const dataAwsAvailabilityZoneFilter: dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#name DataAwsAvailabilityZone#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#values DataAwsAvailabilityZone#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#name DataAwsAvailabilityZone#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/availability_zone#values DataAwsAvailabilityZone#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAvailabilityZoneFilterList <a name="DataAwsAvailabilityZoneFilterList" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer"></a>

```typescript
import { dataAwsAvailabilityZone } from '@cdktf/aws-cdk'

new dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.get"></a>

```typescript
public get(index: number): DataAwsAvailabilityZoneFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAvailabilityZoneFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>[]

---


### DataAwsAvailabilityZoneFilterOutputReference <a name="DataAwsAvailabilityZoneFilterOutputReference" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsAvailabilityZone } from '@cdktf/aws-cdk'

new dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAvailabilityZoneFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>

---



