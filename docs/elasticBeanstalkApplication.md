# `elasticBeanstalkApplication` Submodule <a name="`elasticBeanstalkApplication` Submodule" id="@cdktf/aws-cdk.elasticBeanstalkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkApplication <a name="ElasticBeanstalkApplication" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application aws_elastic_beanstalk_application}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer"></a>

```typescript
import { elasticBeanstalkApplication } from '@cdktf/aws-cdk'

new elasticBeanstalkApplication.ElasticBeanstalkApplication(scope: Construct, id: string, config: ElasticBeanstalkApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig">ElasticBeanstalkApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig">ElasticBeanstalkApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle">putAppversionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetAppversionLifecycle">resetAppversionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppversionLifecycle` <a name="putAppversionLifecycle" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle"></a>

```typescript
public putAppversionLifecycle(value: ElasticBeanstalkApplicationAppversionLifecycle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

---

##### `resetAppversionLifecycle` <a name="resetAppversionLifecycle" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetAppversionLifecycle"></a>

```typescript
public resetAppversionLifecycle(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticBeanstalkApplication resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct"></a>

```typescript
import { elasticBeanstalkApplication } from '@cdktf/aws-cdk'

elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement"></a>

```typescript
import { elasticBeanstalkApplication } from '@cdktf/aws-cdk'

elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource"></a>

```typescript
import { elasticBeanstalkApplication } from '@cdktf/aws-cdk'

elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.generateConfigForImport"></a>

```typescript
import { elasticBeanstalkApplication } from '@cdktf/aws-cdk'

elasticBeanstalkApplication.ElasticBeanstalkApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ElasticBeanstalkApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticBeanstalkApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticBeanstalkApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticBeanstalkApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycle">appversionLifecycle</a></code> | <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference">ElasticBeanstalkApplicationAppversionLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycleInput">appversionLifecycleInput</a></code> | <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appversionLifecycle`<sup>Required</sup> <a name="appversionLifecycle" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycle"></a>

```typescript
public readonly appversionLifecycle: ElasticBeanstalkApplicationAppversionLifecycleOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference">ElasticBeanstalkApplicationAppversionLifecycleOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `appversionLifecycleInput`<sup>Optional</sup> <a name="appversionLifecycleInput" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycleInput"></a>

```typescript
public readonly appversionLifecycleInput: ElasticBeanstalkApplicationAppversionLifecycle;
```

- *Type:* <a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkApplicationAppversionLifecycle <a name="ElasticBeanstalkApplicationAppversionLifecycle" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.Initializer"></a>

```typescript
import { elasticBeanstalkApplication } from '@cdktf/aws-cdk'

const elasticBeanstalkApplicationAppversionLifecycle: elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.serviceRole">serviceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#service_role ElasticBeanstalkApplication#service_role}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.deleteSourceFromS3">deleteSourceFromS3</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxAgeInDays">maxAgeInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxCount">maxCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#max_count ElasticBeanstalkApplication#max_count}. |

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#service_role ElasticBeanstalkApplication#service_role}.

---

##### `deleteSourceFromS3`<sup>Optional</sup> <a name="deleteSourceFromS3" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.deleteSourceFromS3"></a>

```typescript
public readonly deleteSourceFromS3: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}.

---

##### `maxAgeInDays`<sup>Optional</sup> <a name="maxAgeInDays" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxAgeInDays"></a>

```typescript
public readonly maxAgeInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}.

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#max_count ElasticBeanstalkApplication#max_count}.

---

### ElasticBeanstalkApplicationConfig <a name="ElasticBeanstalkApplicationConfig" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.Initializer"></a>

```typescript
import { elasticBeanstalkApplication } from '@cdktf/aws-cdk'

const elasticBeanstalkApplicationConfig: elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.appversionLifecycle">appversionLifecycle</a></code> | <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | appversion_lifecycle block. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}.

---

##### `appversionLifecycle`<sup>Optional</sup> <a name="appversionLifecycle" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.appversionLifecycle"></a>

```typescript
public readonly appversionLifecycle: ElasticBeanstalkApplicationAppversionLifecycle;
```

- *Type:* <a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

appversion_lifecycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#appversion_lifecycle ElasticBeanstalkApplication#appversion_lifecycle}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkApplicationAppversionLifecycleOutputReference <a name="ElasticBeanstalkApplicationAppversionLifecycleOutputReference" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer"></a>

```typescript
import { elasticBeanstalkApplication } from '@cdktf/aws-cdk'

new elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetDeleteSourceFromS3">resetDeleteSourceFromS3</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxAgeInDays">resetMaxAgeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxCount">resetMaxCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteSourceFromS3` <a name="resetDeleteSourceFromS3" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetDeleteSourceFromS3"></a>

```typescript
public resetDeleteSourceFromS3(): void
```

##### `resetMaxAgeInDays` <a name="resetMaxAgeInDays" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxAgeInDays"></a>

```typescript
public resetMaxAgeInDays(): void
```

##### `resetMaxCount` <a name="resetMaxCount" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxCount"></a>

```typescript
public resetMaxCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3Input">deleteSourceFromS3Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDaysInput">maxAgeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCountInput">maxCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRoleInput">serviceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3">deleteSourceFromS3</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays">maxAgeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount">maxCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole">serviceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteSourceFromS3Input`<sup>Optional</sup> <a name="deleteSourceFromS3Input" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3Input"></a>

```typescript
public readonly deleteSourceFromS3Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxAgeInDaysInput`<sup>Optional</sup> <a name="maxAgeInDaysInput" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDaysInput"></a>

```typescript
public readonly maxAgeInDaysInput: number;
```

- *Type:* number

---

##### `maxCountInput`<sup>Optional</sup> <a name="maxCountInput" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCountInput"></a>

```typescript
public readonly maxCountInput: number;
```

- *Type:* number

---

##### `serviceRoleInput`<sup>Optional</sup> <a name="serviceRoleInput" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRoleInput"></a>

```typescript
public readonly serviceRoleInput: string;
```

- *Type:* string

---

##### `deleteSourceFromS3`<sup>Required</sup> <a name="deleteSourceFromS3" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3"></a>

```typescript
public readonly deleteSourceFromS3: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxAgeInDays`<sup>Required</sup> <a name="maxAgeInDays" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays"></a>

```typescript
public readonly maxAgeInDays: number;
```

- *Type:* number

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticBeanstalkApplicationAppversionLifecycle;
```

- *Type:* <a href="#@cdktf/aws-cdk.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

---



