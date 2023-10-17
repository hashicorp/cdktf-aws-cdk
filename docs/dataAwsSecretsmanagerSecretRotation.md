# `data_aws_secretsmanager_secret_rotation`

Refer to the Terraform Registory for docs: [`data_aws_secretsmanager_secret_rotation`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret_rotation).

# `dataAwsSecretsmanagerSecretRotation` Submodule <a name="`dataAwsSecretsmanagerSecretRotation` Submodule" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecretsmanagerSecretRotation <a name="DataAwsSecretsmanagerSecretRotation" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer"></a>

```typescript
import { dataAwsSecretsmanagerSecretRotation } from '@cdktf/aws-cdk'

new dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretRotationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig">DataAwsSecretsmanagerSecretRotationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig">DataAwsSecretsmanagerSecretRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSecretsmanagerSecretRotation resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isConstruct"></a>

```typescript
import { dataAwsSecretsmanagerSecretRotation } from '@cdktf/aws-cdk'

dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformElement"></a>

```typescript
import { dataAwsSecretsmanagerSecretRotation } from '@cdktf/aws-cdk'

dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformDataSource"></a>

```typescript
import { dataAwsSecretsmanagerSecretRotation } from '@cdktf/aws-cdk'

dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.generateConfigForImport"></a>

```typescript
import { dataAwsSecretsmanagerSecretRotation } from '@cdktf/aws-cdk'

dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSecretsmanagerSecretRotation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSecretsmanagerSecretRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSecretsmanagerSecretRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSecretsmanagerSecretRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationEnabled">rotationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList">DataAwsSecretsmanagerSecretRotationRotationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `rotationEnabled`<sup>Required</sup> <a name="rotationEnabled" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationEnabled"></a>

```typescript
public readonly rotationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rotationLambdaArn`<sup>Required</sup> <a name="rotationLambdaArn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationLambdaArn"></a>

```typescript
public readonly rotationLambdaArn: string;
```

- *Type:* string

---

##### `rotationRules`<sup>Required</sup> <a name="rotationRules" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationRules"></a>

```typescript
public readonly rotationRules: DataAwsSecretsmanagerSecretRotationRotationRulesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList">DataAwsSecretsmanagerSecretRotationRotationRulesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecretsmanagerSecretRotationConfig <a name="DataAwsSecretsmanagerSecretRotationConfig" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.Initializer"></a>

```typescript
import { dataAwsSecretsmanagerSecretRotation } from '@cdktf/aws-cdk'

const dataAwsSecretsmanagerSecretRotationConfig: dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret_rotation#secret_id DataAwsSecretsmanagerSecretRotation#secret_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret_rotation#id DataAwsSecretsmanagerSecretRotation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret_rotation#secret_id DataAwsSecretsmanagerSecretRotation#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret_rotation#id DataAwsSecretsmanagerSecretRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsSecretsmanagerSecretRotationRotationRules <a name="DataAwsSecretsmanagerSecretRotationRotationRules" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules.Initializer"></a>

```typescript
import { dataAwsSecretsmanagerSecretRotation } from '@cdktf/aws-cdk'

const dataAwsSecretsmanagerSecretRotationRotationRules: dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecretsmanagerSecretRotationRotationRulesList <a name="DataAwsSecretsmanagerSecretRotationRotationRulesList" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer"></a>

```typescript
import { dataAwsSecretsmanagerSecretRotation } from '@cdktf/aws-cdk'

new dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.get"></a>

```typescript
public get(index: number): DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference <a name="DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsSecretsmanagerSecretRotation } from '@cdktf/aws-cdk'

new dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules">DataAwsSecretsmanagerSecretRotationRotationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticallyAfterDays`<sup>Required</sup> <a name="automaticallyAfterDays" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```typescript
public readonly automaticallyAfterDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSecretsmanagerSecretRotationRotationRules;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules">DataAwsSecretsmanagerSecretRotationRotationRules</a>

---



