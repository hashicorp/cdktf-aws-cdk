# `dataAwsBatchSchedulingPolicy` Submodule <a name="`dataAwsBatchSchedulingPolicy` Submodule" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBatchSchedulingPolicy <a name="DataAwsBatchSchedulingPolicy" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_scheduling_policy aws_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

new dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy(scope: Construct, id: string, config: DataAwsBatchSchedulingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig">DataAwsBatchSchedulingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig">DataAwsBatchSchedulingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBatchSchedulingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isConstruct"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformElement"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.generateConfigForImport"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsBatchSchedulingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBatchSchedulingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBatchSchedulingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBatchSchedulingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.fairSharePolicy">fairSharePolicy</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList">DataAwsBatchSchedulingPolicyFairSharePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `fairSharePolicy`<sup>Required</sup> <a name="fairSharePolicy" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.fairSharePolicy"></a>

```typescript
public readonly fairSharePolicy: DataAwsBatchSchedulingPolicyFairSharePolicyList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList">DataAwsBatchSchedulingPolicyFairSharePolicyList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBatchSchedulingPolicyConfig <a name="DataAwsBatchSchedulingPolicyConfig" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.Initializer"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

const dataAwsBatchSchedulingPolicyConfig: dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_scheduling_policy#arn DataAwsBatchSchedulingPolicy#arn}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_scheduling_policy#id DataAwsBatchSchedulingPolicy#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_scheduling_policy#tags DataAwsBatchSchedulingPolicy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_scheduling_policy#arn DataAwsBatchSchedulingPolicy#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_scheduling_policy#id DataAwsBatchSchedulingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_scheduling_policy#tags DataAwsBatchSchedulingPolicy#tags}.

---

### DataAwsBatchSchedulingPolicyFairSharePolicy <a name="DataAwsBatchSchedulingPolicyFairSharePolicy" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicy.Initializer"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

const dataAwsBatchSchedulingPolicyFairSharePolicy: dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicy = { ... }
```


### DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution <a name="DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution.Initializer"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

const dataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution: dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBatchSchedulingPolicyFairSharePolicyList <a name="DataAwsBatchSchedulingPolicyFairSharePolicyList" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

new dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.get"></a>

```typescript
public get(index: number): DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference <a name="DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

new dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation">computeReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds">shareDecaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution">shareDistribution</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList">DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicy">DataAwsBatchSchedulingPolicyFairSharePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeReservation`<sup>Required</sup> <a name="computeReservation" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation"></a>

```typescript
public readonly computeReservation: number;
```

- *Type:* number

---

##### `shareDecaySeconds`<sup>Required</sup> <a name="shareDecaySeconds" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds"></a>

```typescript
public readonly shareDecaySeconds: number;
```

- *Type:* number

---

##### `shareDistribution`<sup>Required</sup> <a name="shareDistribution" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution"></a>

```typescript
public readonly shareDistribution: DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList">DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBatchSchedulingPolicyFairSharePolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicy">DataAwsBatchSchedulingPolicyFairSharePolicy</a>

---


### DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList <a name="DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

new dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.get"></a>

```typescript
public get(index: number): DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference <a name="DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer"></a>

```typescript
import { dataAwsBatchSchedulingPolicy } from '@cdktf/aws-cdk'

new dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier">shareIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor">weightFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution">DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shareIdentifier`<sup>Required</sup> <a name="shareIdentifier" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```typescript
public readonly shareIdentifier: string;
```

- *Type:* string

---

##### `weightFactor`<sup>Required</sup> <a name="weightFactor" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```typescript
public readonly weightFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution">DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution</a>

---



