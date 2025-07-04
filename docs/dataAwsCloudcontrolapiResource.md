# `dataAwsCloudcontrolapiResource` Submodule <a name="`dataAwsCloudcontrolapiResource` Submodule" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudcontrolapiResource <a name="DataAwsCloudcontrolapiResource" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource aws_cloudcontrolapi_resource}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer"></a>

```typescript
import { dataAwsCloudcontrolapiResource } from '@cdktf/aws-cdk'

new dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource(scope: Construct, id: string, config: DataAwsCloudcontrolapiResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig">DataAwsCloudcontrolapiResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig">DataAwsCloudcontrolapiResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetTypeVersionId">resetTypeVersionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTypeVersionId` <a name="resetTypeVersionId" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetTypeVersionId"></a>

```typescript
public resetTypeVersionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCloudcontrolapiResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isConstruct"></a>

```typescript
import { dataAwsCloudcontrolapiResource } from '@cdktf/aws-cdk'

dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformElement"></a>

```typescript
import { dataAwsCloudcontrolapiResource } from '@cdktf/aws-cdk'

dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformDataSource"></a>

```typescript
import { dataAwsCloudcontrolapiResource } from '@cdktf/aws-cdk'

dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.generateConfigForImport"></a>

```typescript
import { dataAwsCloudcontrolapiResource } from '@cdktf/aws-cdk'

dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsCloudcontrolapiResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCloudcontrolapiResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCloudcontrolapiResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudcontrolapiResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.properties">properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionIdInput">typeVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionId">typeVersionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `typeVersionIdInput`<sup>Optional</sup> <a name="typeVersionIdInput" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionIdInput"></a>

```typescript
public readonly typeVersionIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `typeVersionId`<sup>Required</sup> <a name="typeVersionId" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionId"></a>

```typescript
public readonly typeVersionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudcontrolapiResourceConfig <a name="DataAwsCloudcontrolapiResourceConfig" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.Initializer"></a>

```typescript
import { dataAwsCloudcontrolapiResource } from '@cdktf/aws-cdk'

const dataAwsCloudcontrolapiResourceConfig: dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource#identifier DataAwsCloudcontrolapiResource#identifier}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource#type_name DataAwsCloudcontrolapiResource#type_name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource#id DataAwsCloudcontrolapiResource#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource#role_arn DataAwsCloudcontrolapiResource#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeVersionId">typeVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource#type_version_id DataAwsCloudcontrolapiResource#type_version_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource#identifier DataAwsCloudcontrolapiResource#identifier}.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource#type_name DataAwsCloudcontrolapiResource#type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource#id DataAwsCloudcontrolapiResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource#role_arn DataAwsCloudcontrolapiResource#role_arn}.

---

##### `typeVersionId`<sup>Optional</sup> <a name="typeVersionId" id="@cdktf/aws-cdk.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeVersionId"></a>

```typescript
public readonly typeVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/cloudcontrolapi_resource#type_version_id DataAwsCloudcontrolapiResource#type_version_id}.

---



