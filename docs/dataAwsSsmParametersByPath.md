# `dataAwsSsmParametersByPath` Submodule <a name="`dataAwsSsmParametersByPath` Submodule" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmParametersByPath <a name="DataAwsSsmParametersByPath" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_parameters_by_path aws_ssm_parameters_by_path}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer"></a>

```typescript
import { dataAwsSsmParametersByPath } from '@cdktf/aws-cdk'

new dataAwsSsmParametersByPath.DataAwsSsmParametersByPath(scope: Construct, id: string, config: DataAwsSsmParametersByPathConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig">DataAwsSsmParametersByPathConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig">DataAwsSsmParametersByPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetRecursive">resetRecursive</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetWithDecryption">resetWithDecryption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRecursive` <a name="resetRecursive" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetRecursive"></a>

```typescript
public resetRecursive(): void
```

##### `resetWithDecryption` <a name="resetWithDecryption" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetWithDecryption"></a>

```typescript
public resetWithDecryption(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSsmParametersByPath resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isConstruct"></a>

```typescript
import { dataAwsSsmParametersByPath } from '@cdktf/aws-cdk'

dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformElement"></a>

```typescript
import { dataAwsSsmParametersByPath } from '@cdktf/aws-cdk'

dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformDataSource"></a>

```typescript
import { dataAwsSsmParametersByPath } from '@cdktf/aws-cdk'

dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport"></a>

```typescript
import { dataAwsSsmParametersByPath } from '@cdktf/aws-cdk'

dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSsmParametersByPath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSsmParametersByPath to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSsmParametersByPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_parameters_by_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsmParametersByPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.arns">arns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.recursiveInput">recursiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.withDecryptionInput">withDecryptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.recursive">recursive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.withDecryption">withDecryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.arns"></a>

```typescript
public readonly arns: string[];
```

- *Type:* string[]

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `recursiveInput`<sup>Optional</sup> <a name="recursiveInput" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.recursiveInput"></a>

```typescript
public readonly recursiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withDecryptionInput`<sup>Optional</sup> <a name="withDecryptionInput" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.withDecryptionInput"></a>

```typescript
public readonly withDecryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.recursive"></a>

```typescript
public readonly recursive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `withDecryption`<sup>Required</sup> <a name="withDecryption" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.withDecryption"></a>

```typescript
public readonly withDecryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmParametersByPathConfig <a name="DataAwsSsmParametersByPathConfig" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.Initializer"></a>

```typescript
import { dataAwsSsmParametersByPath } from '@cdktf/aws-cdk'

const dataAwsSsmParametersByPathConfig: dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_parameters_by_path#path DataAwsSsmParametersByPath#path}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_parameters_by_path#id DataAwsSsmParametersByPath#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.recursive">recursive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_parameters_by_path#recursive DataAwsSsmParametersByPath#recursive}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.withDecryption">withDecryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_parameters_by_path#with_decryption DataAwsSsmParametersByPath#with_decryption}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_parameters_by_path#path DataAwsSsmParametersByPath#path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_parameters_by_path#id DataAwsSsmParametersByPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `recursive`<sup>Optional</sup> <a name="recursive" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.recursive"></a>

```typescript
public readonly recursive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_parameters_by_path#recursive DataAwsSsmParametersByPath#recursive}.

---

##### `withDecryption`<sup>Optional</sup> <a name="withDecryption" id="@cdktf/aws-cdk.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.withDecryption"></a>

```typescript
public readonly withDecryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ssm_parameters_by_path#with_decryption DataAwsSsmParametersByPath#with_decryption}.

---



