# `dataAwsAmi` Submodule <a name="`dataAwsAmi` Submodule" id="@cdktf/aws-cdk.dataAwsAmi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAmi <a name="DataAwsAmi" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami aws_ami}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.Initializer"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

new dataAwsAmi.DataAwsAmi(scope: Construct, id: string, config: DataAwsAmiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig">DataAwsAmiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig">DataAwsAmiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetExecutableUsers">resetExecutableUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsAmiFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter">DataAwsAmiFilter</a>[]

---

##### `resetExecutableUsers` <a name="resetExecutableUsers" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetExecutableUsers"></a>

```typescript
public resetExecutableUsers(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetMostRecent"></a>

```typescript
public resetMostRecent(): void
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetNameRegex"></a>

```typescript
public resetNameRegex(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAmi resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.isConstruct"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

dataAwsAmi.DataAwsAmi.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.isTerraformElement"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

dataAwsAmi.DataAwsAmi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.isTerraformDataSource"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

dataAwsAmi.DataAwsAmi.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.generateConfigForImport"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

dataAwsAmi.DataAwsAmi.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsAmi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAmi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAmi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAmi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList">DataAwsAmiBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.enaSupport">enaSupport</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList">DataAwsAmiFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.hypervisor">hypervisor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.imageLocation">imageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.imageOwnerAlias">imageOwnerAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.kernelId">kernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.platformDetails">platformDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.productCodes">productCodes</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList">DataAwsAmiProductCodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.public">public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.ramdiskId">ramdiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.rootDeviceName">rootDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.rootDeviceType">rootDeviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.rootSnapshotId">rootSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.sriovNetSupport">sriovNetSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.stateReason">stateReason</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.usageOperation">usageOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.virtualizationType">virtualizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.executableUsersInput">executableUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter">DataAwsAmiFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.mostRecentInput">mostRecentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.nameRegexInput">nameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.ownersInput">ownersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.executableUsers">executableUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.owners">owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: DataAwsAmiBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList">DataAwsAmiBlockDeviceMappingsList</a>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enaSupport`<sup>Required</sup> <a name="enaSupport" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.enaSupport"></a>

```typescript
public readonly enaSupport: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.filter"></a>

```typescript
public readonly filter: DataAwsAmiFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList">DataAwsAmiFilterList</a>

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.hypervisor"></a>

```typescript
public readonly hypervisor: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `imageLocation`<sup>Required</sup> <a name="imageLocation" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.imageLocation"></a>

```typescript
public readonly imageLocation: string;
```

- *Type:* string

---

##### `imageOwnerAlias`<sup>Required</sup> <a name="imageOwnerAlias" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.imageOwnerAlias"></a>

```typescript
public readonly imageOwnerAlias: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `platformDetails`<sup>Required</sup> <a name="platformDetails" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.platformDetails"></a>

```typescript
public readonly platformDetails: string;
```

- *Type:* string

---

##### `productCodes`<sup>Required</sup> <a name="productCodes" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.productCodes"></a>

```typescript
public readonly productCodes: DataAwsAmiProductCodesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList">DataAwsAmiProductCodesList</a>

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.public"></a>

```typescript
public readonly public: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ramdiskId`<sup>Required</sup> <a name="ramdiskId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.ramdiskId"></a>

```typescript
public readonly ramdiskId: string;
```

- *Type:* string

---

##### `rootDeviceName`<sup>Required</sup> <a name="rootDeviceName" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.rootDeviceName"></a>

```typescript
public readonly rootDeviceName: string;
```

- *Type:* string

---

##### `rootDeviceType`<sup>Required</sup> <a name="rootDeviceType" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.rootDeviceType"></a>

```typescript
public readonly rootDeviceType: string;
```

- *Type:* string

---

##### `rootSnapshotId`<sup>Required</sup> <a name="rootSnapshotId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.rootSnapshotId"></a>

```typescript
public readonly rootSnapshotId: string;
```

- *Type:* string

---

##### `sriovNetSupport`<sup>Required</sup> <a name="sriovNetSupport" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.sriovNetSupport"></a>

```typescript
public readonly sriovNetSupport: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.stateReason"></a>

```typescript
public readonly stateReason: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `usageOperation`<sup>Required</sup> <a name="usageOperation" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.usageOperation"></a>

```typescript
public readonly usageOperation: string;
```

- *Type:* string

---

##### `virtualizationType`<sup>Required</sup> <a name="virtualizationType" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.virtualizationType"></a>

```typescript
public readonly virtualizationType: string;
```

- *Type:* string

---

##### `executableUsersInput`<sup>Optional</sup> <a name="executableUsersInput" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.executableUsersInput"></a>

```typescript
public readonly executableUsersInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsAmiFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter">DataAwsAmiFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.mostRecentInput"></a>

```typescript
public readonly mostRecentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.nameRegexInput"></a>

```typescript
public readonly nameRegexInput: string;
```

- *Type:* string

---

##### `ownersInput`<sup>Optional</sup> <a name="ownersInput" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.ownersInput"></a>

```typescript
public readonly ownersInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `executableUsers`<sup>Required</sup> <a name="executableUsers" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.executableUsers"></a>

```typescript
public readonly executableUsers: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAmiBlockDeviceMappings <a name="DataAwsAmiBlockDeviceMappings" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappings.Initializer"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

const dataAwsAmiBlockDeviceMappings: dataAwsAmi.DataAwsAmiBlockDeviceMappings = { ... }
```


### DataAwsAmiConfig <a name="DataAwsAmiConfig" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.Initializer"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

const dataAwsAmiConfig: dataAwsAmi.DataAwsAmiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.owners">owners</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#owners DataAwsAmi#owners}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.executableUsers">executableUsers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#executable_users DataAwsAmi#executable_users}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter">DataAwsAmiFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#id DataAwsAmi#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#most_recent DataAwsAmi#most_recent}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.nameRegex">nameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#name_regex DataAwsAmi#name_regex}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#tags DataAwsAmi#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#owners DataAwsAmi#owners}.

---

##### `executableUsers`<sup>Optional</sup> <a name="executableUsers" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.executableUsers"></a>

```typescript
public readonly executableUsers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#executable_users DataAwsAmi#executable_users}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsAmiFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter">DataAwsAmiFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#filter DataAwsAmi#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#id DataAwsAmi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#most_recent DataAwsAmi#most_recent}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#name_regex DataAwsAmi#name_regex}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#tags DataAwsAmi#tags}.

---

### DataAwsAmiFilter <a name="DataAwsAmiFilter" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter.Initializer"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

const dataAwsAmiFilter: dataAwsAmi.DataAwsAmiFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#name DataAwsAmi#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#values DataAwsAmi#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#name DataAwsAmi#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ami#values DataAwsAmi#values}.

---

### DataAwsAmiProductCodes <a name="DataAwsAmiProductCodes" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodes.Initializer"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

const dataAwsAmiProductCodes: dataAwsAmi.DataAwsAmiProductCodes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAmiBlockDeviceMappingsList <a name="DataAwsAmiBlockDeviceMappingsList" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.Initializer"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

new dataAwsAmi.DataAwsAmiBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): DataAwsAmiBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAmiBlockDeviceMappingsOutputReference <a name="DataAwsAmiBlockDeviceMappingsOutputReference" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

new dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappings">DataAwsAmiBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAmiBlockDeviceMappings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiBlockDeviceMappings">DataAwsAmiBlockDeviceMappings</a>

---


### DataAwsAmiFilterList <a name="DataAwsAmiFilterList" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.Initializer"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

new dataAwsAmi.DataAwsAmiFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.get"></a>

```typescript
public get(index: number): DataAwsAmiFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter">DataAwsAmiFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAmiFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter">DataAwsAmiFilter</a>[]

---


### DataAwsAmiFilterOutputReference <a name="DataAwsAmiFilterOutputReference" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

new dataAwsAmi.DataAwsAmiFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter">DataAwsAmiFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAmiFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiFilter">DataAwsAmiFilter</a>

---


### DataAwsAmiProductCodesList <a name="DataAwsAmiProductCodesList" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.Initializer"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

new dataAwsAmi.DataAwsAmiProductCodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.get"></a>

```typescript
public get(index: number): DataAwsAmiProductCodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAmiProductCodesOutputReference <a name="DataAwsAmiProductCodesOutputReference" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.Initializer"></a>

```typescript
import { dataAwsAmi } from '@cdktf/aws-cdk'

new dataAwsAmi.DataAwsAmiProductCodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.property.productCodeId">productCodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.property.productCodeType">productCodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodes">DataAwsAmiProductCodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `productCodeId`<sup>Required</sup> <a name="productCodeId" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.property.productCodeId"></a>

```typescript
public readonly productCodeId: string;
```

- *Type:* string

---

##### `productCodeType`<sup>Required</sup> <a name="productCodeType" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.property.productCodeType"></a>

```typescript
public readonly productCodeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAmiProductCodes;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsAmi.DataAwsAmiProductCodes">DataAwsAmiProductCodes</a>

---



