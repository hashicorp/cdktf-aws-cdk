# `dataAwsNetworkInterfaces` Submodule <a name="`dataAwsNetworkInterfaces` Submodule" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkInterfaces <a name="DataAwsNetworkInterfaces" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/network_interfaces aws_network_interfaces}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.Initializer"></a>

```typescript
import { dataAwsNetworkInterfaces } from '@cdktf/aws-cdk'

new dataAwsNetworkInterfaces.DataAwsNetworkInterfaces(scope: Construct, id: string, config?: DataAwsNetworkInterfacesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig">DataAwsNetworkInterfacesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig">DataAwsNetworkInterfacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsNetworkInterfacesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter">DataAwsNetworkInterfacesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsNetworkInterfaces resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isConstruct"></a>

```typescript
import { dataAwsNetworkInterfaces } from '@cdktf/aws-cdk'

dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isTerraformElement"></a>

```typescript
import { dataAwsNetworkInterfaces } from '@cdktf/aws-cdk'

dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isTerraformDataSource"></a>

```typescript
import { dataAwsNetworkInterfaces } from '@cdktf/aws-cdk'

dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.generateConfigForImport"></a>

```typescript
import { dataAwsNetworkInterfaces } from '@cdktf/aws-cdk'

dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsNetworkInterfaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsNetworkInterfaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsNetworkInterfaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/network_interfaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsNetworkInterfaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList">DataAwsNetworkInterfacesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter">DataAwsNetworkInterfacesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.filter"></a>

```typescript
public readonly filter: DataAwsNetworkInterfacesFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList">DataAwsNetworkInterfacesFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsNetworkInterfacesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter">DataAwsNetworkInterfacesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfaces.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkInterfacesConfig <a name="DataAwsNetworkInterfacesConfig" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.Initializer"></a>

```typescript
import { dataAwsNetworkInterfaces } from '@cdktf/aws-cdk'

const dataAwsNetworkInterfacesConfig: dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter">DataAwsNetworkInterfacesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/network_interfaces#id DataAwsNetworkInterfaces#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/network_interfaces#tags DataAwsNetworkInterfaces#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsNetworkInterfacesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter">DataAwsNetworkInterfacesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/network_interfaces#filter DataAwsNetworkInterfaces#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/network_interfaces#id DataAwsNetworkInterfaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/network_interfaces#tags DataAwsNetworkInterfaces#tags}.

---

### DataAwsNetworkInterfacesFilter <a name="DataAwsNetworkInterfacesFilter" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter.Initializer"></a>

```typescript
import { dataAwsNetworkInterfaces } from '@cdktf/aws-cdk'

const dataAwsNetworkInterfacesFilter: dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/network_interfaces#name DataAwsNetworkInterfaces#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/network_interfaces#values DataAwsNetworkInterfaces#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/network_interfaces#name DataAwsNetworkInterfaces#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/network_interfaces#values DataAwsNetworkInterfaces#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsNetworkInterfacesFilterList <a name="DataAwsNetworkInterfacesFilterList" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.Initializer"></a>

```typescript
import { dataAwsNetworkInterfaces } from '@cdktf/aws-cdk'

new dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.get"></a>

```typescript
public get(index: number): DataAwsNetworkInterfacesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter">DataAwsNetworkInterfacesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsNetworkInterfacesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter">DataAwsNetworkInterfacesFilter</a>[]

---


### DataAwsNetworkInterfacesFilterOutputReference <a name="DataAwsNetworkInterfacesFilterOutputReference" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsNetworkInterfaces } from '@cdktf/aws-cdk'

new dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter">DataAwsNetworkInterfacesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsNetworkInterfacesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsNetworkInterfaces.DataAwsNetworkInterfacesFilter">DataAwsNetworkInterfacesFilter</a>

---



