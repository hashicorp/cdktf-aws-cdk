# `dataAwsImagebuilderInfrastructureConfiguration` Submodule <a name="`dataAwsImagebuilderInfrastructureConfiguration` Submodule" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderInfrastructureConfiguration <a name="DataAwsImagebuilderInfrastructureConfiguration" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_infrastructure_configuration aws_imagebuilder_infrastructure_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

new dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration(scope: Construct, id: string, config: DataAwsImagebuilderInfrastructureConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig">DataAwsImagebuilderInfrastructureConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig">DataAwsImagebuilderInfrastructureConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsImagebuilderInfrastructureConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isConstruct"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsImagebuilderInfrastructureConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsImagebuilderInfrastructureConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsImagebuilderInfrastructureConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_infrastructure_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsImagebuilderInfrastructureConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateCreated">dateCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateUpdated">dateUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceProfileName">instanceProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.keyPair">keyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.logging">logging</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList">DataAwsImagebuilderInfrastructureConfigurationLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure">terminateInstanceOnFailure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTagsInput">resourceTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTags">resourceTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dateCreated`<sup>Required</sup> <a name="dateCreated" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateCreated"></a>

```typescript
public readonly dateCreated: string;
```

- *Type:* string

---

##### `dateUpdated`<sup>Required</sup> <a name="dateUpdated" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateUpdated"></a>

```typescript
public readonly dateUpdated: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceProfileName`<sup>Required</sup> <a name="instanceProfileName" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceProfileName"></a>

```typescript
public readonly instanceProfileName: string;
```

- *Type:* string

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.logging"></a>

```typescript
public readonly logging: DataAwsImagebuilderInfrastructureConfigurationLoggingList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList">DataAwsImagebuilderInfrastructureConfigurationLoggingList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `terminateInstanceOnFailure`<sup>Required</sup> <a name="terminateInstanceOnFailure" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure"></a>

```typescript
public readonly terminateInstanceOnFailure: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTags"></a>

```typescript
public readonly resourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderInfrastructureConfigurationConfig <a name="DataAwsImagebuilderInfrastructureConfigurationConfig" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

const dataAwsImagebuilderInfrastructureConfigurationConfig: dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_infrastructure_configuration#arn DataAwsImagebuilderInfrastructureConfiguration#arn}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_infrastructure_configuration#id DataAwsImagebuilderInfrastructureConfiguration#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.resourceTags">resourceTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_infrastructure_configuration#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_infrastructure_configuration#tags DataAwsImagebuilderInfrastructureConfiguration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_infrastructure_configuration#arn DataAwsImagebuilderInfrastructureConfiguration#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_infrastructure_configuration#id DataAwsImagebuilderInfrastructureConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.resourceTags"></a>

```typescript
public readonly resourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_infrastructure_configuration#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_infrastructure_configuration#tags DataAwsImagebuilderInfrastructureConfiguration#tags}.

---

### DataAwsImagebuilderInfrastructureConfigurationLogging <a name="DataAwsImagebuilderInfrastructureConfigurationLogging" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging.Initializer"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

const dataAwsImagebuilderInfrastructureConfigurationLogging: dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging = { ... }
```


### DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs.Initializer"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

const dataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs: dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderInfrastructureConfigurationLoggingList <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingList" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

new dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

new dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList">DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging">DataAwsImagebuilderInfrastructureConfigurationLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Logs`<sup>Required</sup> <a name="s3Logs" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs"></a>

```typescript
public readonly s3Logs: DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList">DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderInfrastructureConfigurationLogging;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging">DataAwsImagebuilderInfrastructureConfigurationLogging</a>

---


### DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

new dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderInfrastructureConfiguration } from '@cdktf/aws-cdk'

new dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs">DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs">DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---



