# `data_aws_imagebuilder_image_recipes`

Refer to the Terraform Registory for docs: [`data_aws_imagebuilder_image_recipes`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes).

# `dataAwsImagebuilderImageRecipes` Submodule <a name="`dataAwsImagebuilderImageRecipes` Submodule" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderImageRecipes <a name="DataAwsImagebuilderImageRecipes" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes aws_imagebuilder_image_recipes}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/aws-cdk'

new dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes(scope: Construct, id: string, config?: DataAwsImagebuilderImageRecipesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig">DataAwsImagebuilderImageRecipesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig">DataAwsImagebuilderImageRecipesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetOwner">resetOwner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsImagebuilderImageRecipesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.resetOwner"></a>

```typescript
public resetOwner(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsImagebuilderImageRecipes resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isConstruct"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/aws-cdk'

dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformElement"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/aws-cdk'

dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformDataSource"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/aws-cdk'

dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.generateConfigForImport"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/aws-cdk'

dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsImagebuilderImageRecipes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsImagebuilderImageRecipes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsImagebuilderImageRecipes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsImagebuilderImageRecipes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.arns">arns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList">DataAwsImagebuilderImageRecipesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.owner">owner</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.arns"></a>

```typescript
public readonly arns: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.filter"></a>

```typescript
public readonly filter: DataAwsImagebuilderImageRecipesFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList">DataAwsImagebuilderImageRecipesFilterList</a>

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsImagebuilderImageRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderImageRecipesConfig <a name="DataAwsImagebuilderImageRecipesConfig" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.Initializer"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/aws-cdk'

const dataAwsImagebuilderImageRecipesConfig: dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes#id DataAwsImagebuilderImageRecipes#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes#owner DataAwsImagebuilderImageRecipes#owner}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsImagebuilderImageRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes#filter DataAwsImagebuilderImageRecipes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes#id DataAwsImagebuilderImageRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes#owner DataAwsImagebuilderImageRecipes#owner}.

---

### DataAwsImagebuilderImageRecipesFilter <a name="DataAwsImagebuilderImageRecipesFilter" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter.Initializer"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/aws-cdk'

const dataAwsImagebuilderImageRecipesFilter: dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes#name DataAwsImagebuilderImageRecipes#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes#values DataAwsImagebuilderImageRecipes#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes#name DataAwsImagebuilderImageRecipes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/imagebuilder_image_recipes#values DataAwsImagebuilderImageRecipes#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderImageRecipesFilterList <a name="DataAwsImagebuilderImageRecipesFilterList" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/aws-cdk'

new dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.get"></a>

```typescript
public get(index: number): DataAwsImagebuilderImageRecipesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsImagebuilderImageRecipesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>[]

---


### DataAwsImagebuilderImageRecipesFilterOutputReference <a name="DataAwsImagebuilderImageRecipesFilterOutputReference" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsImagebuilderImageRecipes } from '@cdktf/aws-cdk'

new dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsImagebuilderImageRecipesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsImagebuilderImageRecipes.DataAwsImagebuilderImageRecipesFilter">DataAwsImagebuilderImageRecipesFilter</a>

---



