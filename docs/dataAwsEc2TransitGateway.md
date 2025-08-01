# `dataAwsEc2TransitGateway` Submodule <a name="`dataAwsEc2TransitGateway` Submodule" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGateway <a name="DataAwsEc2TransitGateway" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway aws_ec2_transit_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.Initializer"></a>

```typescript
import { dataAwsEc2TransitGateway } from '@cdktf/aws-cdk'

new dataAwsEc2TransitGateway.DataAwsEc2TransitGateway(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig">DataAwsEc2TransitGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig">DataAwsEc2TransitGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2TransitGatewayFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter">DataAwsEc2TransitGatewayFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2TransitGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isConstruct"></a>

```typescript
import { dataAwsEc2TransitGateway } from '@cdktf/aws-cdk'

dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isTerraformElement"></a>

```typescript
import { dataAwsEc2TransitGateway } from '@cdktf/aws-cdk'

dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2TransitGateway } from '@cdktf/aws-cdk'

dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.generateConfigForImport"></a>

```typescript
import { dataAwsEc2TransitGateway } from '@cdktf/aws-cdk'

dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEc2TransitGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2TransitGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2TransitGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.amazonSideAsn">amazonSideAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.associationDefaultRouteTableId">associationDefaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.autoAcceptSharedAttachments">autoAcceptSharedAttachments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.defaultRouteTableAssociation">defaultRouteTableAssociation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.defaultRouteTablePropagation">defaultRouteTablePropagation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.dnsSupport">dnsSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList">DataAwsEc2TransitGatewayFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.propagationDefaultRouteTableId">propagationDefaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.vpnEcmpSupport">vpnEcmpSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter">DataAwsEc2TransitGatewayFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.amazonSideAsn"></a>

```typescript
public readonly amazonSideAsn: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associationDefaultRouteTableId`<sup>Required</sup> <a name="associationDefaultRouteTableId" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.associationDefaultRouteTableId"></a>

```typescript
public readonly associationDefaultRouteTableId: string;
```

- *Type:* string

---

##### `autoAcceptSharedAttachments`<sup>Required</sup> <a name="autoAcceptSharedAttachments" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.autoAcceptSharedAttachments"></a>

```typescript
public readonly autoAcceptSharedAttachments: string;
```

- *Type:* string

---

##### `defaultRouteTableAssociation`<sup>Required</sup> <a name="defaultRouteTableAssociation" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.defaultRouteTableAssociation"></a>

```typescript
public readonly defaultRouteTableAssociation: string;
```

- *Type:* string

---

##### `defaultRouteTablePropagation`<sup>Required</sup> <a name="defaultRouteTablePropagation" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.defaultRouteTablePropagation"></a>

```typescript
public readonly defaultRouteTablePropagation: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsSupport`<sup>Required</sup> <a name="dnsSupport" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2TransitGatewayFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList">DataAwsEc2TransitGatewayFilterList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `propagationDefaultRouteTableId`<sup>Required</sup> <a name="propagationDefaultRouteTableId" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.propagationDefaultRouteTableId"></a>

```typescript
public readonly propagationDefaultRouteTableId: string;
```

- *Type:* string

---

##### `vpnEcmpSupport`<sup>Required</sup> <a name="vpnEcmpSupport" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.vpnEcmpSupport"></a>

```typescript
public readonly vpnEcmpSupport: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2TransitGatewayFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter">DataAwsEc2TransitGatewayFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayConfig <a name="DataAwsEc2TransitGatewayConfig" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.Initializer"></a>

```typescript
import { dataAwsEc2TransitGateway } from '@cdktf/aws-cdk'

const dataAwsEc2TransitGatewayConfig: dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter">DataAwsEc2TransitGatewayFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway#id DataAwsEc2TransitGateway#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway#tags DataAwsEc2TransitGateway#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2TransitGatewayFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter">DataAwsEc2TransitGatewayFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway#filter DataAwsEc2TransitGateway#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway#id DataAwsEc2TransitGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway#tags DataAwsEc2TransitGateway#tags}.

---

### DataAwsEc2TransitGatewayFilter <a name="DataAwsEc2TransitGatewayFilter" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter.Initializer"></a>

```typescript
import { dataAwsEc2TransitGateway } from '@cdktf/aws-cdk'

const dataAwsEc2TransitGatewayFilter: dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway#name DataAwsEc2TransitGateway#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway#values DataAwsEc2TransitGateway#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway#name DataAwsEc2TransitGateway#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway#values DataAwsEc2TransitGateway#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayFilterList <a name="DataAwsEc2TransitGatewayFilterList" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.Initializer"></a>

```typescript
import { dataAwsEc2TransitGateway } from '@cdktf/aws-cdk'

new dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2TransitGatewayFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter">DataAwsEc2TransitGatewayFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2TransitGatewayFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter">DataAwsEc2TransitGatewayFilter</a>[]

---


### DataAwsEc2TransitGatewayFilterOutputReference <a name="DataAwsEc2TransitGatewayFilterOutputReference" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2TransitGateway } from '@cdktf/aws-cdk'

new dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter">DataAwsEc2TransitGatewayFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2TransitGatewayFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGateway.DataAwsEc2TransitGatewayFilter">DataAwsEc2TransitGatewayFilter</a>

---



