# `dataAwsSsmPatchBaseline` Submodule <a name="`dataAwsSsmPatchBaseline` Submodule" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmPatchBaseline <a name="DataAwsSsmPatchBaseline" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline aws_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/aws-cdk'

new dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline(scope: Construct, id: string, config: DataAwsSsmPatchBaselineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig">DataAwsSsmPatchBaselineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig">DataAwsSsmPatchBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetDefaultBaseline">resetDefaultBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDefaultBaseline` <a name="resetDefaultBaseline" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetDefaultBaseline"></a>

```typescript
public resetDefaultBaseline(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsmPatchBaseline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/aws-cdk'

dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/aws-cdk'

dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/aws-cdk'

dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.generateConfigForImport"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/aws-cdk'

dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSsmPatchBaseline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSsmPatchBaseline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSsmPatchBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsmPatchBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaselineInput">defaultBaselineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaseline">defaultBaseline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.owner">owner</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `defaultBaselineInput`<sup>Optional</sup> <a name="defaultBaselineInput" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaselineInput"></a>

```typescript
public readonly defaultBaselineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `defaultBaseline`<sup>Required</sup> <a name="defaultBaseline" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.defaultBaseline"></a>

```typescript
public readonly defaultBaseline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaseline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmPatchBaselineConfig <a name="DataAwsSsmPatchBaselineConfig" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.Initializer"></a>

```typescript
import { dataAwsSsmPatchBaseline } from '@cdktf/aws-cdk'

const dataAwsSsmPatchBaselineConfig: dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#owner DataAwsSsmPatchBaseline#owner}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.defaultBaseline">defaultBaseline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#default_baseline DataAwsSsmPatchBaseline#default_baseline}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#id DataAwsSsmPatchBaseline#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#name_prefix DataAwsSsmPatchBaseline#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#operating_system DataAwsSsmPatchBaseline#operating_system}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#owner DataAwsSsmPatchBaseline#owner}.

---

##### `defaultBaseline`<sup>Optional</sup> <a name="defaultBaseline" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.defaultBaseline"></a>

```typescript
public readonly defaultBaseline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#default_baseline DataAwsSsmPatchBaseline#default_baseline}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#id DataAwsSsmPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#name_prefix DataAwsSsmPatchBaseline#name_prefix}.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktf/aws-cdk.dataAwsSsmPatchBaseline.DataAwsSsmPatchBaselineConfig.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_patch_baseline#operating_system DataAwsSsmPatchBaseline#operating_system}.

---



