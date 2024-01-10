# `dataAwsCloudfrontCachePolicy` Submodule <a name="`dataAwsCloudfrontCachePolicy` Submodule" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontCachePolicy <a name="DataAwsCloudfrontCachePolicy" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_cache_policy aws_cloudfront_cache_policy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy(scope: Construct, id: string, config?: DataAwsCloudfrontCachePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig">DataAwsCloudfrontCachePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig">DataAwsCloudfrontCachePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCloudfrontCachePolicy resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isConstruct"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformElement"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.generateConfigForImport"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsCloudfrontCachePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCloudfrontCachePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCloudfrontCachePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_cache_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudfrontCachePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.minTtl">minTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.parametersInCacheKeyAndForwardedToOrigin">parametersInCacheKeyAndForwardedToOrigin</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

---

##### `parametersInCacheKeyAndForwardedToOrigin`<sup>Required</sup> <a name="parametersInCacheKeyAndForwardedToOrigin" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.parametersInCacheKeyAndForwardedToOrigin"></a>

```typescript
public readonly parametersInCacheKeyAndForwardedToOrigin: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontCachePolicyConfig <a name="DataAwsCloudfrontCachePolicyConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontCachePolicyConfig: dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_cache_policy#id DataAwsCloudfrontCachePolicy#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_cache_policy#name DataAwsCloudfrontCachePolicy#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_cache_policy#id DataAwsCloudfrontCachePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudfront_cache_policy#name DataAwsCloudfrontCachePolicy#name}.

---

### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin: dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin = { ... }
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig: dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig = { ... }
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies: dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies = { ... }
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig: dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig = { ... }
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders: dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders = { ... }
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig: dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig = { ... }
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

const dataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings: dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehavior">cookieBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookies">cookies</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieBehavior`<sup>Required</sup> <a name="cookieBehavior" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehavior"></a>

```typescript
public readonly cookieBehavior: string;
```

- *Type:* string

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookies"></a>

```typescript
public readonly cookies: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehavior">headerBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerBehavior`<sup>Required</sup> <a name="headerBehavior" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehavior"></a>

```typescript
public readonly headerBehavior: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headers"></a>

```typescript
public readonly headers: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfig">cookiesConfig</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotli">enableAcceptEncodingBrotli</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzip">enableAcceptEncodingGzip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfig">headersConfig</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfig">queryStringsConfig</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookiesConfig`<sup>Required</sup> <a name="cookiesConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfig"></a>

```typescript
public readonly cookiesConfig: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList</a>

---

##### `enableAcceptEncodingBrotli`<sup>Required</sup> <a name="enableAcceptEncodingBrotli" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotli"></a>

```typescript
public readonly enableAcceptEncodingBrotli: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableAcceptEncodingGzip`<sup>Required</sup> <a name="enableAcceptEncodingGzip" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzip"></a>

```typescript
public readonly enableAcceptEncodingGzip: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `headersConfig`<sup>Required</sup> <a name="headersConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfig"></a>

```typescript
public readonly headersConfig: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList</a>

---

##### `queryStringsConfig`<sup>Required</sup> <a name="queryStringsConfig" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfig"></a>

```typescript
public readonly queryStringsConfig: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehavior">queryStringBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStrings">queryStrings</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryStringBehavior`<sup>Required</sup> <a name="queryStringBehavior" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```typescript
public readonly queryStringBehavior: string;
```

- *Type:* string

---

##### `queryStrings`<sup>Required</sup> <a name="queryStrings" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStrings"></a>

```typescript
public readonly queryStrings: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.get"></a>

```typescript
public get(index: number): DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer"></a>

```typescript
import { dataAwsCloudfrontCachePolicy } from '@cdktf/aws-cdk'

new dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.items">items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.items"></a>

```typescript
public readonly items: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings</a>

---



