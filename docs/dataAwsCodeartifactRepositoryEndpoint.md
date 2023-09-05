# `data_aws_codeartifact_repository_endpoint`

Refer to the Terraform Registory for docs: [`data_aws_codeartifact_repository_endpoint`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint).

# `dataAwsCodeartifactRepositoryEndpoint` Submodule <a name="`dataAwsCodeartifactRepositoryEndpoint` Submodule" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodeartifactRepositoryEndpoint <a name="DataAwsCodeartifactRepositoryEndpoint" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint aws_codeartifact_repository_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer"></a>

```typescript
import { dataAwsCodeartifactRepositoryEndpoint } from '@cdktf/aws-cdk'

new dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint(scope: Construct, id: string, config: DataAwsCodeartifactRepositoryEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig">DataAwsCodeartifactRepositoryEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig">DataAwsCodeartifactRepositoryEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetDomainOwner">resetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDomainOwner` <a name="resetDomainOwner" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetDomainOwner"></a>

```typescript
public resetDomainOwner(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct"></a>

```typescript
import { dataAwsCodeartifactRepositoryEndpoint } from '@cdktf/aws-cdk'

dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsCodeartifactRepositoryEndpoint } from '@cdktf/aws-cdk'

dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsCodeartifactRepositoryEndpoint } from '@cdktf/aws-cdk'

dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryEndpoint">repositoryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwnerInput">domainOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwner">domainOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `repositoryEndpoint`<sup>Required</sup> <a name="repositoryEndpoint" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryEndpoint"></a>

```typescript
public readonly repositoryEndpoint: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domainOwnerInput`<sup>Optional</sup> <a name="domainOwnerInput" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwnerInput"></a>

```typescript
public readonly domainOwnerInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domainOwner`<sup>Required</sup> <a name="domainOwner" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodeartifactRepositoryEndpointConfig <a name="DataAwsCodeartifactRepositoryEndpointConfig" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.Initializer"></a>

```typescript
import { dataAwsCodeartifactRepositoryEndpoint } from '@cdktf/aws-cdk'

const dataAwsCodeartifactRepositoryEndpointConfig: dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domainOwner">domainOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



