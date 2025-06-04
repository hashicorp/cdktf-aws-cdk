# `dataAwsCognitoUserPoolSigningCertificate` Submodule <a name="`dataAwsCognitoUserPoolSigningCertificate` Submodule" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCognitoUserPoolSigningCertificate <a name="DataAwsCognitoUserPoolSigningCertificate" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cognito_user_pool_signing_certificate aws_cognito_user_pool_signing_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer"></a>

```typescript
import { dataAwsCognitoUserPoolSigningCertificate } from '@cdktf/aws-cdk'

new dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate(scope: Construct, id: string, config: DataAwsCognitoUserPoolSigningCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig">DataAwsCognitoUserPoolSigningCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig">DataAwsCognitoUserPoolSigningCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCognitoUserPoolSigningCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isConstruct"></a>

```typescript
import { dataAwsCognitoUserPoolSigningCertificate } from '@cdktf/aws-cdk'

dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformElement"></a>

```typescript
import { dataAwsCognitoUserPoolSigningCertificate } from '@cdktf/aws-cdk'

dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformDataSource"></a>

```typescript
import { dataAwsCognitoUserPoolSigningCertificate } from '@cdktf/aws-cdk'

dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport"></a>

```typescript
import { dataAwsCognitoUserPoolSigningCertificate } from '@cdktf/aws-cdk'

dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsCognitoUserPoolSigningCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCognitoUserPoolSigningCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCognitoUserPoolSigningCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cognito_user_pool_signing_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCognitoUserPoolSigningCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCognitoUserPoolSigningCertificateConfig <a name="DataAwsCognitoUserPoolSigningCertificateConfig" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.Initializer"></a>

```typescript
import { dataAwsCognitoUserPoolSigningCertificate } from '@cdktf/aws-cdk'

const dataAwsCognitoUserPoolSigningCertificateConfig: dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cognito_user_pool_signing_certificate#user_pool_id DataAwsCognitoUserPoolSigningCertificate#user_pool_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cognito_user_pool_signing_certificate#id DataAwsCognitoUserPoolSigningCertificate#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cognito_user_pool_signing_certificate#user_pool_id DataAwsCognitoUserPoolSigningCertificate#user_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCognitoUserPoolSigningCertificate.DataAwsCognitoUserPoolSigningCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cognito_user_pool_signing_certificate#id DataAwsCognitoUserPoolSigningCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



