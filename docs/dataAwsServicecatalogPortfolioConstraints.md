# `data_aws_servicecatalog_portfolio_constraints`

Refer to the Terraform Registory for docs: [`data_aws_servicecatalog_portfolio_constraints`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_portfolio_constraints).

# `dataAwsServicecatalogPortfolioConstraints` Submodule <a name="`dataAwsServicecatalogPortfolioConstraints` Submodule" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogPortfolioConstraints <a name="DataAwsServicecatalogPortfolioConstraints" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_portfolio_constraints aws_servicecatalog_portfolio_constraints}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer"></a>

```typescript
import { dataAwsServicecatalogPortfolioConstraints } from '@cdktf/aws-cdk'

new dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints(scope: Construct, id: string, config: DataAwsServicecatalogPortfolioConstraintsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig">DataAwsServicecatalogPortfolioConstraintsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig">DataAwsServicecatalogPortfolioConstraintsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetProductId">resetProductId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProductId` <a name="resetProductId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetProductId"></a>

```typescript
public resetProductId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct"></a>

```typescript
import { dataAwsServicecatalogPortfolioConstraints } from '@cdktf/aws-cdk'

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement"></a>

```typescript
import { dataAwsServicecatalogPortfolioConstraints } from '@cdktf/aws-cdk'

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource"></a>

```typescript
import { dataAwsServicecatalogPortfolioConstraints } from '@cdktf/aws-cdk'

dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.details">details</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList">DataAwsServicecatalogPortfolioConstraintsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioIdInput">portfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioId">portfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productId">productId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.details"></a>

```typescript
public readonly details: DataAwsServicecatalogPortfolioConstraintsDetailsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList">DataAwsServicecatalogPortfolioConstraintsDetailsList</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portfolioIdInput`<sup>Optional</sup> <a name="portfolioIdInput" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioIdInput"></a>

```typescript
public readonly portfolioIdInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogPortfolioConstraintsConfig <a name="DataAwsServicecatalogPortfolioConstraintsConfig" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.Initializer"></a>

```typescript
import { dataAwsServicecatalogPortfolioConstraints } from '@cdktf/aws-cdk'

const dataAwsServicecatalogPortfolioConstraintsConfig: dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.portfolioId">portfolioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}.

---

### DataAwsServicecatalogPortfolioConstraintsDetails <a name="DataAwsServicecatalogPortfolioConstraintsDetails" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails.Initializer"></a>

```typescript
import { dataAwsServicecatalogPortfolioConstraints } from '@cdktf/aws-cdk'

const dataAwsServicecatalogPortfolioConstraintsDetails: dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogPortfolioConstraintsDetailsList <a name="DataAwsServicecatalogPortfolioConstraintsDetailsList" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer"></a>

```typescript
import { dataAwsServicecatalogPortfolioConstraints } from '@cdktf/aws-cdk'

new dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get"></a>

```typescript
public get(index: number): DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference <a name="DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsServicecatalogPortfolioConstraints } from '@cdktf/aws-cdk'

new dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.constraintId">constraintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.portfolioId">portfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails">DataAwsServicecatalogPortfolioConstraintsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintId`<sup>Required</sup> <a name="constraintId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.constraintId"></a>

```typescript
public readonly constraintId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsServicecatalogPortfolioConstraintsDetails;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails">DataAwsServicecatalogPortfolioConstraintsDetails</a>

---



