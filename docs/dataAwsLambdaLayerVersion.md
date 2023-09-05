# `data_aws_lambda_layer_version`

Refer to the Terraform Registory for docs: [`data_aws_lambda_layer_version`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version).

# `dataAwsLambdaLayerVersion` Submodule <a name="`dataAwsLambdaLayerVersion` Submodule" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaLayerVersion <a name="DataAwsLambdaLayerVersion" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version aws_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer"></a>

```typescript
import { dataAwsLambdaLayerVersion } from '@cdktf/aws-cdk'

new dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion(scope: Construct, id: string, config: DataAwsLambdaLayerVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig">DataAwsLambdaLayerVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig">DataAwsLambdaLayerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleArchitecture">resetCompatibleArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleRuntime">resetCompatibleRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCompatibleArchitecture` <a name="resetCompatibleArchitecture" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleArchitecture"></a>

```typescript
public resetCompatibleArchitecture(): void
```

##### `resetCompatibleRuntime` <a name="resetCompatibleRuntime" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleRuntime"></a>

```typescript
public resetCompatibleRuntime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct"></a>

```typescript
import { dataAwsLambdaLayerVersion } from '@cdktf/aws-cdk'

dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement"></a>

```typescript
import { dataAwsLambdaLayerVersion } from '@cdktf/aws-cdk'

dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource"></a>

```typescript
import { dataAwsLambdaLayerVersion } from '@cdktf/aws-cdk'

dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectures">compatibleArchitectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerArn">layerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.licenseInfo">licenseInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingJobArn">signingJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingProfileVersionArn">signingProfileVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeHash">sourceCodeHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeSize">sourceCodeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectureInput">compatibleArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimeInput">compatibleRuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerNameInput">layerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitecture">compatibleArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntime">compatibleRuntime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerName">layerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `compatibleArchitectures`<sup>Required</sup> <a name="compatibleArchitectures" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectures"></a>

```typescript
public readonly compatibleArchitectures: string[];
```

- *Type:* string[]

---

##### `compatibleRuntimes`<sup>Required</sup> <a name="compatibleRuntimes" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimes"></a>

```typescript
public readonly compatibleRuntimes: string[];
```

- *Type:* string[]

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `layerArn`<sup>Required</sup> <a name="layerArn" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerArn"></a>

```typescript
public readonly layerArn: string;
```

- *Type:* string

---

##### `licenseInfo`<sup>Required</sup> <a name="licenseInfo" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.licenseInfo"></a>

```typescript
public readonly licenseInfo: string;
```

- *Type:* string

---

##### `signingJobArn`<sup>Required</sup> <a name="signingJobArn" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingJobArn"></a>

```typescript
public readonly signingJobArn: string;
```

- *Type:* string

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="signingProfileVersionArn" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingProfileVersionArn"></a>

```typescript
public readonly signingProfileVersionArn: string;
```

- *Type:* string

---

##### `sourceCodeHash`<sup>Required</sup> <a name="sourceCodeHash" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeHash"></a>

```typescript
public readonly sourceCodeHash: string;
```

- *Type:* string

---

##### `sourceCodeSize`<sup>Required</sup> <a name="sourceCodeSize" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeSize"></a>

```typescript
public readonly sourceCodeSize: number;
```

- *Type:* number

---

##### `compatibleArchitectureInput`<sup>Optional</sup> <a name="compatibleArchitectureInput" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectureInput"></a>

```typescript
public readonly compatibleArchitectureInput: string;
```

- *Type:* string

---

##### `compatibleRuntimeInput`<sup>Optional</sup> <a name="compatibleRuntimeInput" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimeInput"></a>

```typescript
public readonly compatibleRuntimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `layerNameInput`<sup>Optional</sup> <a name="layerNameInput" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerNameInput"></a>

```typescript
public readonly layerNameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `compatibleArchitecture`<sup>Required</sup> <a name="compatibleArchitecture" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitecture"></a>

```typescript
public readonly compatibleArchitecture: string;
```

- *Type:* string

---

##### `compatibleRuntime`<sup>Required</sup> <a name="compatibleRuntime" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntime"></a>

```typescript
public readonly compatibleRuntime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaLayerVersionConfig <a name="DataAwsLambdaLayerVersionConfig" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.Initializer"></a>

```typescript
import { dataAwsLambdaLayerVersion } from '@cdktf/aws-cdk'

const dataAwsLambdaLayerVersionConfig: dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerName">layerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleArchitecture">compatibleArchitecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleRuntime">compatibleRuntime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version#id DataAwsLambdaLayerVersion#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.version">version</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version#version DataAwsLambdaLayerVersion#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}.

---

##### `compatibleArchitecture`<sup>Optional</sup> <a name="compatibleArchitecture" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleArchitecture"></a>

```typescript
public readonly compatibleArchitecture: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}.

---

##### `compatibleRuntime`<sup>Optional</sup> <a name="compatibleRuntime" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleRuntime"></a>

```typescript
public readonly compatibleRuntime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version#id DataAwsLambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/aws-cdk.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/lambda_layer_version#version DataAwsLambdaLayerVersion#version}.

---



