# `aws_servicecatalog_product_portfolio_association`

Refer to the Terraform Registory for docs: [`aws_servicecatalog_product_portfolio_association`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association).

# `servicecatalogProductPortfolioAssociation` Submodule <a name="`servicecatalogProductPortfolioAssociation` Submodule" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProductPortfolioAssociation <a name="ServicecatalogProductPortfolioAssociation" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association aws_servicecatalog_product_portfolio_association}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/aws-cdk'

new servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation(scope: Construct, id: string, config: ServicecatalogProductPortfolioAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig">ServicecatalogProductPortfolioAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig">ServicecatalogProductPortfolioAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetSourcePortfolioId">resetSourcePortfolioId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSourcePortfolioId` <a name="resetSourcePortfolioId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.resetSourcePortfolioId"></a>

```typescript
public resetSourcePortfolioId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicecatalogProductPortfolioAssociation resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/aws-cdk'

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/aws-cdk'

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/aws-cdk'

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/aws-cdk'

servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServicecatalogProductPortfolioAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogProductPortfolioAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogProductPortfolioAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicecatalogProductPortfolioAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioIdInput">portfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioIdInput">sourcePortfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioId">portfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioId">sourcePortfolioId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portfolioIdInput`<sup>Optional</sup> <a name="portfolioIdInput" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioIdInput"></a>

```typescript
public readonly portfolioIdInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `sourcePortfolioIdInput`<sup>Optional</sup> <a name="sourcePortfolioIdInput" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioIdInput"></a>

```typescript
public readonly sourcePortfolioIdInput: string;
```

- *Type:* string

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `sourcePortfolioId`<sup>Required</sup> <a name="sourcePortfolioId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.sourcePortfolioId"></a>

```typescript
public readonly sourcePortfolioId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProductPortfolioAssociationConfig <a name="ServicecatalogProductPortfolioAssociationConfig" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.Initializer"></a>

```typescript
import { servicecatalogProductPortfolioAssociation } from '@cdktf/aws-cdk'

const servicecatalogProductPortfolioAssociationConfig: servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.portfolioId">portfolioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.sourcePortfolioId">sourcePortfolioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourcePortfolioId`<sup>Optional</sup> <a name="sourcePortfolioId" id="@cdktf/aws-cdk.servicecatalogProductPortfolioAssociation.ServicecatalogProductPortfolioAssociationConfig.property.sourcePortfolioId"></a>

```typescript
public readonly sourcePortfolioId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}.

---



