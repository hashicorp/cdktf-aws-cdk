# `data_aws_organizations_organizational_units`

Refer to the Terraform Registory for docs: [`data_aws_organizations_organizational_units`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/organizations_organizational_units).

# `dataAwsOrganizationsOrganizationalUnits` Submodule <a name="`dataAwsOrganizationsOrganizationalUnits` Submodule" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsOrganizationalUnits <a name="DataAwsOrganizationsOrganizationalUnits" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/organizations_organizational_units aws_organizations_organizational_units}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnits } from '@cdktf/aws-cdk'

new dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits(scope: Construct, id: string, config: DataAwsOrganizationsOrganizationalUnitsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig">DataAwsOrganizationsOrganizationalUnitsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig">DataAwsOrganizationsOrganizationalUnitsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isConstruct"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnits } from '@cdktf/aws-cdk'

dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformElement"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnits } from '@cdktf/aws-cdk'

dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformDataSource"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnits } from '@cdktf/aws-cdk'

dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.children">children</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList">DataAwsOrganizationsOrganizationalUnitsChildrenList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `children`<sup>Required</sup> <a name="children" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.children"></a>

```typescript
public readonly children: DataAwsOrganizationsOrganizationalUnitsChildrenList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList">DataAwsOrganizationsOrganizationalUnitsChildrenList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnits.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsOrganizationalUnitsChildren <a name="DataAwsOrganizationsOrganizationalUnitsChildren" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildren"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildren.Initializer"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnits } from '@cdktf/aws-cdk'

const dataAwsOrganizationsOrganizationalUnitsChildren: dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildren = { ... }
```


### DataAwsOrganizationsOrganizationalUnitsConfig <a name="DataAwsOrganizationsOrganizationalUnitsConfig" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.Initializer"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnits } from '@cdktf/aws-cdk'

const dataAwsOrganizationsOrganizationalUnitsConfig: dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.parentId">parentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/organizations_organizational_units#parent_id DataAwsOrganizationsOrganizationalUnits#parent_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/organizations_organizational_units#id DataAwsOrganizationsOrganizationalUnits#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/organizations_organizational_units#parent_id DataAwsOrganizationsOrganizationalUnits#parent_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/organizations_organizational_units#id DataAwsOrganizationsOrganizationalUnits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsOrganizationalUnitsChildrenList <a name="DataAwsOrganizationsOrganizationalUnitsChildrenList" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnits } from '@cdktf/aws-cdk'

new dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.get"></a>

```typescript
public get(index: number): DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference <a name="DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer"></a>

```typescript
import { dataAwsOrganizationsOrganizationalUnits } from '@cdktf/aws-cdk'

new dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildren">DataAwsOrganizationsOrganizationalUnitsChildren</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOrganizationsOrganizationalUnitsChildren;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsOrganizationsOrganizationalUnits.DataAwsOrganizationsOrganizationalUnitsChildren">DataAwsOrganizationsOrganizationalUnitsChildren</a>

---



