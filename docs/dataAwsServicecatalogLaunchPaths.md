# `dataAwsServicecatalogLaunchPaths` Submodule <a name="`dataAwsServicecatalogLaunchPaths` Submodule" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogLaunchPaths <a name="DataAwsServicecatalogLaunchPaths" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_launch_paths aws_servicecatalog_launch_paths}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

new dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths(scope: Construct, id: string, config: DataAwsServicecatalogLaunchPathsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig">DataAwsServicecatalogLaunchPathsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig">DataAwsServicecatalogLaunchPathsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsServicecatalogLaunchPaths resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.generateConfigForImport"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsServicecatalogLaunchPaths resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsServicecatalogLaunchPaths to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsServicecatalogLaunchPaths that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_launch_paths#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsServicecatalogLaunchPaths to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.summaries">summaries</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList">DataAwsServicecatalogLaunchPathsSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productId">productId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `summaries`<sup>Required</sup> <a name="summaries" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.summaries"></a>

```typescript
public readonly summaries: DataAwsServicecatalogLaunchPathsSummariesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList">DataAwsServicecatalogLaunchPathsSummariesList</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogLaunchPathsConfig <a name="DataAwsServicecatalogLaunchPathsConfig" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

const dataAwsServicecatalogLaunchPathsConfig: dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_launch_paths#product_id DataAwsServicecatalogLaunchPaths#product_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_launch_paths#accept_language DataAwsServicecatalogLaunchPaths#accept_language}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_launch_paths#id DataAwsServicecatalogLaunchPaths#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_launch_paths#product_id DataAwsServicecatalogLaunchPaths#product_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_launch_paths#accept_language DataAwsServicecatalogLaunchPaths#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_launch_paths#id DataAwsServicecatalogLaunchPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsServicecatalogLaunchPathsSummaries <a name="DataAwsServicecatalogLaunchPathsSummaries" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

const dataAwsServicecatalogLaunchPathsSummaries: dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries = { ... }
```


### DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

const dataAwsServicecatalogLaunchPathsSummariesConstraintSummaries: dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

new dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get"></a>

```typescript
public get(index: number): DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

new dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries">DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries">DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries</a>

---


### DataAwsServicecatalogLaunchPathsSummariesList <a name="DataAwsServicecatalogLaunchPathsSummariesList" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

new dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get"></a>

```typescript
public get(index: number): DataAwsServicecatalogLaunchPathsSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsServicecatalogLaunchPathsSummariesOutputReference <a name="DataAwsServicecatalogLaunchPathsSummariesOutputReference" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer"></a>

```typescript
import { dataAwsServicecatalogLaunchPaths } from '@cdktf/aws-cdk'

new dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.constraintSummaries">constraintSummaries</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList">DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.pathId">pathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries">DataAwsServicecatalogLaunchPathsSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintSummaries`<sup>Required</sup> <a name="constraintSummaries" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.constraintSummaries"></a>

```typescript
public readonly constraintSummaries: DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList">DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pathId`<sup>Required</sup> <a name="pathId" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.pathId"></a>

```typescript
public readonly pathId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsServicecatalogLaunchPathsSummaries;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries">DataAwsServicecatalogLaunchPathsSummaries</a>

---



