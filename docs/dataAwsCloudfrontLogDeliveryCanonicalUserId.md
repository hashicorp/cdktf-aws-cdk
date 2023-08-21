# `data_aws_cloudfront_log_delivery_canonical_user_id`

Refer to the Terraform Registory for docs: [`data_aws_cloudfront_log_delivery_canonical_user_id`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_log_delivery_canonical_user_id).

# `dataAwsCloudfrontLogDeliveryCanonicalUserId` Submodule <a name="`dataAwsCloudfrontLogDeliveryCanonicalUserId` Submodule" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontLogDeliveryCanonicalUserId <a name="DataAwsCloudfrontLogDeliveryCanonicalUserId" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_log_delivery_canonical_user_id aws_cloudfront_log_delivery_canonical_user_id}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.Initializer"></a>

```typescript
import { dataAwsCloudfrontLogDeliveryCanonicalUserId } from '@cdktf/aws-cdk'

new dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId(scope: Construct, id: string, config?: DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig">DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig">DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isConstruct"></a>

```typescript
import { dataAwsCloudfrontLogDeliveryCanonicalUserId } from '@cdktf/aws-cdk'

dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isTerraformElement"></a>

```typescript
import { dataAwsCloudfrontLogDeliveryCanonicalUserId } from '@cdktf/aws-cdk'

dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isTerraformDataSource"></a>

```typescript
import { dataAwsCloudfrontLogDeliveryCanonicalUserId } from '@cdktf/aws-cdk'

dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserId.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig <a name="DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontLogDeliveryCanonicalUserId } from '@cdktf/aws-cdk'

const dataAwsCloudfrontLogDeliveryCanonicalUserIdConfig: dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_log_delivery_canonical_user_id#id DataAwsCloudfrontLogDeliveryCanonicalUserId#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_log_delivery_canonical_user_id#region DataAwsCloudfrontLogDeliveryCanonicalUserId#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_log_delivery_canonical_user_id#id DataAwsCloudfrontLogDeliveryCanonicalUserId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/aws-cdk.dataAwsCloudfrontLogDeliveryCanonicalUserId.DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_log_delivery_canonical_user_id#region DataAwsCloudfrontLogDeliveryCanonicalUserId#region}.

---



