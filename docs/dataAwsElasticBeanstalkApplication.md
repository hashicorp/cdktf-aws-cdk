# `data_aws_elastic_beanstalk_application`

Refer to the Terraform Registory for docs: [`data_aws_elastic_beanstalk_application`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elastic_beanstalk_application).

# `dataAwsElasticBeanstalkApplication` Submodule <a name="`dataAwsElasticBeanstalkApplication` Submodule" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticBeanstalkApplication <a name="DataAwsElasticBeanstalkApplication" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elastic_beanstalk_application aws_elastic_beanstalk_application}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer"></a>

```typescript
import { dataAwsElasticBeanstalkApplication } from '@cdktf/aws-cdk'

new dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication(scope: Construct, id: string, config: DataAwsElasticBeanstalkApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig">DataAwsElasticBeanstalkApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig">DataAwsElasticBeanstalkApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isConstruct"></a>

```typescript
import { dataAwsElasticBeanstalkApplication } from '@cdktf/aws-cdk'

dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformElement"></a>

```typescript
import { dataAwsElasticBeanstalkApplication } from '@cdktf/aws-cdk'

dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformDataSource"></a>

```typescript
import { dataAwsElasticBeanstalkApplication } from '@cdktf/aws-cdk'

dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.appversionLifecycle">appversionLifecycle</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList">DataAwsElasticBeanstalkApplicationAppversionLifecycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `appversionLifecycle`<sup>Required</sup> <a name="appversionLifecycle" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.appversionLifecycle"></a>

```typescript
public readonly appversionLifecycle: DataAwsElasticBeanstalkApplicationAppversionLifecycleList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList">DataAwsElasticBeanstalkApplicationAppversionLifecycleList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticBeanstalkApplicationAppversionLifecycle <a name="DataAwsElasticBeanstalkApplicationAppversionLifecycle" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycle.Initializer"></a>

```typescript
import { dataAwsElasticBeanstalkApplication } from '@cdktf/aws-cdk'

const dataAwsElasticBeanstalkApplicationAppversionLifecycle: dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycle = { ... }
```


### DataAwsElasticBeanstalkApplicationConfig <a name="DataAwsElasticBeanstalkApplicationConfig" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.Initializer"></a>

```typescript
import { dataAwsElasticBeanstalkApplication } from '@cdktf/aws-cdk'

const dataAwsElasticBeanstalkApplicationConfig: dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elastic_beanstalk_application#name DataAwsElasticBeanstalkApplication#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elastic_beanstalk_application#id DataAwsElasticBeanstalkApplication#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elastic_beanstalk_application#name DataAwsElasticBeanstalkApplication#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elastic_beanstalk_application#id DataAwsElasticBeanstalkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticBeanstalkApplicationAppversionLifecycleList <a name="DataAwsElasticBeanstalkApplicationAppversionLifecycleList" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer"></a>

```typescript
import { dataAwsElasticBeanstalkApplication } from '@cdktf/aws-cdk'

new dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.get"></a>

```typescript
public get(index: number): DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference <a name="DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticBeanstalkApplication } from '@cdktf/aws-cdk'

new dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3">deleteSourceFromS3</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays">maxAgeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount">maxCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole">serviceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycle">DataAwsElasticBeanstalkApplicationAppversionLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteSourceFromS3`<sup>Required</sup> <a name="deleteSourceFromS3" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3"></a>

```typescript
public readonly deleteSourceFromS3: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxAgeInDays`<sup>Required</sup> <a name="maxAgeInDays" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays"></a>

```typescript
public readonly maxAgeInDays: number;
```

- *Type:* number

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticBeanstalkApplicationAppversionLifecycle;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycle">DataAwsElasticBeanstalkApplicationAppversionLifecycle</a>

---



