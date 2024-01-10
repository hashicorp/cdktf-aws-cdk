# `dataAwsSecretsmanagerSecret` Submodule <a name="`dataAwsSecretsmanagerSecret` Submodule" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecretsmanagerSecret <a name="DataAwsSecretsmanagerSecret" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret aws_secretsmanager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.Initializer"></a>

```typescript
import { dataAwsSecretsmanagerSecret } from '@cdktf/aws-cdk'

new dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret(scope: Construct, id: string, config?: DataAwsSecretsmanagerSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig">DataAwsSecretsmanagerSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig">DataAwsSecretsmanagerSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetArn` <a name="resetArn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSecretsmanagerSecret resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isConstruct"></a>

```typescript
import { dataAwsSecretsmanagerSecret } from '@cdktf/aws-cdk'

dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isTerraformElement"></a>

```typescript
import { dataAwsSecretsmanagerSecret } from '@cdktf/aws-cdk'

dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isTerraformDataSource"></a>

```typescript
import { dataAwsSecretsmanagerSecret } from '@cdktf/aws-cdk'

dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.generateConfigForImport"></a>

```typescript
import { dataAwsSecretsmanagerSecret } from '@cdktf/aws-cdk'

dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSecretsmanagerSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSecretsmanagerSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSecretsmanagerSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSecretsmanagerSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.rotationEnabled">rotationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList">DataAwsSecretsmanagerSecretRotationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `rotationEnabled`<sup>Required</sup> <a name="rotationEnabled" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.rotationEnabled"></a>

```typescript
public readonly rotationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rotationLambdaArn`<sup>Required</sup> <a name="rotationLambdaArn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.rotationLambdaArn"></a>

```typescript
public readonly rotationLambdaArn: string;
```

- *Type:* string

---

##### `rotationRules`<sup>Required</sup> <a name="rotationRules" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.rotationRules"></a>

```typescript
public readonly rotationRules: DataAwsSecretsmanagerSecretRotationRulesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList">DataAwsSecretsmanagerSecretRotationRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecretsmanagerSecretConfig <a name="DataAwsSecretsmanagerSecretConfig" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.Initializer"></a>

```typescript
import { dataAwsSecretsmanagerSecret } from '@cdktf/aws-cdk'

const dataAwsSecretsmanagerSecretConfig: dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret#arn DataAwsSecretsmanagerSecret#arn}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret#id DataAwsSecretsmanagerSecret#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret#name DataAwsSecretsmanagerSecret#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret#arn DataAwsSecretsmanagerSecret#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret#id DataAwsSecretsmanagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/secretsmanager_secret#name DataAwsSecretsmanagerSecret#name}.

---

### DataAwsSecretsmanagerSecretRotationRules <a name="DataAwsSecretsmanagerSecretRotationRules" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRules.Initializer"></a>

```typescript
import { dataAwsSecretsmanagerSecret } from '@cdktf/aws-cdk'

const dataAwsSecretsmanagerSecretRotationRules: dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRules = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecretsmanagerSecretRotationRulesList <a name="DataAwsSecretsmanagerSecretRotationRulesList" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.Initializer"></a>

```typescript
import { dataAwsSecretsmanagerSecret } from '@cdktf/aws-cdk'

new dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.get"></a>

```typescript
public get(index: number): DataAwsSecretsmanagerSecretRotationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSecretsmanagerSecretRotationRulesOutputReference <a name="DataAwsSecretsmanagerSecretRotationRulesOutputReference" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsSecretsmanagerSecret } from '@cdktf/aws-cdk'

new dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRules">DataAwsSecretsmanagerSecretRotationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticallyAfterDays`<sup>Required</sup> <a name="automaticallyAfterDays" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```typescript
public readonly automaticallyAfterDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSecretsmanagerSecretRotationRules;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSecretsmanagerSecret.DataAwsSecretsmanagerSecretRotationRules">DataAwsSecretsmanagerSecretRotationRules</a>

---



