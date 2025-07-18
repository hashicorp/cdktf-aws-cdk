# `dataAwsElbHostedZoneId` Submodule <a name="`dataAwsElbHostedZoneId` Submodule" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElbHostedZoneId <a name="DataAwsElbHostedZoneId" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elb_hosted_zone_id aws_elb_hosted_zone_id}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.Initializer"></a>

```typescript
import { dataAwsElbHostedZoneId } from '@cdktf/aws-cdk'

new dataAwsElbHostedZoneId.DataAwsElbHostedZoneId(scope: Construct, id: string, config?: DataAwsElbHostedZoneIdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig">DataAwsElbHostedZoneIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig">DataAwsElbHostedZoneIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsElbHostedZoneId resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isConstruct"></a>

```typescript
import { dataAwsElbHostedZoneId } from '@cdktf/aws-cdk'

dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isTerraformElement"></a>

```typescript
import { dataAwsElbHostedZoneId } from '@cdktf/aws-cdk'

dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isTerraformDataSource"></a>

```typescript
import { dataAwsElbHostedZoneId } from '@cdktf/aws-cdk'

dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.generateConfigForImport"></a>

```typescript
import { dataAwsElbHostedZoneId } from '@cdktf/aws-cdk'

dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsElbHostedZoneId resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsElbHostedZoneId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsElbHostedZoneId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elb_hosted_zone_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsElbHostedZoneId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneId.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElbHostedZoneIdConfig <a name="DataAwsElbHostedZoneIdConfig" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.Initializer"></a>

```typescript
import { dataAwsElbHostedZoneId } from '@cdktf/aws-cdk'

const dataAwsElbHostedZoneIdConfig: dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elb_hosted_zone_id#id DataAwsElbHostedZoneId#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elb_hosted_zone_id#region DataAwsElbHostedZoneId#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elb_hosted_zone_id#id DataAwsElbHostedZoneId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/aws-cdk.dataAwsElbHostedZoneId.DataAwsElbHostedZoneIdConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elb_hosted_zone_id#region DataAwsElbHostedZoneId#region}.

---



