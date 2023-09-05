# `data_aws_lambda_code_signing_config`

Refer to the Terraform Registory for docs: [`data_aws_lambda_code_signing_config`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_code_signing_config).

# `dataAwsLambdaCodeSigningConfig` Submodule <a name="`dataAwsLambdaCodeSigningConfig` Submodule" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaCodeSigningConfig <a name="DataAwsLambdaCodeSigningConfig" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_code_signing_config aws_lambda_code_signing_config}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer"></a>

```typescript
import { dataAwsLambdaCodeSigningConfig } from '@cdktf/aws-cdk'

new dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig(scope: Construct, id: string, config: DataAwsLambdaCodeSigningConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig">DataAwsLambdaCodeSigningConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig">DataAwsLambdaCodeSigningConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct"></a>

```typescript
import { dataAwsLambdaCodeSigningConfig } from '@cdktf/aws-cdk'

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement"></a>

```typescript
import { dataAwsLambdaCodeSigningConfig } from '@cdktf/aws-cdk'

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsLambdaCodeSigningConfig } from '@cdktf/aws-cdk'

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.allowedPublishers">allowedPublishers</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList">DataAwsLambdaCodeSigningConfigAllowedPublishersList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.policies">policies</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList">DataAwsLambdaCodeSigningConfigPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowedPublishers`<sup>Required</sup> <a name="allowedPublishers" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.allowedPublishers"></a>

```typescript
public readonly allowedPublishers: DataAwsLambdaCodeSigningConfigAllowedPublishersList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList">DataAwsLambdaCodeSigningConfigAllowedPublishersList</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.policies"></a>

```typescript
public readonly policies: DataAwsLambdaCodeSigningConfigPoliciesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList">DataAwsLambdaCodeSigningConfigPoliciesList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaCodeSigningConfigAllowedPublishers <a name="DataAwsLambdaCodeSigningConfigAllowedPublishers" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers.Initializer"></a>

```typescript
import { dataAwsLambdaCodeSigningConfig } from '@cdktf/aws-cdk'

const dataAwsLambdaCodeSigningConfigAllowedPublishers: dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers = { ... }
```


### DataAwsLambdaCodeSigningConfigConfig <a name="DataAwsLambdaCodeSigningConfigConfig" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.Initializer"></a>

```typescript
import { dataAwsLambdaCodeSigningConfig } from '@cdktf/aws-cdk'

const dataAwsLambdaCodeSigningConfigConfig: dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLambdaCodeSigningConfigPolicies <a name="DataAwsLambdaCodeSigningConfigPolicies" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies.Initializer"></a>

```typescript
import { dataAwsLambdaCodeSigningConfig } from '@cdktf/aws-cdk'

const dataAwsLambdaCodeSigningConfigPolicies: dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdaCodeSigningConfigAllowedPublishersList <a name="DataAwsLambdaCodeSigningConfigAllowedPublishersList" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer"></a>

```typescript
import { dataAwsLambdaCodeSigningConfig } from '@cdktf/aws-cdk'

new dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get"></a>

```typescript
public get(index: number): DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference <a name="DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdaCodeSigningConfig } from '@cdktf/aws-cdk'

new dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns">signingProfileVersionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers">DataAwsLambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signingProfileVersionArns`<sup>Required</sup> <a name="signingProfileVersionArns" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns"></a>

```typescript
public readonly signingProfileVersionArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdaCodeSigningConfigAllowedPublishers;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers">DataAwsLambdaCodeSigningConfigAllowedPublishers</a>

---


### DataAwsLambdaCodeSigningConfigPoliciesList <a name="DataAwsLambdaCodeSigningConfigPoliciesList" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer"></a>

```typescript
import { dataAwsLambdaCodeSigningConfig } from '@cdktf/aws-cdk'

new dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get"></a>

```typescript
public get(index: number): DataAwsLambdaCodeSigningConfigPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdaCodeSigningConfigPoliciesOutputReference <a name="DataAwsLambdaCodeSigningConfigPoliciesOutputReference" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdaCodeSigningConfig } from '@cdktf/aws-cdk'

new dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment">untrustedArtifactOnDeployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies">DataAwsLambdaCodeSigningConfigPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `untrustedArtifactOnDeployment`<sup>Required</sup> <a name="untrustedArtifactOnDeployment" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment"></a>

```typescript
public readonly untrustedArtifactOnDeployment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdaCodeSigningConfigPolicies;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies">DataAwsLambdaCodeSigningConfigPolicies</a>

---



