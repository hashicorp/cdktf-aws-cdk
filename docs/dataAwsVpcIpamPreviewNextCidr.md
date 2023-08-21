# `data_aws_vpc_ipam_preview_next_cidr`

Refer to the Terraform Registory for docs: [`data_aws_vpc_ipam_preview_next_cidr`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_ipam_preview_next_cidr).

# `dataAwsVpcIpamPreviewNextCidr` Submodule <a name="`dataAwsVpcIpamPreviewNextCidr` Submodule" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpamPreviewNextCidr <a name="DataAwsVpcIpamPreviewNextCidr" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer"></a>

```typescript
import { dataAwsVpcIpamPreviewNextCidr } from '@cdktf/aws-cdk'

new dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr(scope: Construct, id: string, config: DataAwsVpcIpamPreviewNextCidrConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig">DataAwsVpcIpamPreviewNextCidrConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig">DataAwsVpcIpamPreviewNextCidrConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetDisallowedCidrs">resetDisallowedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetNetmaskLength">resetNetmaskLength</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDisallowedCidrs` <a name="resetDisallowedCidrs" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetDisallowedCidrs"></a>

```typescript
public resetDisallowedCidrs(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetmaskLength` <a name="resetNetmaskLength" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetNetmaskLength"></a>

```typescript
public resetNetmaskLength(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct"></a>

```typescript
import { dataAwsVpcIpamPreviewNextCidr } from '@cdktf/aws-cdk'

dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement"></a>

```typescript
import { dataAwsVpcIpamPreviewNextCidr } from '@cdktf/aws-cdk'

dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource"></a>

```typescript
import { dataAwsVpcIpamPreviewNextCidr } from '@cdktf/aws-cdk'

dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrsInput">disallowedCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolIdInput">ipamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLengthInput">netmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrs">disallowedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLength">netmaskLength</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `disallowedCidrsInput`<sup>Optional</sup> <a name="disallowedCidrsInput" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrsInput"></a>

```typescript
public readonly disallowedCidrsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipamPoolIdInput`<sup>Optional</sup> <a name="ipamPoolIdInput" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolIdInput"></a>

```typescript
public readonly ipamPoolIdInput: string;
```

- *Type:* string

---

##### `netmaskLengthInput`<sup>Optional</sup> <a name="netmaskLengthInput" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLengthInput"></a>

```typescript
public readonly netmaskLengthInput: number;
```

- *Type:* number

---

##### `disallowedCidrs`<sup>Required</sup> <a name="disallowedCidrs" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrs"></a>

```typescript
public readonly disallowedCidrs: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

---

##### `netmaskLength`<sup>Required</sup> <a name="netmaskLength" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLength"></a>

```typescript
public readonly netmaskLength: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamPreviewNextCidrConfig <a name="DataAwsVpcIpamPreviewNextCidrConfig" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.Initializer"></a>

```typescript
import { dataAwsVpcIpamPreviewNextCidr } from '@cdktf/aws-cdk'

const dataAwsVpcIpamPreviewNextCidrConfig: dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.disallowedCidrs">disallowedCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.netmaskLength">netmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}.

---

##### `disallowedCidrs`<sup>Optional</sup> <a name="disallowedCidrs" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.disallowedCidrs"></a>

```typescript
public readonly disallowedCidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmaskLength`<sup>Optional</sup> <a name="netmaskLength" id="@cdktf/aws-cdk.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.netmaskLength"></a>

```typescript
public readonly netmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}.

---



